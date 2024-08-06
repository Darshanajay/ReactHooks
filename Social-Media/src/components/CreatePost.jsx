import React, { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";

const CreatePost = () => {
  const {addPost} = useContext(PostList)
  
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  const viewsElement = useRef();

  const handleSubmit = (e) => { 
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    const viewsElement = viewsElement.current.value;
    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value= "";

    addPost(userId,postTitle,postBody,reactions,tags)
   }
  
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userIdElement" className="form-label">
          Enter your UserId here
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="userIdElement"
          placeholder="Your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={postBodyElement}
          type="text"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tagsElement" className="form-label">
          Enter your hashtags here
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tagsElement"
          placeholder="Plese enter tagsElement using space"
        />
      </div>
        <div className="mb-3">
          <label htmlFor="reactionsElement" className="form-label">
            Number of reactionsElement
          </label>
          <input
            ref={reactionsElement}
            type="text"
            className="form-control"
            id="reactionsElement"
            placeholder="How many people reacted to this post"
          />
        </div>
        <div className="rang">
          <input type="range" 
          className="form-control"
          id="views"
          ref={views} />
        </div>

      

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
