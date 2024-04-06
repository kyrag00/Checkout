import { useEffect, useState } from "react"

interface Product {
    id: string;
    name: string;
    images: string[];
    description: string;
    price: number;
  }

const Products = () => {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchProducts = async() => {
            try {
                const response = await fetch("http://localhost:3000/payments/products")
                const data: Product[] = await response.json()
                setProducts(data)
            } catch (error) {
                console.log("Error fetching products", error)
            }
        }
        fetchProducts()
    }, [])
    

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                      <div>Name: {product.name}</div> 
                      <div>
                      {product.images.map((image, index) => (
                        <img key={index} src={image} alt={`Product ${index}`} />
                      ))}
                        </div> 

                        <p>{product.description}</p>
                        
                        {/* <p>Price: {product.price}</p> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Products