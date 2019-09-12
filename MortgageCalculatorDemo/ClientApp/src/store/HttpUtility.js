import axios from 'axios';

function axiosCreate() {
  var instance = axios.create({ headers: { 'Content-type': 'application/json' } });
  // instance.defaults.timeout = TIMEOUT;
  
  return instance;
}

export function axiosPost(endpoint, body) {
  let response = axiosCreate().post(endpoint, body);

  return response;
}

export function axiosGet(endpoint, params) {
  var instance = axiosCreate();
  let response = instance.get(endpoint, params);
  console.log(response);
  return response;
}

export function axiosPut(endpoint, body) {
  var instance = axiosCreate();
  let response = instance.put(endpoint, body);

  return response;
}