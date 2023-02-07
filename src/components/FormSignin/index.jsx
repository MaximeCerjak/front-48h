import React, {useState} from "react";
import logo from "../../public/logo.png";
import Header from "../Header";

const FormSignin = () => {

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

    return (
        <div>
            <Header />
            <form className="addsign">
                <img className="logo1" src={logo} alt="logo"/>
                <div className="signin">
                    <input id= "name" type="text" value={name} placeholder="Name" onChange={handleChangeName}/>
                    <input id= "surname" type="text" value={surname} placeholder="Surname" onChange={handleChangeSurname}/>
                    <input id= "address" type="text" value={address} placeholder="Address" onChange={handleChangeAddress}/>
                    <input id= "phone" type="text" value={phone} placeholder="Phone" onChange={handleChangePhone}/>
                    <input id= "mail" type="text" value={mail} placeholder="Mail" onChange={handleChangeMail}/>
                    <input id= "password" type="text" value={password} placeholder="Password" onChange={handleChangePassword}/>
                    <input id= "" type="text" value={againPassword} placeholder="Again Password" onChange={handleChangeAgainPassword}/>
                </div>
                <button type="submit" value="Send" >
                    Send
                </button>
            </form>
        </div>
    );
}

export default FormSignin;