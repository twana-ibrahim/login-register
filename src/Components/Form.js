import React, {useState} from "react";
import Input from "./Input";
import Img from "./Img";
import {FcGoogle} from 'react-icons/fc';
import {FaFacebook} from 'react-icons/fa';


function form(props){

    const [isRegistered, setIsRegistered] = new useState(false);
    
    function registerBtnHandler(event){
        event.preventDefault();

        if(isRegistered === false){
            setIsRegistered(true);
        }
        else{
            setIsRegistered(false);
        }
    }

    return (
        <div>
            <form className={props.className}>
                {isRegistered ? null :
                <div>
                    <Input className="block bg-transparent border-b-2 rounded border-blue-500 w-full pr-32 py-1" type="text" name="firstName" placeholder = "First Name" />
                    <Input className="block bg-transparent border-b-2 rounded border-blue-500 w-full pr-32 py-1" type="text" name="lastName" placeholder = "Last Name" />
                </div>
                }
                <Input className="block bg-transparent border-b-2 rounded border-blue-500 w-full pr-32 py-1" type="email" name="email" placeholder = "Email" />
                <Input className="block bg-transparent border-b-2 rounded border-blue-500 w-full pr-32 py-1" type="password" name="password" placeholder = "Password" />
                <div className="flex justify-between mt-6">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{isRegistered ? "Login" : "Signup"}</button>
                    <button onClick={registerBtnHandler} type="submit" className="text-blue-500 text-sm">{isRegistered ? "Don't Have Account?" : "Already Have Account?"}</button>
                </div>
                <div className="flex flex-col items-center sm:mx-16 lg:mx-32">
                    <label className="font-bold text-sm text-blue-400 mt-6">{isRegistered ? "Login with:" : "Signup with:"}</label>
                    <div className="flex mt-4">
                        <FcGoogle size="3rem" />
                        <FaFacebook className="text-blue-700 ml-2" size="2.8rem" />
                    </div>
                </div>
            </form>
        </div>
    );
}

// className="flex justify-center w-full h-full absolute items-center"

export default form;
