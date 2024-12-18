import { BASE64_TEST } from "@/constants";
import { protectedAxios, publicAxios } from "./api_config";

export async function createPackageAPI(
    busId?: string,
    fromOfficeId?: number,
    toOfficeId?: number,
    stationId?: number,
    quantity?: number,
    totalWeight?: number,
    totalPrice?: number,
    image?: string,
    note?: string,
    status?: number
  ) {
    const url = 'Package'; // Thay đổi thành endpoint tạo gói cần thiết
    const dataSend = {
      busId,
      fromOfficeId,
      toOfficeId,
      stationId,
      quantity,
      totalWeight,
      totalPrice,
      image : image,
      note : note,
      status,
    };
    console.log('dataSend', dataSend)
    try {
      const response = await protectedAxios.post(url, dataSend, {headers: {"Content-Type": 'multipart/form-data'}});
      return response; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error creating package:', error);
      throw error; // Ném lỗi nếu có vấn đề khi gửi request
    }
  }
