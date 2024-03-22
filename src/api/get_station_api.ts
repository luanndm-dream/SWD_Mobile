import { protectedAxios } from "./api_config";

export function getStationApi() {
   
    const url = '/Station';
    return protectedAxios.get(url);
}
