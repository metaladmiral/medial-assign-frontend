import useSWR from "swr";
import Navbar from "../components/navbar";

async function getPosts() {
  const backend_server_url = import.meta.env.VITE_BACKEND_SERVER_URL;
  const url = backend_server_url + "get-posts-list";

  const response = await fetch(url);
  const posts = await response.json();
  return posts.data;
}

function PostsList() {
  const {
    data: posts,
    error,
    isValidating,
  } = useSWR("https://restcountries.com/v2/all", getPosts);

  if (error) return <div className="failed">failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <>
      <Navbar></Navbar>

      <br />
      <br />
      <br />

      <div
        style={{
          position: "absolute",
          top: "150px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <h1>Post Lists</h1>

        <br />

        {posts &&
          posts.map((post, index) => (
            <>
              <div className="card bg-base-100 image-full w-96 shadow-xl">
                <figure>
                  {post.img ? (
                    <img
                      src={`http://localhost:3000/public/uploads/${post.img}`}
                      alt="Shoes"
                    />
                  ) : (
                    <img
                      src="https://thekarostartup.com/wp-content/uploads/2024/05/Feature-iby-naina11-1024x576.webp"
                      alt="Shoes"
                    />
                  )}
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p>{post.content}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Details</button>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
}

export default PostsList;
