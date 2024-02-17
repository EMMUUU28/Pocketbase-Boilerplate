import React, { useState } from 'react';
import pb from './lib/pocketbase';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';


export const Auth = () => {
    const { register, handleSubmit, reset } = useForm();
    const [islogout, setLogout] = useState(0);
    const[isloading, setLoading ] = useState(false);
    const isLoggedin = pb.authStore.isValid;
    const navigate = useNavigate();

    async function login(data) {

        setLoading(true);
        try {
            const authData = await pb.collection('users').authWithPassword(data.email, data.password);
            console.log(authData);
        } catch (e) {
            alert("Invalid user Credentials")
            console.log(e);
        }
        setLoading(false) ;
        navigate('/'); // Redirect to home page
   
        reset();
    }

     async function logout() {
        pb.authStore.clear();
        setLogout(Math.random());
    }

    if (isLoggedin)
        return (
            <>
                <h1>Logged in: {pb.authStore.model.email}</h1>
                <button onClick={logout}>Logout</button>
            </> 
        );
   
    
    return (
        <>
            {isloading && <p>Loading...</p>}
            <h1>Please login</h1>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit(login)}>
                <input type='text' placeholder='email' {...register("email")} />
                <input type='password' placeholder='password ' {...register("password")} />
                <button disabled={isloading} type='submit'>{isloading ? "Loading..." : "Login"}</button>
            </form>
        </>
    );
};
