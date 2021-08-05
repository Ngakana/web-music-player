import AuthForm from "../Components/AuthForm";

import useAuthForm from "../hooks/useAuthForm";

function Signup() {

    let error;
    const submitCallback = async (form) => {
        try {
            const res = await fetch("url", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" 
                },
                body: form
            });
            error = res;
            console.log(error);

        } catch (error) {
            console.log(error);
        }
    }

    const [form, handleChange, handleSubmit] = useAuthForm(submitCallback);

    return ( 
        <AuthForm title="Sign up" form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
        // <p>Hello</p>
    );
}

export default Signup;