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
  const params: object = {
    id: id,
    busId: busId,
    fromOfficeId: fromOfficeId,
    toOfficeId: toOfficeId,
    stationId: stationId,
    quantity: quantity,
    totalWeight: totalWeight,
    totalPrice: totalPrice,
    image: imageUrl,
    note: note,
    status: status,
  };
  const url = `/Package/${id}`;
  return protectedAxios.put(url, {params: params});
}
