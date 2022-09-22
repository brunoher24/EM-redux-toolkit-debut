import { useDispatch } from "react-redux";
import styles from "./Toast.module.css";
import { removeToast } from "./toastSlice";
import { IconContext } from "react-icons";
import { FaTimes } from 'react-icons/fa';


const Toast = ({toast, index}) => {
    const { id, title, description, isClosable } = toast;
    const dispatch = useDispatch();

    const close = () => {
        dispatch(removeToast(id));
    }


    setTimeout(() => { close(); }, 10000); 


    return (
        <section className={styles.toastCtnr} style={{bottom: (index * 50) + "px"}}>
            {isClosable && (
                <button className={styles.closeBtn} onClick={close}>
                    <IconContext.Provider value={{ className: styles.closeIcon }}>
                        <FaTimes />
                    </IconContext.Provider>
                </button>
            )}
            <h2>{title}</h2>
            <p>{description}</p>
        </section>  
    );
};

export default Toast;