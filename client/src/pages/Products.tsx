import { useEffect, useState } from "react"
import "../styles/products.css"

interface IProduct {
    id: string;
    name: string;
    images: string[];
    description: string;
    price: number;
    // default_price: {
    //     unit_amount: number
    // }
    // unit_amount: number;
   }

const Products = () => {

    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        const fetchProducts = async() => {
            try {
                const response = await fetch("http://localhost:3000/payments/products")
                const fetchedData = await response.json()
                console.log(fetchedData)
                
                // const productsWithPrice: IProduct[] = fetchedData.map((product: IProduct) => ({
                //     ...product,
                //     price: product.unit_amount 
                // }))
    
                // setProducts(productsWithPrice)
                setProducts(fetchedData)
                
            
            } catch(error) {
                console.log( error)
            }
        }

        fetchProducts()
    }, [])
    

    return (
        <>
            <h1>Products</h1>
                    <div className="prod_container">
                        {products.map(product => (
                            <div className="product" key={product.id}>
                      <h3>{product.name}</h3> 
                      <div className="prod_details">
                      {product.images.map((image, index) => (
                        <img key={index} src={image} alt={product.name} />
                      ))}
                        <p>{product.description}</p>
                        <p>Price: {product.price !== undefined ? `${product.price} SEK` : 'Price not available'} SEK</p>
                    </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products