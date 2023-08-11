function NewsArticleList({ articles }) {
  return (
    <>
      <h1>List of News Articles</h1>;
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title} | {article.category}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default NewsArticleList;

// 1. Function will never run client-side
// 2. The code you write inside getServerSideProps won't even be included in the JS bundle that is sent to the browser
// 3. is allowed only in a page and cannot be run from a regular component file
// 4. it is used only for pre-rendering and not client-side data fetching
// 5. should return an object which should contain a props key which is an object
// 6. will run at a request time
export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}
