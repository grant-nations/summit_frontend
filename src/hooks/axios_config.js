import axios from 'axios';
import {useAuth0} from "@auth0/auth0-react";
import {useState} from "react";

// localhost API -> http://127.0.0.1:8000/API

const useAxios = () => {

    const {getAccessTokenSilently} = useAuth0();
    const [token, setToken] = useState();
    const url = process.env.REACT_APP_SERVER_URL;

    (async () => {
        const token = await getAccessTokenSilently();
        setToken(token);
    })();

    return axios.create({
        baseURL: url,
        responseType: 'json',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
}

export default useAxios;