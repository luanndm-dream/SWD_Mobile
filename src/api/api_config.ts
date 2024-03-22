
import { BASE_URL } from "@/constants";

import axios, { AxiosError } from "axios"
import { store } from "src/redux/store";




const TIME_OUT = 10000

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
    function (response: any) {
      
      const responseObj = {
        ...response.data,
        statusCode: response.status,
      };
      // console.log('vào congif API', responseObj)
      return responseObj;
    },
    function (error): number {
      console.log('loi trong function Axios Error', error)
      // console.log('Status code 400 error:', error.response);
        const statusCode = error.response.status
      if(error?.response?.status == statusCode){
        // store.dispatch(removeUser());
        // RootNavigation.navigate(SCREENS.LOGIN)
      } else if (error.response && error.response.status === 400) {
        console.log('Status code 400 error:', error.response.data);
        console.log('Status code 400 error:', error.response.errors);
    }
      return statusCode;
    }
  );
