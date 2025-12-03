import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font bg-bg-hero mt-50 sm:mt-30 relative">
            <div className="absolute top-0 -translate-y-1/2 start-0 end-0 w-10/12 mx-auto ">
                <div className="bg-black rounded-2xl w-full  p-10 flex flex-col sm:flex-row gap-6 justify-between items-center ">
                    <p className="font-bold text-4xl text-white w-full sm:w-[600px]">STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
                    <form className="flex flex-col gap-2 w-full sm:w-[400px]">
                        <div className="relative">
                            <Input className="rounded-full bg-white ps-12" type="email" placeholder="Enter your Email address" />
                            <img className="absolute left-4 top-2" src="/email.svg" alt="email icon" />
                        </div>
                        <Button className="bg-white text-black hover:bg-gray-200   duration-200 cursor-pointer font-bold py-2 px-4 rounded-full" type="submit">Subscribe</Button>
                    </form>
                </div>
            </div>
            <div className="container pt-30 pb-15 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left pt-20">
                    <Link to={'/'} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <span className="font-bold text-3xl">Shop.co</span>
                    </Link>
                    <p className="mt-2 text-sm text-black/60">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    <span className="inline-flex sm:ml-auto sm:mt-10 mt-2 justify-center sm:justify-start ">
                        <a href={'https://github.com/FaresElabasery'} className=" rounded-full size-7 flex-center bg-white hover:bg-black text-black hover:text-white duration-200">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                        <a href={'https://github.com/FaresElabasery'} className="ml-3  rounded-full size-7 flex-center bg-white hover:bg-black text-black hover:text-white duration-200">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                        <a href={'https://github.com/FaresElabasery'} className="ml-3  rounded-full size-7 flex-center bg-white hover:bg-black text-black hover:text-white duration-200">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                            </svg>
                        </a>
                        <a href={'https://github.com/FaresElabasery'} className="ml-3  rounded-full size-7 flex-center bg-white hover:bg-black text-black hover:text-white duration-200">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                <circle cx={4} cy={4} r={2} stroke="none" />
                            </svg>
                        </a>
                    </span>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">Company</h2>
                        <nav className="list-none mb-10 flex flex-col gap-4 ">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">About</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Features</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Works</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Careers</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">Help</h2>
                        <nav className="list-none mb-10 flex flex-col gap-4">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Customer Support</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Delivery Details</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Terms & conditions</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">FAQ</h2>
                        <nav className="list-none mb-10 flex flex-col gap-4">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Account</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Manage Deliveries</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Orders</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Payments</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">Resources</h2>
                        <nav className="list-none mb-10 flex flex-col gap-4">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Free eBooks</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Development </a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">How to - Blog</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Youtube Playlist</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="Copyrights ">
                <div className="container border-t py-2  flex flex-wrap justify-center items-center sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">Shop.co © 2000-2023, All Rights Reserved
                    </p>
                    <span className="sm:ml-auto sm:mt-0 ">
                        <img src="/visa.svg" alt="visa photo" />
                    </span>
                </div>
            </div>
        </footer>
    )
}
