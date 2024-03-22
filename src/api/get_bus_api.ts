import { protectedAxios } from "./api_config";

export function getBusApi() {
   
    const url = '/Bus';
    return protectedAxios.get(url);
}
