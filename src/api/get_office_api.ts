import { protectedAxios } from "./api_config";

export function getOfficeApi() {
   
    const url = '/Office';
    return protectedAxios.get(url);
}
