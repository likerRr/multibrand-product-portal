import ky from 'ky';

export const apiClient = ky.create({
  fetch,
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
});
