import axios, { AxiosResponse } from 'axios';

// > UserInfo  Function

const userInfo = async (): Promise<void> => {
    try {
        const token = localStorage.getItem("token");

        const response: AxiosResponse<any> = await axios.get('http://localhost:5000/services/user/profile', {
            headers: {
                Authorization: token
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export default userInfo;
