import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import { publicAxios } from "./api_config";

export async function loginAPI(email:string, password:string){
    const url = 'Authentication/LoginAsync';
    const deviceId = await DeviceInfo.getUniqueId();
    const deviceVersion = await DeviceInfo.getSystemVersion();
    const OS = Platform.OS === "android" ? 1: 2;
    const dataSend: Object = {
        Email: email,
        Password: password,
        deviceId,
        deviceVersion,
        OS
    }
    return publicAxios.post(url,dataSend, {headers: {"Content-Type": 'multipart/form-data'}})
}