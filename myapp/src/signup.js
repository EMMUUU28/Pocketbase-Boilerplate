import React, { useState } from 'react'
import pb from './lib/pocketbase';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm();
    const[isloading, setLoading ] = useState(false);
    // const isLoggedin = pb.authStore.isValid;

    async function doSignup(data){
        setLoading(true);
        data.passwordConfirm = data.password;
        console.log(data);
        try {
            const record = await pb.collection('users').create(data);
        } catch (error) {
            console.log(error.data);
        }
        setLoading(false);
        alert("Logged in Successfully");
        navigate('/'); // Redirect to home page

        reset();
    }

  return (
    <div>
        <h1>
            Sign Up 
        </h1>
        <form onSubmit={handleSubmit(doSignup)}>
            <input type='text' placeholder='Name'  {...register("name")} />
            <input type='text' placeholder='username' {...register("username")} />
            <input type='email' placeholder='email' {...register("email")} />
            <input type='password' placeholder='password' {...register("password")} />
            <select {...register("type")} >
                <option value="">Select...</option>
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
            </select>
            <button disabled={isloading} type='submit'>{isloading ? "Loading..." : "Signup"}</button>
        </form>
    </div>
  )
}

export default Signup