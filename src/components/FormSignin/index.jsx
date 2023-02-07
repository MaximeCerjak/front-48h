import React, {useState} from "react";
import logo from "../../public/logo.png";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import axios  from "axios";

const FormSignin = () => {
    const navigate = useNavigate()

    const [name, setName]=useState("")
    const [surname, setSurname]=useState("")
    const [address, setAddress]=useState("")
    const [phone, setPhone]=useState("")
    const [mail, setMail]=useState("")
    const [password, setPassword]=useState("")
    const [againPassword, setAgainPassword]=useState("")

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeSurname = (e) => {
        setSurname(e.target.value)
    }

    const handleChangeAddress = (e) => {
        setAddress(e.target.value)
    }

    const handleChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleChangeMail = (e) => {
        setMail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleChangeAgainPassword = (e) => {
        setAgainPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== againPassword) {
            alert("Les mots de passe ne correspondent pas")
            return
        }

        axios.post("http://localhost:5000/api/users/register", {
            firstname: name,
            lastname: surname,
            adress: address,
            phone: phone,
            email: mail,
            password: password
        })
        .then((res) => {
            navigate('/connect')
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        }
        )
    }

    return (
        <div>
            <Header />
            <form className="addsign" onSubmit={handleSubmit}>
                <img className="logo1" src={logo} alt="logo"/>
                <div className="signin">
                    <input id= "name" type="text" value={name} placeholder="Prénom" onChange={handleChangeName}/>
                    <input id= "surname" type="text" value={surname} placeholder="Nom de famille" onChange={handleChangeSurname}/>
                    <input id= "address" type="text" value={address} placeholder="Adresse" onChange={handleChangeAddress}/>
                    <input id= "phone" type="text" value={phone} placeholder="Téléphone" onChange={handleChangePhone}/>
                    <input id= "mail" type="text" value={mail} placeholder="Mail" onChange={handleChangeMail}/>
                    <input id= "password" type="password" value={password} placeholder="Mot de passe" onChange={handleChangePassword}/>
                    <input id= "" type="password" value={againPassword} placeholder="Vérification mot de passe" onChange={handleChangeAgainPassword}/>
                </div>
                <button className="button1" type="submit" value="Send" onClick={handleSubmit}>
                    Valider
                </button>
            </form>
        </div>
    );
}

export default FormSignin;