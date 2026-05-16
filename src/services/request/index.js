import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class HYRequest {
  constructor(baseURL, timeout) {
    // 1. 创建 axios 实例（改名！不要叫 request）
    this.axios = axios.create({
      baseURL,
      timeout
    })

    // 2. 请求拦截
    this.axios.interceptors.request.use(config => {
      return config;
    }, err => {
      return Promise.reject(err);
    })

    // 3. 响应拦截
    this.axios.interceptors.response.use(res => {
      return res.data;
    }, err => {
      return Promise.reject(err);
    })
  }

  // 4. 调用 axios 实例，不再递归自己
  request(config) {
    return this.axios.request(config);
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

// 必须加 new
export default new HYRequest(BASE_URL, TIMEOUT);