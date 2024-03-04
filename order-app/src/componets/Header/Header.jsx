import { useContext } from 'react';
import logo from '../../assets/logo.jpg';
import { CartContext } from '../../store/main-context';

function Header({ onOpenModal }) {

    const { items } = useContext(CartContext);

    const openModalHandler = () => {
        onOpenModal();
    }

    return <header id="main-header">
        <div id="title">
            <img src={logo} alt="Logo" />
            <h1>Food Order</h1>
        </div>
        <button className='button' onClick={openModalHandler}>Cart ({items.length})</button>
    </header>;
}

export default Header;