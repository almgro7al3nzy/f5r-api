import axios from 'axios';

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'https://server.tn1-dsm.com',
  });
  return request;
};

export const getRequestWithAccessToken = (
  token: string,
  type: 'json' | 'blob' | 'text' = 'json',
) => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'https://server.tn1-dsm.com',
    responseType: type,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return request;
};
