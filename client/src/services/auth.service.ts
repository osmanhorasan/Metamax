import axios, { AxiosResponse } from "axios";


// ## LOGIN ## //

// > ValidateLogin Interface
interface IValidateLogin { id: number | string, challengeId: number | string, pin: number | string }

// > ValidateLogin Function
const validateLogin = async (data: IValidateLogin): Promise<void> => {
    try {
        const response: AxiosResponse<any> = await axios(
            {
                url: 'http://localhost:5000/services/auth/login/validate',
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                data: JSON.stringify(data)
            }
        );
        localStorage.setItem("token", JSON.stringify(response.data.AccessToken)) // LocalStorage Token Save
        localStorage.setItem("refreshToken", JSON.stringify(response.data.RefreshToken)) // LocalStorage RefreshToken Save
        return response.data.AccessToken;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};



// > Login Logout 
const logout = () => {
    try {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        return true;
    } catch (error) {
        console.error('Error fetching data:', error);
    }

}


// > Login Interface
interface ILogin { username: number | string, password: number | string, scope: number | string }

// > Login Function
const login = async (data: ILogin): Promise<void> => {
    try {
        const response: AxiosResponse<any> = await axios(
            {
                url: 'http://localhost:5000/services/auth/login',
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                data: JSON.stringify(data)
            }

        );
        return response.data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export default { login, logout, validateLogin }