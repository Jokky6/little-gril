import {request} from 'umi'
import path from '../../../path';

export async function queryRule(params) {
  return request(`${path}/client/all`, {
    params,
  });
}

export async function removeInfo(id) {
  return request(`${path}/client/${id}`,{
    method:'DELETE'
  });
};
