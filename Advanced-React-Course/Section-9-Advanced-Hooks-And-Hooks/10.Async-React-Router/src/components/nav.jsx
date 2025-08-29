import { Outlet, useNavigation } from 'react-router';
import { LoadingMessage, NavContainer, NavLink } from './styled-elements';
import { Suspense } from 'react';

const Nav = () => {
  const { state } = useNavigation();

  return (
    <>
      <NavContainer>
        <NavLink to={'/'}>Main</NavLink>
        <NavLink to={'/books'}>Books</NavLink>
        <NavLink to={'/club'}>Club</NavLink>
        {state === 'loading' && <LoadingMessage>Loading...</LoadingMessage>}
        <Outlet />
      </NavContainer>
      <Suspense fallback={<NavContainer>Loading...</NavContainer>}>
        <NavContainer>
          <Outlet />
        </NavContainer>
      </Suspense>
    </>
  );
};

export default Nav;
