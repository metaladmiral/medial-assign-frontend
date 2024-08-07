import { useParams } from "react-router-dom";
import useSWR from "swr";
import Helmet from "react-helmet";
import Navbar from "../components/navbar";

function showModal() {
  const my_modal_4 = document.getElementById("my_modal_4");
  my_modal_4.showModal();
}

async function getPostDetails(postid) {
  const backend_server_url = import.meta.env.VITE_BACKEND_SERVER_URL;
  const url = backend_server_url + `get-post-details/${postid}`;

  const response = await fetch(url);
  const json = await response.json();
  return json.data;
}

function PostDetails() {
  const { postid } = useParams();

  const {
    data: post,
    error,
    isValidating,
  } = useSWR("get-post-details", async () => {
    return await getPostDetails(postid);
  });

  if (error) return <div className="failed">failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  const backend_server_assets_url = import.meta.env
    .VITE_BACKEND_SERVER_ASSETS_URL;

  const ogImage = `${backend_server_assets_url}og-images/${post.postid}.jpg`;

  return (
    <>
      <Helmet>
        <meta property="og:title" content="Your Open Graph Title" />
        <meta property="og:description" content="Your Open Graph Description" />
        <meta property="og:image" content={ogImage} />
      </Helmet>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">OG Image</h3>
          <p className="py-4">
            <img src={ogImage} alt="" />
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <Navbar></Navbar>

      <div
        style={{
          position: "absolute",
          top: "150px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            {post.img ? (
              <img src={`${backend_server_assets_url}uploads/${post.img}`} />
            ) : (
              <img src="https://images.unsplash.com/photo-1617957689187-997a52cd5e76?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHB1cnBsZXxlbnwwfHwwfHx8MA%3D%3D" />
            )}
          </figure>
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.content}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={showModal}>
                Show OG Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostDetails;
