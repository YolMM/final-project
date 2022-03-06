import axios from 'axios';

export const jdApi = axios.create({ url: 'http://127.0.0.1:3001' });
export const frontApi = axios.create();

const fetcher = async(resource, init) => {
  const res = await frontApi.get(resource);
  return res.data;
};

export default fetcher;
