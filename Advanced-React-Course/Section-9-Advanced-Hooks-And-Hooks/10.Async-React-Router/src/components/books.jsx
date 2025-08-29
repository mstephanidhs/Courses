import { useLoaderData, defer, Await, useAsyncValue } from 'react-router';
import delay from '../util/delay';
import { MainHeading } from './styled-elements';
import { Suspense } from 'react';

const Books = () => {
  const { bookCountPromise, authorsPromise } = useLoaderData();

  return (
    <div>
      <MainHeading>Books</MainHeading>
      <p>
        <strong>Available Books: </strong>
        <Suspense fallback='Fetching...'>
          <Await resolve={bookCountPromise}>
            {(data) => <strong>{data}</strong>}
          </Await>
        </Suspense>
      </p>
      <p>
        <strong>Authors:</strong>
        <Suspense fallback='Fetching...'>
          <Await resolve={authorsPromise}>
            <Authors />
          </Await>
        </Suspense>
      </p>
    </div>
  );
};

const Authors = () => {
  const authors = useAsyncValue();
  return <strong>{authors}</strong>;
};

async function loader() {
  const bookCountPromise = delay(10, 1000);
  const authorsPromise = delay('Codelicks', 2000);

  return defer({
    bookCountPromise,
    authorsPromise,
  });
}

export const booksRoute = { element: <Books />, loader };
