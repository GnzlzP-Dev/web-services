'use client'
import React from "react";

export default function Form() {
  
  return (
    <div>
      <div className="p-3">
        <label htmlFor="name">Nombre: </label>
        <input type="text" className="text-black"/>
      </div>
      <div className="p-3" >
        <label htmlFor="phone">Telefono: </label>
        <input type="text" className="text-black"/>
      </div>
      <div className="p-3">
        <label htmlFor="city">Ciudad: </label>
        <input type="select" className="text-black"/>
      </div>
      <div className="p-3">
        <label htmlFor="e-mail">Correo: </label>
        <input type="text" className="text-black"/>
      </div>
    </div>
  );
}
