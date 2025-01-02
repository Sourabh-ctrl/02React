import React, { useState } from "react";
import image3 from "../../assets/image3.png";
import './Contact.css'

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  return (
    <>
      <img src={image3} className="background fade-in" alt="" />
      <form className="form">
        <label
          htmlFor="name"
        >
          Name
        </label>
        <input  onChange={(e) => {
            setname(e.target.value);
            console.log(name)
          }}
          value={name} placeholder="enter name" type="text" />
        <label htmlFor="">E-mail</label>
        <input onChange={(e) => {
            setemail(e.target.value);
            console.log(email)
          }}
          value={email} placeholder="enter email" type="text" />
          <label htmlFor="">Details</label>
          <textarea name="" id=""></textarea>
          <button>Reach US</button>
      </form>
    </>
  );
};

export default Contact;
