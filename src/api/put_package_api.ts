import {protectedAxios} from './api_config';

export function updatePackageApi(
  id: number,
  busId: number,
  fromOfficeId: number,
  toOfficeId: number,
  stationId: number,
  quantity: number,
  totalWeight: number,
  totalPrice: number,
  imageUrl: string,
  note: string,
  status: number,
) {
  const dataSend= { 
    packageId: id,
    busId: busId,
    fromOfficeId: fromOfficeId,
    toOfficeId: toOfficeId,
    stationId: stationId,
    quantity: quantity,
    totalWeight: totalWeight,
    totalPrice: totalPrice,
    image: imageUrl,
    note: note,
    status: 0,
  };
  const url = `/Package/${id}`;
  return protectedAxios.put(url, dataSend, {headers: {"Content-Type": 'multipart/form-data'}});
}
