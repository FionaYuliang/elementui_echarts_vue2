import axios from "axios";

//创建一个axios实例

const service = axios.create({
  timeout: 3000,
});

//添加请求拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
  }
);

service.interceptors.response.use(
  (response) => {
    let res = {};
    res.status = response.status;
    res.data = response.data;
    return res;
  },
  (error) => {
    console.log(error);
  }
);

export default service;
