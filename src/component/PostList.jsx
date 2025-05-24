import React, { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";
import WelcomeMsg from "./WelcomeMsg";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handleGetPostClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const postsWithReactions = data.posts.map((post) => ({
          ...post,
          reactions: {
            likes: 0,
            dislikes: 0,
          },
        }));
        addInitialPosts(postsWithReactions);
      })
      .catch((error) => {
        console.error("Failed to fetch posts:", error);
      });
  };

  return (
    <>
      {postList.length === 0 ? (
        <WelcomeMsg onGetPostClick={handleGetPostClick} />
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </>
  );
}

export default PostList;

