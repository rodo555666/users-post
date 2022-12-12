import React from 'react'
import { useForm } from "react-hook-form"
import { useState, useEffect } from 'react'
import './form.css'

const Formuser = ( {crateNewUser , update , editUser , setupdate} ) => {

   useEffect(() => {
   reset(update)
   }, [update])
   

    const { register, reset, handleSubmit } = useForm()

    const submit = data => {
     if (update) {
        editUser(update.id, data)
        setupdate()
     } else {
          crateNewUser(data)
     }

      
   

   reset ({
    email:"", 
    password:"",
    first_name:"",
    last_name:"",
    birthday:""
   
   })

    }




    return (
        <form onSubmit={handleSubmit(submit)}  className="formcontainer">
            <h2>Create</h2>
            <div>
                <label htmlFor="email">E-mail: </label>
                <input type="email" id='email' {...register("email")} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input id='password' type="password" {...register("password")} />
            </div>
            <div>
                <label htmlFor="first_name">First Name: </label>
                <input id='first_name' type="text" {...register("first_name")} />
            </div>
            <div>
                <label htmlFor="last_name">Last Name: </label>
                <input id='last_name' type="text" {...register("last_name")} />
            </div>
            <div>
                <label className='Birthday' htmlFor="birthday">Birthday: </label>
                <input id='birthday' type="date" {...register("birthday")} />
            </div>
            <button className='submit'>Submit</button>
        </form>

    )
}

export default Formuser