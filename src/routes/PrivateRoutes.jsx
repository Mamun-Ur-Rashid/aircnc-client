import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const { user, loading} = useContext()
    const location = useLocation();
    if(loading){
        return <p>Loading............</p>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;