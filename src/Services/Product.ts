import type { ICategorySlug } from "@/Interfaces/Products";
import axios from "axios";

export const fetchProducts = async (
    page = 1,
    category?: ICategorySlug | null) => {
    let url = `https://api.escuelajs.co/api/v1/products?limit=10&offset=${(page) * 10}`;
    if (category) {
        url += `&categorySlug=${category}`;
    }
    const response = await axios(url);
    return await response.data
}