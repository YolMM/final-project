import axios from 'axios';

export const jdApi = axios.create({ baseURL: 'http://127.0.0.1:3001' });
export const frontApi = axios.create();

const fetcher = async(resource, init) => {
  const res = await jdApi.get(resource);
  return res.data;
};

export const mutate = async(resource, body) => {
  const res = await jdApi.post(resource, body);
  return res.data;
};

export default fetcher;
