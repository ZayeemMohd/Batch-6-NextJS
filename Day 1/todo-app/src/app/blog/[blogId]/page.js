export default async function BlogPage({ params }) {
  const { blogId } = await params;

  const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + blogId);
  const data = await response.json();

  return (
    <div>
      <h1>BLOG PAGE {blogId}</h1>
      <h4 className="font-bold">{data.title}</h4>
      <p>{data.body}</p>
    </div>
  );
}
