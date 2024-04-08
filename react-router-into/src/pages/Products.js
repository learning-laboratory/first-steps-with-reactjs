import { Link } from "react-router-dom"

export const Products = () => {
    return (
        <>
            <div>
                <h1>Products</h1>
                Go to <Link to="">home</Link>
                <ul>
                    <li>
                        <Link to="1">Product 1</Link>
                    </li>
                    <li>
                        <Link to="2">Product 3</Link>
                    </li>
                    <li>
                        <Link to="3">Product 3</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}