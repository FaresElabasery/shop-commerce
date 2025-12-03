
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { logout } from "@/Store/authSlice";
import type { AppDispatch, RootState } from "@/Store/store";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import cart from '/cart.svg';
import profile from '/profile.svg';
import search from '/search.svg';




export default function ResponsiveNavbar() {
    const dispatch = useDispatch<AppDispatch>();
    const { token } = useSelector((state: RootState) => state.auth);

    const links = [
        { href: "/sale", label: "On Sale" },
        { href: "/Arrivals", label: "New Arrivals" },
        { href: "/Brands", label: "Brands" },
    ];
    const handleLogout = () => {
        dispatch(logout());
        toast.info('Logout Successful');
    }

    return (
        <header className="w-full bg-background/60 backdrop-blur-sm border-b border-muted/20 sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between gap-4 py-5 px-4">
                <div className="flex items-center gap-3">
                    <div className="md:hidden flex items-center">
                        <Sheet >
                            <SheetTrigger asChild>
                                <button aria-label="open menu" className="p-2 rounded-md hover:bg-muted/10">
                                    <FaBars className="h-5 w-5" />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[85%] sm:w-[420px] px-7 p-5">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <span className="font-medium">Shop.co</span>
                                    </div>
                                </div>
                                <ScrollArea className="h-[60vh]">
                                    <nav className="flex flex-col gap-3">
                                        {links.map((l) => (
                                            <a key={l.href} href={l.href} className="py-3 px-2 rounded-md hover:bg-muted/10" >
                                                {l.label}
                                            </a>
                                        ))}
                                    </nav>
                                    <div className="mt-6 flex flex-col gap-2">
                                        {token ? (
                                            <Button onClick={handleLogout} variant={'destructive'} className="cursor-pointer opacity-90 hover:scale-105 duration-200">Logout</Button>
                                        ) : (
                                            <>
                                                <Button>Login</Button>
                                                <Button>Sign up</Button>
                                            </>
                                        )}
                                    </div>
                                </ScrollArea>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <Link to="/" className="text-2xl font-semibold ">
                        Shop.co
                    </Link>
                </div>
                <div className="md:hidden flex items-center">
                    <div className="flex items-center gap-3">
                        <Link to="/cart"><img src={search} alt="profile icon" /></Link>
                        <Link to="/cart"><img src={cart} alt="cart icon" /></Link>
                        <Link to="/cart"><img src={profile} alt="profile icon" /></Link>
                    </div>
                </div>
                {/* desktop links */}
                <nav className="hidden md:flex items-center gap-6 ">
                    <NavigationMenu >
                        <NavigationMenuList >
                            <NavigationMenuItem >
                                <NavigationMenuTrigger className="!px-0 !bg-transparent">shop</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink asChild>
                                        <Link to="/products">Brands</Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link to="/products">Categories</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    {links.map((l) => (
                        <Link key={l.href} to={l.href} className="text-sm font-medium hover:underline">
                            {l.label}
                        </Link>
                    ))}
                </nav>

                {/* search input */}
                <div className="hidden md:flex items-center relative">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-sm text-muted-foreground"><CiSearch size={24} /></span>
                    <Input type="search" placeholder="search for Products ..." className="rounded-full lg:w-100 ps-10" />
                </div>
                {/* actions */}
                <div className="hidden md:flex items-center gap-3">
                    <Link className="md:hidden" to="/cart"><img src={search} alt="profile icon" /></Link>

                    {token ? (
                        <>
                            <Link to="/cart"><img src={cart} alt="cart icon" /></Link>
                            <Link to="/profile"><img src={profile} alt="profile icon" /></Link>
                            <Button onClick={handleLogout} variant={'destructive'} className="cursor-pointer hover:scale-105 duration-200">Logout</Button>
                        </>
                    ) : (
                        <>
                            <Link to={'/login'} className="bg-black text-white px-4 py-2 rounded-full cursor-pointer hover:scale-105 duration-200" >Login</Link>
                            <Link to={'/register'} className="bg-black text-white px-4 py-2 rounded-full cursor-pointer hover:scale-105 duration-200" >Sign up</Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
