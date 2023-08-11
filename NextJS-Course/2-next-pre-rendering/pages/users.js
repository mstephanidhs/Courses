import User from "../components/user";

function UserList({ users }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
}

export default UserList;

// runs only on the server side (display the data only in the terminal)
// the code written inside getStaticProps won't even be included in the JS bundle that is sent to the browser
// you can write server-side directly in getStaticProps
// is allowed only in a page and cannot be run from a regular component file
// it is used only for pre-rendering and not client-side data fetching
// should return an object & the object should contain a props key which is an object as well
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}
