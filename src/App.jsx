import React from 'react'
import { useState } from 'react'
import "./App.css"

const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        age:"",
        phonenumber:""
    })

    //declaring objects
    let nameObj, valueObj;
    const getUserData = (event) => {

        nameObj = event.target.name
        valueObj = event.target.value

        setUser({ ...user, [nameObj]: valueObj })
    }


    const postData = async (EVENT) => {
        EVENT.preventDefault()
        //destruturing
        const {
            username,
            password,
            age,
            phonenumber
        } = user

        //if condition true if user enters all fields
        if (username && password && age) {
            //getting response from firebase
            let res = await fetch("https://myfirstproject-9592a-default-rtdb.firebaseio.com/formwithreact.json"
            ,
                {
                    method: "POST",
                    Headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username,
                        password,
                        age,
                        phonenumber
                    })

                })

            if (res) {
                setUser({
                    username: "",
                    password: "",
                    age:"",
                    phonenumber:""
                })
                alert("Data is stored Successfully!!")
            }

        }
        else {
            alert("please fill all the fields")
        }

    }

    return (
        <div className='main-div'>
            
            <form method='POST' className='child-div'>
            <figure>
                <img src="https://th.bing.com/th/id/OIP.RrAne7fYPdg83g-2uFlDQwHaHa?rs=1&pid=ImgDetMain"/>
            </figure>
            <br/><br/><br/>
            <h3>User registration form</h3>
                <div>
                    <input
                        className='eachItem'
                        placeholder='enter your user name'
                        type='text'
                        name='username'
                        value={user.username}
                        onChange={getUserData}
                        required
                    ></input></div>

                <div>
                    <input
                        className='eachItem'
                        placeholder='enter your password'
                        type='password'
                        name='password'
                        value={user.password}
                        onChange={getUserData}
                        required
                    ></input>
                </div>

                <div>
                <input
                        className='eachItem'
                        placeholder='enter your age'
                        type='number'
                        name='age'
                        value={user.age}
                        onChange={getUserData}
                        required
                    ></input>
                </div>
                <div>
                <input
                        className='eachItem'
                        placeholder='enter your phone number'
                        type='tel'
                        name='phonenumber'
                        value={user.phonenumber}
                        onChange={getUserData}
                        required
                    ></input>
                </div>
                <br/><br/>
                <div>
                    <button className='submit' type='submit' onClick={postData}>submit</button>
                </div>
            </form>
        </div>


    )
}

export default Login