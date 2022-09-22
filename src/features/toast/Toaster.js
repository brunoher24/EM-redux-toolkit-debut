import { useSelector } from 'react-redux';
import { selectToasts } from './toastSlice';
import Toast from './Toast';




const Toaster = ({options, index}) => {
    const toasts = useSelector(selectToasts);

    return (
        <>
        {(toasts && toasts.length > 0) && toasts.map((toast, index) => (
            <Toast key={toast.id} toast={toast} index={index}/>
        ))}
        </>
    );
}

export default Toaster;