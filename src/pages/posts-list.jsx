import useSWR from "swr";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

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
  } = useSWR("get-posts-list", async () => {
    return await getPosts();
  });

  const backend_server_assets_url = import.meta.env
    .VITE_BACKEND_SERVER_ASSETS_URL;
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
                      src={`${backend_server_assets_url}uploads/${post.img}`}
                      alt="Shoes"
                    />
                  ) : (
                    <img
                      src="https://images.unsplash.com/photo-1617957689187-997a52cd5e76?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHB1cnBsZXxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Shoes"
                    />
                  )}
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p>{post.content}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/post/${post.postid}`}>
                      <button className="btn btn-primary">See Details</button>
                    </Link>
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
