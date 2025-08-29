import { useLoaderData, defer, Await } from 'react-router';
import delay from '../util/delay';
import { MainContainer, MainHeading } from './styled-elements';
import { Suspense } from 'react';

const Main = () => {
  const { promise } = useLoaderData();

  return (
    <MainContainer>
      <MainHeading>
        Main -
        <Suspense fallback='Fetching...'>
          <Await resolve={promise}>{(data) => <strong>{data}</strong>}</Await>
        </Suspense>
      </MainHeading>
    </MainContainer>
  );
};

export default Main;
