import {createClient} from './service';

export default {
  namespace:'create',
  state:{
    data:{

    }
  },
  effects:{
    *createClientInfo({payload,callback},{call,put}){
      const response = yield call(createClient, payload);
      yield put({
        type: 'create',
        payload: response,
      })
      if(callback) callback()
    }
  },
  reducers:{
    create(payload,action){
      return {
        data: action.payload,
      };
    }
  }
}
