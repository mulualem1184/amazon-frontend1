import axios from 'axios'
const axiosInstance= axios.create({
    baseURL: "https://amazonapi21-zvlifjns.b4a.run/",
});
export {axiosInstance}