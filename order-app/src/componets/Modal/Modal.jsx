import { useEffect, useRef } from "react";


const Modal = ({ openModal = false, children, className = '' }) => {

    const dialogRef = useRef();

    useEffect(() => {
        const modal = dialogRef.current;

        if (openModal) {
            modal.showModal();
        }

        return () => modal.close();
    }, [openModal]);

    return <dialog
        ref={dialogRef}
        className={`modal ${className}`}>
        {children}
    </dialog>
}

export default Modal;