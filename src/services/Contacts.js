import React, { useState } from "react";
import { db_firestore } from "./firebaseConf";
import { collection, addDoc} from "firebase/firestore";

export const Contact = ()=> {
    const [name, setName]=useState("");
    const [lastname, setLastName]= useState("");
    const [phone, setPhone] =useState("");
    const [city, setCity] =useState("");
    const [email, setEmail] = useState("");

    const handleSubmit= (e)=>{
        e.preventDefault();

        const uploadContacts = async() =>{
            const docRef= await addDoc(collection(db_firestore,"contacts"),{
                first_name: name,
                last_name: lastname,
                phone_number: phone,
                city:city,
                email:email
            })
        };
        uploadContacts();
    };
    
   /*  setName="";
    setLastName="",
    setPhone="";
    setCity="";
    setEmail=""; */

    return(
        <form className="form" onSubmit={handleSubmit}>
            <h1>Contactanos</h1>

            <label>Nombres</label>
            <input
            placeholder="Nombres"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />


            <label>Apellidos</label>
            <input
            placeholder="Apellidos"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}/>

            <label>Telefono</label>
            <input 
            placeholder="Telefono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}/>

            <label>Ciudad</label>
            <input
            placeholder="Ciudad"
            value={city}
            onChange={(e) => setCity(e.target.value)}/>

            <label>e-mail</label>
            <input 
            placeholder="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>

            <button type="submit">"enviar"</button>
        </form>
    );
};
