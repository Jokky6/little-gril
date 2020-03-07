import { defineConfig } from 'umi';

export default defineConfig({
  layout: {

  },
  routes: [
    { exact: true,path:'/client',name:'客户列表',component:'@/pages/client/index'},
    { exact: true,path:'/create',name:'添加客户',component:'@/pages/create/index'}
  ]
});
