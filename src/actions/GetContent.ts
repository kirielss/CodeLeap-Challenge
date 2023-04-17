import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://dev.codeleap.co.uk/careers',
    timeout: 1000,
    headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json',
    },
})



function getContent() {
    axiosInstance.get('/')
        .then(function (response: any) {
            const results = response.data.results;
            console.log(results);
            return results;
        })
        .catch(function (error: any) {
            const errorMessage = error.response.data;
            document.write(errorMessage);
            document.close();
            return error;
        })

}

export default getContent;