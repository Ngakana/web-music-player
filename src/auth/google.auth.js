import firebaseApp from "./firebase.auth";

const googleLogin = async () => {

    const auth = firebaseApp.auth();
    const googleAuth = new auth.googleAuthProvider();

    try {
        const res = await auth.signInWithPopup(googleAuth);
        return res;
    } catch (error) {
        const err = {error};
        return err;
    }
    
}

export default googleLogin;