import { currencyFormatter } from "../Util/formating";

function MealItem({ id, image, name, price, description, onAddItem }) {

    function addItemHandler(item) {
        onAddItem(item);
    }

    return <div className="meal-item">
        <article>
            <img src={image} alt={name} />
            <div>
                <h3>{name}</h3>
                <div className='meal-item-price'>
                    {currencyFormatter.format(price)}
                </div>
                <p className='meal-item-description'>
                    {description}
                </p>
            </div>
            <div className='meal-item-actions'>
                <button className="button" onClick={() => {
                    addItemHandler({
                        id: id,
                        name: name,
                        description: description,
                        price: price,
                        amount: 1
                    })
                }}>
                    Add to Cart
                </button>
            </div>

        </article>
    </div>;

}
export default MealItem;