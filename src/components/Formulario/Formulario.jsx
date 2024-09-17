import React from 'react'
import "./Formulario.css"
const Formulario = () => {
  return (
    <div className='container'>
        <h2 className='title'>Registro</h2>
        <form action="">
            <label>
                nombre: 
                <input type="text" />
            </label>
            <label>
                apellido: 
                <input type="text" />
            </label>
            <label>
                email: 
                <input type="email" />
            </label>
            <label>
                telefono: 
                <input type="number" />
            </label>
            <label>
                password: 
                <input type="password" />
            </label>
            <label>
                confirmar password: 
                <input type="password" />
            </label>
            <button type='submit'>Registrarse</button>
        </form>
    </div>
  )
}

export default Formulario