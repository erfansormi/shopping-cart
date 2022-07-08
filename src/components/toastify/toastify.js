import { toast } from 'react-toastify';

const notify = (text, type) => {
    if (type == "success") {
        toast(text, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            type: "success"
        });
    }
    if (type == "error") {
        toast(text, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            type: "error"
        });
    }
    if (type == "default") {
        toast(text, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            type: "default"
        });
    }
}

export { notify }