import {Link} from "react-router-dom";
import firebase from "../auth/firebase.auth";

import { ReactComponent as GoogleIcon } from "../icons/Sign-In-With-Google.svg";

function AuthForm({title, form, handleChange, handleSubmit, googleLogin, error, setErr}) {

    const handleGoogleLogin = async () => {
        const auth = firebase.auth();
        const googleAuth = new firebase.auth.GoogleAuthProvider();
        let res;
        let err;
        try {
            res = await auth.signInWithPopup(googleAuth);
            return res;
        } catch (error) {
            err = {error};
        }

        if (err) {
            setErr(err.message)
        }
    }

    return(
        <>
        <form className="auth-form" onSubmit={ handleSubmit } >
            <h1>{title}</h1>
            <div style={{ display: "flex", alignItems:"center", cursor:"pointer" }} onClick={ handleGoogleLogin } >
                <GoogleIcon />
                <h3>Sign in with Google</h3>
            </div>
            <div className="field">
                <label htmlFor="email" ><span>Email</span></label>
                <input onChange={ handleChange } type="email" name="email" value={ form.email || "" } required />
            </div>
            <div className="field">
                <label htmlFor="password" ><span>Password</span></label>
                <input onChange={ handleChange } type="password" name="password" value={ form.password || "" } required />   
            </div>
            <p style={{ color:"red" }} >{error}</p>
            { title === "Login" ?
                <Link to="" className="forgot-password">Forgot password?</Link>
                :
                null
            }
            <button><span>{title}</span></button>
            { title === "Sign up" ?
                <span>Already have an account? <Link to="/login"> Sign in</Link></span>
                :
                null
            }
        </form>
        </>
    );
}

export default AuthForm;