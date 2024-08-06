import Navbar from "../../components/navbar";
import { addPostFormEvent } from "./add-post-scripts";

function AddPost() {
  return (
    <>
      <div
        id="success_alert"
        role="alert"
        className="alert alert-success w-96 hidden"
        style={{ position: "absolute", right: "0", top: "25px" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Your Post has been added successfully! </span>
      </div>

      <div
        id="error_alert"
        role="alert"
        className="alert alert-error w-96 hidden"
        style={{ position: "absolute", right: "0", top: "25px" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! Task failed.</span>
      </div>

      <dialog id="loading_modal" class="modal">
        <div class="modal-box">
          <span class="loading loading-dots loading-lg"></span>
          <div class="modal-action">
            <form method="dialog">
              <button class="btn" style={{ visibility: "hidden" }}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <Navbar />

      <br />
      <br />
      <br />

      <div>
        <h1>Add Post</h1>
        <br />

        <form action="" onSubmit={addPostFormEvent} className="w-full max-w-sm">
          <label className="form-control w-full max-w-sm">
            <div className="label">
              <span className="label-text">Title</span>
              <span style={{ color: "red" }}>*</span>
            </div>
            <input
              type="text"
              placeholder="Type Title Here"
              className="input input-bordered w-full"
            />
          </label>

          <br />

          <label className="form-control">
            <div className="label">
              <span className="label-text">Content</span>
              <span className="label-text-alt">
                <span style={{ color: "red" }}>*</span>
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Type Content Here"
            ></textarea>
          </label>

          <br />

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Pick a file</span>
              <span className="label-text-alt">Optional</span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
          </label>

          <br />
          <br />

          <button className="btn btn-primary">Add Post</button>
        </form>
      </div>
    </>
  );
}

export default AddPost;
