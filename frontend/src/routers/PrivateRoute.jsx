import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { currentUser, loading } = useAuth() || {};  // Default to empty object if undefined

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (currentUser) {
        return children;
    }

    return <Navigate to="/login" replace />;
};

export default PrivateRoute;
