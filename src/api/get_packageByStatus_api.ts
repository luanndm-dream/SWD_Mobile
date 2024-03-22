import { protectedAxios } from "./api_config";

export function getAllPackageByStatusApi(status: number) {
    const params: object = {
        status: status,
     
    };
    const url = '/Package';
    return protectedAxios.get(url, { params: params });
}
