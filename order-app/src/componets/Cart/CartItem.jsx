import { currencyFormatter } from "../Util/formating";

const CartItem = ({ item, onAddItem, onRemoveItem }) => {

    function addItemHandler(item) {
        onAddItem(item);
    }

    function removeItemHandler(item) {
        onRemoveItem(item);
    }

    return <li className="cart-item">
        <p>{item.name} - {item.amount} x {currencyFormatter.format(item.price)}</p>
        <p className="cart-item-actions">
            <button onClick={() => {
                removeItemHandler(item.id)
            }}>-</button>
            <span>{item.amount}</span>
            <button onClick={() => {
                addItemHandler({
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    price: item.price,
                    amount: 1
                })
            }}>+</button>
        </p>
    </li>
}

export default CartItem;