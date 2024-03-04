import { useContext, useState } from "react";
import Modal from "../Modal/Modal"
import { CartContext } from "../../store/main-context";
import { currencyFormatter } from "../Util/formating";

const CheckoutForm = ({ openModal, onCloseModal }) => {

    const { items, checkoutOrder } = useContext(CartContext);
    let total = 0;
    items.forEach(item => {
        total += item.price * item.amount;
    });

    const [status, setStatus] = useState({
        type: "",
        message: ""
    });
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");

    const submitOrder = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const response = await checkoutOrder(JSON.stringify({
                order: {
                    items: items,
                    customer: Object.fromEntries(formData.entries())
                }
            }))
            setStatus({
                type: "success",
                message: response.message
            });
        } catch (error) {
            setStatus({
                type: "error",
                message: response.message
            });
        }

    }

    return <Modal className="cart" openModal={openModal}>
        <form action="#" onSubmit={submitOrder}>

            {status.type === "error" && <p className="status-error">{status.message}</p>}
            {status.type === "success" && <p className="status-success">{status.message}</p>}

            <h2>Checkout</h2>
            <div className="control">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className="control">
                <label htmlFor="email">E-mail:</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className="control">
                <label htmlFor="street">Street:</label>
                <input type="text" name="street" id="street" value={street} onChange={(e) => { setStreet(e.target.value) }} />
            </div>
            <div className="control">
                <label htmlFor="postal-code">Postal Code:</label>
                <input type="text" name="postal-code" id="postal-code" value={postalCode} onChange={(e) => { setPostalCode(e.target.value) }} />
            </div>
            <div className="control">
                <label htmlFor="city">City:</label>
                <input type="text" name="city" id="city" value={city} onChange={(e) => { setCity(e.target.value) }} />
            </div>
            <div className="cart-total">
                {currencyFormatter.format(total)}
            </div>
            <div className="modal-actions">
                <button className="text-button" onClick={() => { onCloseModal() }}>Close</button>
                {items.length > 0 && <button className="button">Checkout</button>}
            </div>
        </form>
    </Modal>
}

export default CheckoutForm;