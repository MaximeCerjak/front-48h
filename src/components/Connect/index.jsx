import React, {useState} from "react";
import logo from "../../public/logo.png";

const Connect = () => {

    const [mail, setMail]=useState("")
    const [password, setPassword]=useState("")

    const handleChangeMail = (e) => {
        setMail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }


    return (
        <form className="connecting">
            <img className="logo1" src={logo} />
            <p className="identified">S'identifiez</p>
            <div className="connect">
                 <input id= "mail" type="text" value={mail} placeholder="Mail" onChange={handleChangeMail}/>
                 <input id= "password" type="text" value={password} placeholder="Mot de passe" onChange={handleChangePassword}/>
            </div>
            <button type="submit" value="To log in" >
                Se connecter
            </button>
        </form>
    );
}

export default Connect;