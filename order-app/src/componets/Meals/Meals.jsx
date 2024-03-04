import { useContext } from 'react';
import { api } from '../../services/api';
import MealItem from './MealItem';
import { CartContext, MealContext } from '../../store/main-context';

function Meals() {

    const { meals } = useContext(MealContext);
    const { addItem } = useContext(CartContext);

    if (!meals)
        return <p className="status-loading">Loading...</p>

    return <div id="meals">

        {meals.length === 0 && <p>Sem registros</p>}

        {
            meals.map((meal) => (<MealItem
                key={meal.id}
                id={meal.id}
                image={`${api.getUri()}/${meal.image}`}
                name={meal.name}
                price={meal.price}
                description={meal.description}
                onAddItem={addItem}
            />))
        }

    </div>
}
export default Meals;