import React, { useEffect, useRef, useState } from 'react';
import { addPost, getPostAll } from '../service/api';

const currentUser = {
  username: 'Dharun',
  avatar: 'https://via.placeholder.com/40',
};

function CommunityPost() {
  // const [tags, setTags] = useState([]);
  const [reply, setReply] = useState('');
  const [replies, setReplies] = useState([]);
  const UserPost=useRef(null)
  const UserName=currentUser.username;
  // const handleAddTag = () => {
  //   const newTag = prompt('Enter a new tag');
  //   if (newTag) {
  //     setTags([...tags, newTag]);
  //   }
  // }
  // Fetch posts when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPostAll();
        setReplies(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);


  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handlePostReply = async () => {
    // Ensure UserName and UserPost are primitive values (strings)
    const reply = {
        user: UserName, 
        post: UserPost.current.value  
    };

    try {
        const res = await addPost(reply);
        console.log('Post added successfully:', res.data);
        alert("Post added successfully") ;
        setReplies([...replies, reply]);
    } catch (error) {
        console.error('Error adding post:', error); 
    }
};

  return (
    <div className="w-[80vw] mx-auto bg-slate-100 mb-5 mt-5 p-6 rounded-lg shadow-md flex justify-center flex-col">

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="community icon"
            className="rounded-full"
          />
          <h2 className="ml-3 text-2xl font-semibold">UvvI</h2>
        </div>
        {/* <button className="text-gray-400 hover:text-gray-600">
          <i className="fas fa-times"></i>
        </button> */}
      </div>

      <div className="mb-6">
        <p className="text-xl font-medium">Hey everyone!</p>
        <p className="text-gray-700 mt-4">
          * Hello world
        </p>
      </div>

      {/* <div className="mb-6">
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
              {tag}
            </span> ))}
          <button onClick={handleAddTag} className="text-red-500 px-4 py-2 rounded-full border border-red-500">
            + Add Tags
          </button>
        </div>
      </div> */}

      <div className="mt-8">
        <h3 className="text-xl font-medium mb-4">Replies | Comments</h3>
        <div className="mb-6">
          <textarea ref={UserPost}
            value={reply}
            onChange={handleReplyChange}
            placeholder="Write a reply..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            rows="3"
          ></textarea>
          <button onClick={handlePostReply} className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg  hover:red-700">
            Post Reply
          </button>
        </div>

        <div className="space-y-6">
          {replies.length === 0 ? (
            <p className="text-gray-500">No replies yet.</p>
          ) : (
            replies
      .filter(replyItem => replyItem.user === currentUser.username) // Filter by current user's username
      .map((replyItem, index) => (
              <div key={index} className="flex bg-gray-200 p-4 rounded-md shadow-sm">
                {/* <img
                  src={replyItem.user.avatar}
                //   alt={`${replyitem.user.username} avatar`}
                  className="w-10 h-10 rounded-full mr-4"
                /> */}
                <div>
                  {/* <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-800">{replyItem.user.username}</span>
                    <span className="text-gray-500 text-sm">
                      {replyItem.timestamp.toLocaleString()}
                    </span>
                  </div> */}
                  <span className="font-semibold text-gray-800">{replyItem.user}</span>
                  <p className="text-gray-700 mt-2">{replyItem.post}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default CommunityPost;
