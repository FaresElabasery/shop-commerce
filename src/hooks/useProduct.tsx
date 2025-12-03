import type { ICategorySlug } from "@/Interfaces/Products";
import { fetchProducts } from "@/Services/Product";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export default function useProduct({ page = 0, selectedCategory }: { page: number, selectedCategory?: ICategorySlug | null }) {
    return useQuery({
        queryKey: ['products', page, selectedCategory],
        queryFn: () => fetchProducts(page, selectedCategory),
        placeholderData: keepPreviousData,
        staleTime: 5000
    })
}
