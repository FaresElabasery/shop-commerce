import type { ICategorySlug, IProduct } from "@/Interfaces/Products";
import { useMemo } from "react";


type useFilterprops = {
    data: IProduct[],
    selectedCategory: ICategorySlug | null,
    isSortPrice: boolean,
    isSortDate: boolean,
    priceRange: number[]
}
export default function useFilter({ data, selectedCategory, isSortPrice, isSortDate, priceRange }: useFilterprops) {
    return useMemo(() => {
        if (!data) return [];

        let result = structuredClone(data);

        if (selectedCategory) {
            result = result?.filter((item: IProduct) => item.category.slug === selectedCategory) || [];
        }
        result = result.filter((item: IProduct) => item.price >= priceRange[0] && item.price <= priceRange[1])
        if (isSortPrice) {
            result.sort((a: IProduct, b: IProduct) => a.price - b.price)
        }

        if (isSortDate) {
            result.sort((a: IProduct, b: IProduct) => new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime())
        }

        return result;
    }, [data, selectedCategory, isSortPrice, isSortDate, priceRange]);
}
