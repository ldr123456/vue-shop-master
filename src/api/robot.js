import request from "../utils/service";
//设置请求配置
export const fetchData = (query) => {
  return request({
    url: 'api/v1/login',
    method: 'POST',
    data: query,
  });
};

export const getRobotList = (data) => {
  return request({
    url: '/getRobots',
    method: 'GET',
    data
  })
}

