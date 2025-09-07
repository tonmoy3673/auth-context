
import React, { type ReactNode } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';

interface PrivateRouteProps{
    children: ReactNode;
}

const PrivateRoute:React.FC<PrivateRouteProps> = ({children}) => {
    const {user} = useAuthContext();
    if (!user) {
        return<Navigate to='login' replace={true}/>
    }
    return children;
};

export default PrivateRoute;