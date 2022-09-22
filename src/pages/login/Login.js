import styles from "./Login.module.css";
import { useState } from "react";
import { login } from "../../features/auth/authAPI";
import { useDispatch } from "react-redux";
import { setUserInfos } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { addToast } from "../../features/toast/toastSlice";

const Login = () => {    
    const [loginFormInfos, setLoginFormInfos] = useState({
        username: "",
        password: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleFormChange = ({target: {name, value}}) => {
        setLoginFormInfos(prev => ({...prev, [name]: value}));
    }

    const login_ = async e => {
        e.preventDefault();
        try {
            const userInfos  = await login(loginFormInfos);
            dispatch(setUserInfos(userInfos));
            navigate("/");
        } catch(err) {
            dispatch(addToast({
                title: "Erreur", description: err.error.description, isClosable: true
            }));
        } 
    }
    return (
        <div className={styles.loginCtnr}>
            <h1>Connexion</h1>
            <form className={styles.loginForm} onSubmit={login_}>
                <p>
                    <label htmlFor="username-input">Votre nom</label><br/>
                    <input name="username" onChange={handleFormChange} id="username-input" type="text" value={loginFormInfos.username}/>
                </p>
                <p>
                    <label htmlFor="password-input">Votre mot de passe</label><br/>
                    <input name="password" onChange={handleFormChange} id="password-input" type="text" value={loginFormInfos.password}/>
                </p>
                <input type="submit" value="Connexion" />
            </form>
        </div>
    )
};

export default Login;