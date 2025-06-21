import { CurrentUserLoader } from './components/current-user-loader';
import { DataSource } from './components/data-source';
import { DataSourceWithRender } from './components/data-source-with-render';
import { ResourceLoader } from './components/resource-loader';
import { UserLoader } from './components/user-loader';

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const getDataFromLocalStorage = (key) => () => {
  return localStorage.getItem(key);
};

const Message = ({ msg }) => <h1>{msg}</h1>;

function App() {
  return (
    <>
      {/* <DataSource
        getData={() => getDataFromServer('/users/2')}
        resourceName='user'
      >
        <UserInfo />
      </DataSource> */}
      <DataSourceWithRender
        getData={() => getDataFromServer('/users/2')}
        render={(resource) => <UserInfo user={resource} />}
      ></DataSourceWithRender>
      <DataSource
        getData={() => getDataFromLocalStorage('test')}
        resourceName='msg'
      >
        <Message />
      </DataSource>
      {/* <ResourceLoader resourceUrl='/users/2' resourceName='user'>
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader resourceUrl='/books/1' resourceName='book'>
        <BookInfo />
      </ResourceLoader> */}
    </>
  );
}

export default App;
