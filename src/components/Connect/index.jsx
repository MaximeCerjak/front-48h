import React, {useState} from "react";
import logo from "../../public/logo.png";
import Header from "../Header";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Connect = () => {
    const navigate = useNavigate()
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")


    const handleSubmit = () => {

        const userData = {
            email : email,
            password: password,
        }

        axios.post('http://localhost:5000/api/users/login', userData)
        .then((res) => {
            const token = res.data.message;
            localStorage.setItem('token', token)
            navigate('/')
            alert("Login sucessfull !!")
        }).catch((err) => {
            alert("Error: " + err.message)
        })
    }

    return (
        <div>
            <Header />
            <form className="connecting">
                <img className="logo1" src={logo} alt=""/>
                <p className="identified">S'identifiez</p>
                <div className="connect">
                    <input id= "mail" type="text"  placeholder="Mail" onChange={(email) => setEmail(email.target.value)}/>
                    <input id= "password" type="password"  placeholder="Mot de passe" onChange={(password) => setPassword(password.target.value)}/>
                </div>
                <button className="button1" type="submit" onClick={handleSubmit} >
                    Se connecter
                </button>
            </form>
        </div>
        
    );
}

export default Connect;