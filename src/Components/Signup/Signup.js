import React from "react";
import "./Signup.css";
import { useState } from "react";
import axios from "axios";
import img14 from "../../Images/channels4_profile.jpg";

const Signup = () => {

    const [Data, setData] = useState({
        name:"",
        email: "",
        password: ""
    })

    function handleInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        console.log(value);
        console.log(name);
        console.log(Data);
        setData({ ...Data, [name]: value });
    }

    function register() {
        console.log(Data);
        axios.post("http://localhost:3000/Users", Data).then((res) => {
                console.log(res.data)
                alert("User Registered Successfully");
                window.location.reload();
            })
    }

    return (
        <>
            <div className="box57">
                <div className="mb-2" style={{ height: "55px" }}>
                    <img className="iconImage" src={img14} alt="Icon"></img>
                </div>
                <div className="box52">
                    <div className="col-md-5 box53">
                        <h3 style={{ marginBottom: "19px" }}><strong>Sign Up</strong></h3>
                        <form>
                        <div className="mb-3">
                                <label htmlFor="name" className="form-label"><strong>Name</strong><span className="box16" >Already have an  Account? <a href="/login" style={{ color: "green" }}>Sign in</a></span></label>
                                <input type="text" className="form-control" id="name"  name="name" aria-describedby="emailHelp" onChange={(event) => { handleInput(event) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                                <input type="text" className="form-control" id="email"  name="email" aria-describedby="emailHelp" onChange={(event) => { handleInput(event) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                                <input type="text" className="form-control" id="password" name="password" onChange={(event) => { handleInput(event) }} />
                            </div>
                            <div className="mb-3 box54">
                                <button type="button" className="btn btn-success loginButton" onClick={register}><strong>Signup</strong></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;