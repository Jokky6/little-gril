import {request} from 'umi'
import path from '../../../path';

export async function createClient(params){
  return request(`${path}/client`,{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body:params
  })
}
