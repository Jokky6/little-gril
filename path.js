let path = 'http://127.0.0.1:5000/v1';
console.log('环境',process.env.UMI_ENV)
if(process.env.UMI_ENV==='development'){
  path = 'http://127.0.0.1:5000/v1'
}
export default path;
