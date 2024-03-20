import { protectedAxios } from "./api_config"

export function deletePackageById(id: string) {
    const params : object = {
        id: id
    }
    const url = '/Package'
    return protectedAxios.delete(url, {params: params})
}