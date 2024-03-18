import { protectedAxios } from "./api_config";

export function getAllPackageApi(fromDate?: any, toDate?: any) {
    const params: object = {
        fromTime: fromDate,
        toTime: toDate
    };
    const url = '/Package';
    return protectedAxios.get(url, { params: params });
}
