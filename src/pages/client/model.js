import { queryRule, removeInfo } from './service';

export default {
  namespace:'client',
  state:{
    data:{
      items:[]
    },
    response:{

    }
  },
  effects:{
    *getData({ payload,callback }, { call, put }) {
      const response = yield call(queryRule, payload);
      yield put({
        type: 'save',
        payload: response,
      })
      if(callback) callback()
    },
    *deleteData({payload,callback},{call,put}){
      const response = yield call(removeInfo,payload);
      yield put({
        type:'delete',
        payload:response,
      })
      if(callback) callback()
    }
  },
  reducers:{
    save(state, {payload}) {
      console.log(state,payload)
      return {
        ...state,
        data: payload,
      };
    },
    delete({payload}){
      return{
        response:payload
      }
    }
  }
}
