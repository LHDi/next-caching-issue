import { getResponse } from '@/utils/api';
import { cookies } from 'next/headers';

export const runtime = 'edge';

export default async function Home() {
  const data = await getResponse();
  const foo = cookies().get('foo');
  return (
    <code>
      <pre>{JSON.stringify(await data.text(), null, 2)}</pre>
      <pre>Response date: {data.headers.get('date')}</pre>
    </code>
  );
}
