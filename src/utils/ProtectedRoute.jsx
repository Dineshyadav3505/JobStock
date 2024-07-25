import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from './Axios';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const accessToken = Cookies.get('cb_chec');

    useEffect(() => {
        const checkAccessToken = async () => {
            if (!accessToken) {
                navigate('/');
            } else {
                try {
                    const response = await axios.get('/users/Current_User', {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    });
                    if (response.status === 200) {
                        if (response.data.data.role === 'Admin') {
                            navigate('/admin');
                        } else {
                            navigate('/');
                        }
                    }
                } catch (error) {
                    console.error('Error verifying access token:', error);
                    navigate('/');
                }
            }
        };

        checkAccessToken();
    }, [accessToken, navigate]);

    return children;
};

export default ProtectedRoute;