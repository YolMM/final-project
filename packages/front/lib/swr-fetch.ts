import axios from 'axios';

const jdApi = axios.create({ url: 'http://localhost:3001' });

const fetcher = async(resource, init) => {
  const res = await jdApi.get(resource);
  console.log(res.data);
  return res.data;
};

export default fetcher;
