import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const {addPost} = useContext(PostList);

  const userIdElement = useRef();
  const PostTitleElement = useRef();
  const PostContentElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();


  const handleSubmit = (event) => {
    event.preventDefault()
    const userId = userIdElement.current.value;
    const PostTitle = PostTitleElement.current.value;
    const PostContent = PostContentElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");


    userIdElement.current.value = "";
    PostTitleElement.current.value = "";
    PostContentElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";




    addPost(userId,PostTitle,PostContent,reactions,tags);
  }


  return (
  <form className='create-post' onSubmit={handleSubmit}>

    <div className="mb-3">
      <label htmlFor="userId" className="form-label">User Id</label>
      <input type="text"  ref={userIdElement} className="form-control" id="userId" 
      placeholder= "your user Id" />
    </div>

    <div className="mb-3">
      <label htmlFor="title" className="form-label">Post Title</label>
      <input type="text" ref={PostTitleElement}  className="form-control" id="title" 
      placeholder= "How's your day" />
    </div>
    <div className="mb-3">
      <label htmlFor="body" className="form-label">Post Content</label>
      <textarea type="text"  ref={PostContentElement} rows="4" className="form-control" id="title" 
      placeholder= "Tell us more about" />
     
    </div>

     <div className="mb-3">
      <label htmlFor="reactions" className="form-label">Number of reactions</label>
      <input type="text" ref={reactionsElement}  className="form-control" id="reactions" 
      placeholder= "Someone give the react" />
    </div>

    <div className="mb-3">
      <label htmlFor="tags" className="form-label">type your hasteg here</label>
      <input type="text" ref={tagsElement}  className="form-control" id="tags" 
      placeholder= "Enter your tags using space" />
    </div>
   
    <button type="submit" className="btn btn-primary">Post</button>
  </form>
  )
}

export default CreatePost;