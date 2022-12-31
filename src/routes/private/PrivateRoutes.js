import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    if(loading) {
        return <div className="radial-progress text-primary" style={{"--value":70}}>70%</div>
    }
    if(user && user.uid) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    
};

export default PrivateRoutes;