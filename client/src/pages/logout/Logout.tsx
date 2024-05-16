import React, { useEffect } from 'react'
import authService from '../../services/auth.service';
import { useAuth } from '../../providers/auth.provider';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
    const { setAuth } = useAuth();
    const native = useNavigate();

    useEffect(() => { Logout(); }, []);

    const Logout = async () => {
        if (authService.logout()) {
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            setAuth(false);
            native('/');
        }
    }
    return (
        <>Logout</>
    )
}
