
import { useState } from "react";
import AuthForm from "../Components/AuthForm";

import firebase from "../auth/firebase.auth";
import useAuthForm from "../hooks/useAuthForm";

function Login() {

    const [error, setErr] = useState("");
    const auth = firebase.auth();

    const submitCallback = async (form) => {
        try {
            
            // const res = await fetch("url", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json" 
            //     },
            //     body: form
            // });
            const res = await auth.signInWithEmailAndPassword(form.email, form.password);
            console.log("Success!",res);

        } catch (err) {
            if (err.code) {
                setErr("Email is not registered");
            }
            else {
                setErr("Succesfully signed in")
            }
        }        
    }

    const [form, handleChange, handleSubmit] = useAuthForm(submitCallback);

    return(
        <AuthForm title="Login" form={form} handleChange={handleChange} handleSubmit={handleSubmit} error={error} setErr={setErr} />
    );
}

export default Login;