import { protectedAxios } from "./api_config";

export  function  getAllPackageApi(){
        const url = '/Package/GetPackages'
    return protectedAxios.get(url)
}