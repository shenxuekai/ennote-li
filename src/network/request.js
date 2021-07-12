import axios from "axios";
export function request(config,success,failure) {
  //1.创建axios的实例
  const instance1 = axios.create({
    baseURL: '',
    timeout: 5000,
    headers:{
      'ContentType':'application/json; charset=utf-8',
      'X-Requested-With': 'XMLHttpRequest'
    },
  })
  //2.发送网络请求
  instance1(config)
      .then(res => {
        success(res)
      })
      .catch(rej =>{
        failure(rej)
          }
      )
}
