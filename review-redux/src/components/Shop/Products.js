import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const DUMMY_PRODUCTS = [
    {
      id: 1,
      name: 'Mango',
      price: 20,
      description: 'Lorem ipsum'
    },
    {
      id: 2,
      name: 'Apple',
      price: 10,
      description: 'Lorem ipsum 2'
    },
    {
      id: 3,
      name: 'Banana',
      price: 30,
      description: 'Lorem ipsum 3'
    }
  ]

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>

      <ul>
        {DUMMY_PRODUCTS.map(product =>
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        )}
      </ul>
    </section>
  );
};

export default Products;
