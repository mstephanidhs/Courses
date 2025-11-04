import React, { useEffect, useState } from "react";
import { fetchUser } from "../api/userApi";
import styled from "styled-components";
import { apiStatus } from "../constants/api-status";
import { useApiStatus } from "../api/hooks/useApiStatus";
import LazyLoader from "./lazy-loader";

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  
  const {
    status: fetchUserStatus,
    setStatus: setFetchUserStatus,
    isIdle: isFetchUsersStatusIdle,
    isPending: isFetchUsersStatusPending,
    isError: isFetchUsersStatusError,
    isSuccess: isFetchUsersStatusSuccess
  } = useApiStatus(apiStatus.IDLE);

  const initFetchUsers = async () => {
    setFetchUserStatus(apiStatus.PENDING);
    const {respose, error} = await withAsync(() => fetchUser());

    if (error) {
      setFetchUserStatus(apiStatus.ERROR);
    } else if (respose) {
      setFetchUserStatus(apiStatus.SUCCESS);
      setUsers(response);
    }
  };

  return {
    users,
    isFetchUsersStatusIdle,
    isFetchUsersStatusPending,
    isFetchUsersStatusError,
    isFetchUsersStatusSuccess,
    initFetchUsers,
  };
};

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 2xl;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const ContentContainer = styled.div`
  width: 50%;
`;

const UserName = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const UserEmail = styled.h3`
  font-size: 1rem;
  color: #555555;
`;

const FetchButton = styled.button`
  margin-top: 1rem;
  background-color: #0053b3;
  color: #ffffff;
  padding: 1rem;
`;

function Users() {
  const { users, isFetchUsersStatusError, isFetchUsersStatusIdle, isFetchUsersStatusPending, isFetchUsersStatusSuccess, initFetchUsers } = useFetchUsers();

  useEffect(() => {
    initFetchUsers();
  }, []);

  return (
    <Container>
      <FetchButton onClick={initFetchUsers}>{isFetchUsersStatusPending ? 'Loading...' : 'Fetch Users'}</FetchButton>
      <LazyLoader show={isFetchUsersStatusPending} delay={500} default="Fetch Users"/>
      <FlexContainer>
        <ContentContainer>
          {users
            ? users.map((user, index) => (
                <React.Fragment key={index}>
                  <UserName>{user.name}</UserName>
                  <UserEmail>{user.email}</UserEmail>
                </React.Fragment>
              ))
            : null}
        </ContentContainer>
      </FlexContainer>
    </Container>
  );
}
export default Users;
