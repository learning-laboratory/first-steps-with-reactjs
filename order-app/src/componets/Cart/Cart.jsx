import { useContext, useState } from "react";
import Modal from "../Modal/Modal";
import { CartContext } from "../../store/main-context";
import CartItem from "./CartItem";
import { currencyFormatter } from "../Util/formating";
import CheckoutForm from "./CheckoutForm";

const Cart = ({ openModal, onCloseModal }) => {

    const { items } = useContext(CartContext);
    const { addItem, removeItem } = useContext(CartContext);

    let total = 0;
    items.forEach(item => {
        total += item.price * item.amount;
    });

    const [openCheckoutModal, setOpenCheckoutModal] = useState(false);

    const openCheckoutModalHandler = () => {
        setOpenCheckoutModal(true);
    }

    const closeCheckoutModalHandler = () => {
        setOpenCheckoutModal(false);
    }

    if(!items)
        return <p className="status-loading">Loading...</p>

    return <>
        <Modal className="cart" openModal={openModal}>
            <h2>Your Cart</h2>
            <ul>
                {items.map((item) => <CartItem
                    key={item.id}
                    item={item}
                    onAddItem={addItem}
                    onRemoveItem={removeItem}
                />)}
            </ul>
            <div className="cart-total">
                {currencyFormatter.format(total)}
            </div>
            <div className="modal-actions">
                <button className="text-button" onClick={onCloseModal}>Close</button>
                {items.length > 0 && <button className="button" onClick={openCheckoutModalHandler}>Checkout</button>}
            </div>
        </Modal>
        <CheckoutForm openModal={openCheckoutModal} onCloseModal={closeCheckoutModalHandler} />
    </>
}

export default Cart;