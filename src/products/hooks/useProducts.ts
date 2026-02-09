import { useQuery } from "@tanstack/react-query"
import { Category, productActions } from ".."

export const useProducts = ({ filtersOption } : { filtersOption?: Category }) => {
    const { data: products = [], error, isFetching } = useQuery({
        queryKey: ['products', { filtersOption } ],
        queryFn: () => productActions.getProducts({ filterKey: filtersOption }),
        staleTime: 1000 * 60 * 60
    })

    return { products, error, isFetching  }
}