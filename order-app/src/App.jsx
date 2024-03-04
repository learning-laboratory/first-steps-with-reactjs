
import { useState } from 'react';
import Cart from './componets/Cart/Cart.jsx';
import Header from './componets/Header/Header.jsx';
import Meals from './componets/Meals/Meals.jsx';

function App() {

  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  }

  const closeModalHandler = () => {
    setOpenModal(false);
  }

  return (
    <>
      <Header onOpenModal={openModalHandler} />
      <Meals />
      <Cart openModal={openModal} onCloseModal={closeModalHandler}/>
    </>
  );
}

export default App;
