function AddPost() {
  return (
    <>
      <div>
        <h1>Add Post</h1>
        <br />
        <br />

        <form>
          <input
            type="text"
            max={300}
            id="title"
            placeholder="Title of the Post"
            required
          />
          <br />
          <br />
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            placeholder="Content of the Post"
            required
          ></textarea>

          <br />
          <br />

          <input type="file" name="image" />

          <br />
          <br />

          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default AddPost;
