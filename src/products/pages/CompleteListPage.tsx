import { ProductList, useProducts } from ".."

export const CompleteListPage = () => {
  const { products, isFetching } = useProducts({})

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>

      {
        isFetching && <p>Loading...</p>
      }

      {
        products.length > 0 && <ProductList products={products} />
      }


    </div>
  )
}