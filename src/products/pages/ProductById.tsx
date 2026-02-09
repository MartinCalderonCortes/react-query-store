import { useParams } from "react-router-dom"
import { ProductCard, useProduct } from ".."
import { useEffect } from "react"

export const ProductById = () => {

  const { id } = useParams()
  const { product, isFetching } = useProduct({ id: +id! })

  useEffect(() => {
    scrollTo({
      top: 0
    })

  }, [])

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Product</h1>

      {
        isFetching && <p>Loading...</p>
      }

      {product && <ProductCard product={product[0]} canFullDescription />}

    </div>
  )
}