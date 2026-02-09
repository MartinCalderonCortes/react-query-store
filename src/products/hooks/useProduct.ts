import { useQuery } from "@tanstack/react-query"
import { getProductsById } from "../services/actions"

export const useProduct = ({ id } : { id: number }) => {
    const { data, isFetching, error  } = useQuery({
        queryKey: ['product', { id }],
        queryFn: () => getProductsById(id)
    })

    return { product: data, isFetching, error }
}