import { useQuery } from "@tanstack/react-query"
import { productActions } from ".."

export const useProducts = () => {
    const { data: products = [], error, isFetching } = useQuery({
        queryKey: ['products'],
        queryFn: () => productActions.getProducts({})
    })

    console.log('useProducts', products);
    

    return { products, error, isFetching  }
}