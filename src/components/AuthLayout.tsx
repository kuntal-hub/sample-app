import React, { useState, useEffect, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import Loader from './Loader';

export default memo(function AuthLayout({ children, authentication = true }: { children: React.ReactNode, authentication?: boolean }) {
    const navigate = useNavigate();
    const authStatus = useAppSelector(state => state.auth.status);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        } else if (!authentication && authStatus !== authentication) {
            console.log(authStatus)
            navigate("/")
        }
        setLoading(false)
    }, [authStatus, navigate, authentication])

    return loading ? <Loader /> : <>{children}</>
});