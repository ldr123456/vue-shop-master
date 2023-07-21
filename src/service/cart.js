import axios from '../utils/axios';

export function addCart(params) {
  return axios.post('/shop-cart', params);
}

// 获取购物车信息
export function getCart(params) {
  return axios.get('/shop-cart', { params });
}

// 修改购物车信息
export function modifyCart(params) {
  return axios.put('/shop-cart', params);
}

export function getByCartItemIds(params) {
  return axios.get('/shop-cart/settle', { params });
}

export function deleteCartItem(params) {
  return axios.get('/shop-cart/delete', { params });
}

