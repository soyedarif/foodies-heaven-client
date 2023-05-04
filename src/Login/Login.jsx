import React, { useContext, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { Link,useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const {login,googleLogin,gitLogin}=useContext(AuthContext)
  const navigate = useNavigate();
  const location= useLocation();
  const from=location?.state?.from?.pathname || '/'
  const [error,setError]=useState('')

  const handleGoogleLogin=()=>{
    console.log('kire');
    googleLogin()
    .then(result=>{
      const loggedUser=result.user;
      navigate(from, {replace:true})
    }).catch(error=>{
      setError(error)
    })
  }
  const handleGitLogin=()=>{
    gitLogin()
    .then(result=>{
      const loggedUser=result.user;
      navigate(from, {replace:true})
    }).catch(error=>{
      setError(error)
    })
  }

  const handleLogin=e=>{
    e.preventDefault()
    setError('')
    const form=e.target;
    const email=form.email.value
    const password=form.password.value
    login(email,password)
    .then(result=>{
      const loggedUser=result.user;
      navigate(from, {replace:true})
    }).catch(error=>setError(error.message))
  }
  return (
    <>
        <div className='bg-Shade1 mb-12'>
            <NavigationBar></NavigationBar>
        </div>
            <h2 className="section-title text-center">Please Login</h2>
      <div className="mb-32">
          <form onSubmit={handleLogin} className="w-1/3 mb-8 mx-auto">
            
            
            <div className="flex mb-6 items-center justify-between">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="Your Email" id="email" name="email" className="input input-bordered w-full max-w-xs" required />
            </div>
            <div className="flex mb-6 items-center justify-between">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Password" id="password" name="password" className="input input-bordered w-full max-w-xs" required />
            </div >
            
            <p className='mb-6'>New to this Site? <Link className='text-blue-500' to="/register">Register</Link></p>
            <div className='flex justify-center'><button className="btn btn-wide bg-primary text-Shade border-0 hover:text-white">Login</button></div>
            <p className="text-error mt-4">{error}</p>
          </form>
          <div className="flex flex-col items-center gap-4">
            <button onClick={handleGoogleLogin} className="btn btn-success"><FaGoogle/> <span className="ml-4">Google Login</span></button>
            <button onClick={handleGitLogin} className="btn btn-accent"><FaGithub/> <span className="ml-4">GitHub Login</span></button>
          </div>
      </div>
        </>
  );
};

export default Login;
