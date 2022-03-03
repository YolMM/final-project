import axios from 'axios';

const pricesApi = axios.create({ url: 'http://0.0.0.0:3001' });

const fetcher = async(resource, init) => {
  const res = await pricesApi.get(resource);
  console.log(res.data);
  return res.data;
};

export default fetcher;
