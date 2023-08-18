import { cache } from 'react';

export const revalidate = 1;

export const getResponse = cache(async () => {
  return await fetch('https://hub.dummyapis.com/delay?seconds=5');
});
