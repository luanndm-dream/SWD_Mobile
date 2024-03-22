import { protectedAxios } from "./api_config";

export function getUserByIdApi(id: number) {
    const params: object = {
        UserId: id,
    };
    const url = `/User/${id}`;
    return protectedAxios.get(url, { params: params });
}
