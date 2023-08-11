import { getSession, useSession } from "next-auth/client";

function Blog({ data }) {
  // don't have destruct the session through the props
  // you can rely to the useSession hooks
  const [session, loading] = useSession();
  return <h1>Blog page - {data}</h1>;
}

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession();

  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session ? "List of 100 personalized blogs" : "List of free blogs",
    },
  };
}
