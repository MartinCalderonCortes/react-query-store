import { productsApi } from "../api/products"
import { Product } from "../interfaces/product"

interface GetProductsOptions {
    filterKey?: string
}

const sleep = (seconds: number): Promise<void> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, seconds)
    })
}

export const getProducts = async ({ filterKey }: GetProductsOptions) => {
    await sleep(1000)
    const url = !filterKey ? '/products' : `/products?category=${filterKey}`
    const { data } = await productsApi.get<Product[]>(url)
    return data;
}