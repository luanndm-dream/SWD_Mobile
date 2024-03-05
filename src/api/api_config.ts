
import { BASE_URL } from "@/constants";

import axios from "axios"
import { store } from "src/redux/store";




const TIME_OUT = 90000

export const publicAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    },
    timeout: TIME_OUT
});

export const protectedAxios = axios.create({
    baseURL: BASE_URL,
    headers:{
        "Content-Type": "application/json"
    },
    timeout: TIME_OUT
});

publicAxios.interceptors.request.use(
    function (config){
        // console.log('config',config)
        return config
        
    },
    function (error){
        console.log('loi request')
        return Promise.reject(error)
    }
);

publicAxios.interceptors.response.use(
    function (response) {
        const responseObj = {
            ...response.data,
            statusCode: response.status,
        };
        return responseObj;
    },
    function (error) {

        const statusCode = error.response.status
        if (error.response && error.response.status === 400) {
            console.log('Status code 400 error:', error.response.data);
        }
        return statusCode;
    }
);

protectedAxios.interceptors.request.use(
    function (config) {
      const accessToken = store.getState().user?.token;
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
  
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  protectedAxios.interceptors.response.use(
    function (response) {
      const responseObj = {
        ...response.data,
        statusCode: response.status,
      };
  
      return responseObj;
    },
    function (error) {
        const statusCode = error.response.status
      if(error.response.status == 401){
        // store.dispatch(removeUser());
        // RootNavigation.navigate(SCREENS.LOGIN)
      } else if (error.response && error.response.status === 400) {
        console.log('Status code 400 error:', error.response.data);
    }
      return statusCode;
    }
  );
