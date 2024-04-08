import { Link, useParams } from "react-router-dom"

export const Product = (props) => {
    const params = useParams();
    const id = params.id;

    return (
        <>
            <div>
                <h1>Product Detail: {id}</h1>
                <p><Link to=".." relative="path">Back</Link></p>
            </div>
        </>
    )
}