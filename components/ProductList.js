/* COMPONENTS */
import ProductListView from './ProductListView'

const ProductList = ({ products, productToggleSelect }) => {
    return (
        <>
            {
                products.map((product) => (
                    <ProductListView
                        key={product.id}
                        product={product}
                        productToggleSelect={productToggleSelect}
                    />
                ))
            }
        </>
    )
}
export default ProductList;