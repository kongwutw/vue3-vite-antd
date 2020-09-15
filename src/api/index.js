import { get, post } from "./cfg";

export default {
  getOptions(params) {
    return get("/api/base/options", params);
  },
  postLogin(params) {
    return post("/api/user/login", params);
  },
  getHomeData(params) {
    return post("/api/home/data", params);
  },
};
