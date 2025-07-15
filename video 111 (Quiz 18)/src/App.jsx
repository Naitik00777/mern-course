import React, { useEffect, useState } from "react";

const PostCards = () => {
  const [posts, setposts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setposts(data))
      .catch((err) => console.error("Error fetching posts:", err))
  }, [])

  return (
    <div className="p-6 bg-red-100 min-h-screen">
      <h1 className="text-3xl mb-6 font-bold text-center text-black tracking-wider">Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) =>
          <div key={post.id} className="bg-gray-200 p-4 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-black font-semibold mb-2 text-xl">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostCards