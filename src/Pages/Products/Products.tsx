import AccordionComponent from "@/Components/AccordionComponent/AccordionComponent";
import { BreadcrumbComponent } from "@/Components/BreadcrumbComponent/BreadcrumbComponent";
import PriceRange from "@/Components/PriceRanger/PriceRanger";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { SkeletonCard } from "@/Components/SkeletonCard/SkeletonCard";
import SortComponent from "@/Components/SortComponent/SortComponent";
import { Separator } from "@/components/ui/separator";
import useFilter from "@/hooks/useFilter";
import useProduct from "@/hooks/useProduct";
import { type ICategorySlug, type IProduct } from "@/Interfaces/Products";
import { fetchProducts } from "@/Services/Product";
import { QueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "../../Components/ui/pagination";
import filter from '/filter.svg';


const queryClient = new QueryClient()
export default function Products() {
    const [page, setPage] = useState<number>(0)

    const [selectedCategory, setSelectedCategory] = useState<ICategorySlug>(null)
    const [isSortPrice, setIsSortPrice] = useState<boolean>(false)
    const [isSortDate, setIsSortDate] = useState<boolean>(false)
    const [priceRange, setPriceRange] = useState<number[]>([0, 200])

    const { isPending, error, data, isPlaceholderData } = useProduct({ page, selectedCategory })

    const displayData = useFilter({ data, selectedCategory, isSortPrice, isSortDate, priceRange });

    const categories: { name: string, slug: ICategorySlug }[] = [
        { name: 'Clothes', slug: 'clothes' },
        { name: 'Electronics', slug: 'electronics' },
        { name: 'Furniture', slug: 'furniture' },
        { name: 'Shoes', slug: 'shoes' },
        { name: 'Miscellaneous', slug: 'miscellaneous' },
    ]

    useEffect(() => {
        if (!isPlaceholderData) {
            queryClient.prefetchQuery({
                queryKey: ['products', page + 1],
                queryFn: () => fetchProducts(page + 1, selectedCategory),
            })
        }
    }, [data, isPlaceholderData, page, selectedCategory])

    useEffect(() => {
        if (selectedCategory) {
            setPage(0)
        }
    }, [selectedCategory])


    if (error) return 'An error has occurred: ' + <h1>{error.message}</h1>
    return (
        <div className="md:min-h-100">
            <div className="container">
                <BreadcrumbComponent title={['Home', 'Products']} />
                <div className="grid md:grid-cols-4 gap-4 mt-10">

                    {/* filter col */}
                    <div className="hidden md:block md:col-span-1 Filters rounded-xl  p-5 border h-fit  sticky top-25 right-0">
                        <div className="title flex items-center justify-between">
                            <span className="font-bold">Filters</span>
                            <span><img src={filter} alt="Filter icon" /></span>
                        </div>
                        <Separator className="my-4" />
                        <div className="flex flex-col gap-5">
                            {categories.map((category) => (
                                <button key={category.slug} onClick={() => setSelectedCategory(category.slug)} className=" hover:underline underline-offset-4 duration-200 text-start cursor-pointer">{category.name} </button>
                            ))}
                        </div>
                        <Separator className="my-4" />
                        <AccordionComponent title='Price' item={<PriceRange priceRange={priceRange} setPriceRange={setPriceRange} />} />
                        <Separator className="my-4" />
                        <AccordionComponent title='Sort' item={<SortComponent isSortPrice={isSortPrice} setIsSortPrice={setIsSortPrice} isSortDate={isSortDate} setIsSortDate={setIsSortDate} />} />
                    </div>

                    {/* product col */}
                    <div className="col-span-4 md:col-span-3 relative pb-10 md:pb-5">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                            {/* display data */}
                            {isPending && Array.from({ length: 12 }).map((_, index) => <SkeletonCard key={index} />)}
                            {!isPlaceholderData && displayData?.length === 0 && <h2 className="sm:text-2xl md:text-5xl text-center md:col-span-3 font-bold mt-8">No products found.</h2>}
                            {displayData?.map((item: IProduct) => (
                                <ProductCard key={item.id} product={item} />
                            ))}
                        </div>

                        {/* pagination */}
                        <Pagination className="absolute  -bottom-15 left-1/2 -translate-x-1/2 mb-15 md:mb-8" >
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious className="cursor-pointer" onClick={() => setPage((old) => Math.max(old - 1, 0))} />
                                </PaginationItem>
                                {page > 0 &&
                                    <>
                                        <PaginationItem>
                                            <PaginationEllipsis />
                                        </PaginationItem>
                                        <PaginationItem onClick={() => setPage((old) => Math.max(old - 1, 0))}>
                                            <span className="cursor-pointer" >{page}</span>
                                        </PaginationItem>
                                    </>
                                }
                                <PaginationItem>
                                    <Link to="?offset=10&limit=10" className="text-white bg-black/60 px-2 py-1 rounded-md"   >
                                        {page + 1}
                                    </Link>
                                </PaginationItem>
                                <PaginationItem onClick={() => setPage((old) => old + 1)}>
                                    <span className="cursor-pointer" >{page + 2}</span>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem onClick={() => setPage((old) => old + 1)}>
                                    <PaginationNext className="cursor-pointer" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>
        </div >
    )
}
