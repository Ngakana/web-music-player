import { useState } from "react";

const useAuthForm = (submitCallback) => {
    const [ state, setState ] = useState({});

    const handleChange = (event) => {
        event.persist();
        const { name, value } = event.target;

        setState( (state) => ({ ...state, [name]: value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await submitCallback(state);
    }

    return [state, handleChange, handleSubmit]
}

export default useAuthForm;