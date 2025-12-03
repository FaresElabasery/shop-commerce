export interface IProduct {
    id: number
    title: string
    slug: string
    price: number
    description: string
    category: ICategory
    images: string[]
    creationAt: string
    updatedAt: string
}

export interface ICategory {
    id: number
    name: string
    slug: ICategorySlug
    image: string
    creationAt: string
    updatedAt: string
}
export type ICategorySlug = 'clothes' | 'electronics' | 'furniture' | 'shoes' | 'miscellaneous' | null