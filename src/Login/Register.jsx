import React, { useContext, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const {createUser,updateUser}=useContext(AuthContext)
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = e => {
    e.preventDefault();
    setSuccess("");
    setError("");
    const form = e.target;
    const displayName = form.displayName.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const rePassword = form.rePassword.value;

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase");
      return;
    }else if(password!==rePassword){
        setError("Passwords from both field has to similar")
        return
    } else if (!/(?=.*[0-9])/.test(password)) {
      setError("Please add at least two numbers");
      return;
    } else if (password.length < 6) {
      setError("Please add at least 6 characters");
      return;
    }
    createUser(email,password)
    .then(result=>{
     const newUser=result.user
     console.log(newUser);
     updateUser(displayName,photoURL)
     e.target.reset();
     setSuccess("User has been created succesfully");
    }).catch(error=>{
      console.log(error);
    })
  };



  return (
    <>
      <div className="bg-black mb-12">
        <NavigationBar></NavigationBar>
      </div>
      <h2 className="section-title text-center">Please Register</h2>
      <div className="mb-32">
        <form onSubmit={handleRegister} className="w-1/3 mx-auto">
          <div className="flex mb-6 items-center justify-between">
            <label htmlFor="displayName">Your Name</label>
            <input required type="text" placeholder="Your Name" id="displayName" name="displayName" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="flex mb-6 items-center justify-between">
            <label htmlFor="photoURL">Photo Url</label>
            <input required type="text" placeholder="Photo URL" id="photoURL" name="photoURL" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="flex mb-6 items-center justify-between">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Your Email" id="email" name="email" className="input input-bordered w-full max-w-xs" required />
          </div>
          <div className="flex mb-6 items-center justify-between">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" name="password" className="input input-bordered w-full max-w-xs" required />
          </div>
          <div className="flex mb-6 items-center justify-between">
            <label htmlFor="rePassword">Confirm Password</label>
            <input type="password" placeholder="Confirm Password" id="rePassword" name="rePassword" className="input input-bordered w-full max-w-xs" required />
          </div>
          <p className="mb-6">
            Already Have an Account?{" "}
            <Link className="text-blue-500" to="/login">
              Login
            </Link>
          </p>
          <div className="flex justify-center">
            <button className="btn btn-wide bg-primary text-Shade border-0 hover:text-white">Register</button>
          </div>
          <p className="text-error ">{error}</p>
          <p className="text-success mt-4 text-center">{success}</p>

        </form>
      </div>
    </>
  );
};

export default Register;
