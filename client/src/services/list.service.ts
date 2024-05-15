import axios, { AxiosResponse } from "axios";


interface IProductList {
    size: number,
    page: number,
    sortField: string,
    sortOrder: string,
}

const productList = async (params: IProductList): Promise<void> => {
    try {
        const response: AxiosResponse<any> = await axios.get('http://localhost:5000/services/contract/available', {
            params: params
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export default productList