import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate,useLocation } from 'react-router';
import Loading from '../components/Loading';

const PrivateRouter = ({children}) => {
    const {loading,user}= useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return <Navigate state={{from:location}} replace to='/login'></Navigate>
};

export default PrivateRouter;