import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL

export const DashboardData = async () => {
    try {
        let res = await axios.get(`${apiURL}/api/dashboard-data`)
        return res.data;
    } catch (error) {
        console.log(error);
    }

}
