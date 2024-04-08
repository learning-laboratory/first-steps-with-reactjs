import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'

export const Home = () => {

    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/products')
    }

    return (
        <div>
            <h1>Home</h1>
            Go to <Link to="products">products</Link>
        </div>
    )
}