import { useRouter } from "next/router";

function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}

export default Post;

export async function getStaticPaths() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await response.json();

  // const paths = data.map((post) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     },
  //   };
  // });

  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    // paths,
    // 3 possible values, false, true, "blocking"
    // false: any paths not returned by getStaticPaths will result in 404 page, most suitable if you have an application with a small number of paths to pre-render
    // true: will not result in a 404 page, instead will serve a "fallback" version of the page on the first request to such a path, most suitable if your app has a very large number of static pages that depend on dara - you want all the product pages to be pre-rendered but if you have a few thousand productsm builds can take a really long time
    // "blocking": the paths that have not been generated at build time will not result in a 404 page. Instead, on the first request, will render the page on the server and return the generated HTML
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // contains the post
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}
