import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }else if(action.type === "ADD_POST"){
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId,postTitle,postBody,reactions,tags) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload:{
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions:{
          likes:likes,
      dislikes:dislikes
        },
        userId: userId,
        tags: tags,
        views:views,
      },
    })
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Banglore",
    body: "Hi Guys, I am going to Banglore for my vactions. Hope to enjoy a lot . Peace out.",
    reactions: {
      likes:143,
      dislikes:34
    },
    userId: "user-9",
    tags: ["vaction", "Mumbai", "Banglore", "Enjoying"],
    views:44,
  },
  {
    id: "2",
    title: "Pass",
    body: "3 years successfully completed with full of enjoy",
    reactions: {
      likes:143,
      dislikes:34
    },
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
    views:44,
  },
];

export default PostListProvider;
