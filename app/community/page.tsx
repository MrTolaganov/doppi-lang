'use client'
import React, { useState } from 'react'

const CommunityPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'John Doe',
      content: 'Excited to be part of this amazing community!',
      date: '2024-11-18',
    },
    {
      id: 2,
      author: 'Jane Smith',
      content: 'Looking forward to upcoming events and discussions.',
      date: '2024-11-17',
    },
  ])

  const [newPost, setNewPost] = useState('')

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPost.trim()) return

    setPosts([
      {
        id: posts.length + 1,
        author: 'Anonymous',
        content: newPost.trim(),
        date: new Date().toISOString().split('T')[0],
      },
      ...posts,
    ])

    setNewPost('')
  }

  return (
    <div className=' min-h-screen'>
      {/* About Section */}
      <section className=' text-white py-12 text-center'>
        <h1 className='text-4xl font-bold'>Welcome to Our Community</h1>
        <p className='mt-4 text-lg'>
          A place to connect, share ideas, and grow together. We value inclusivity and
          collaboration. Join us and be a part of something special!
        </p>
      </section>

      {/* Form Section */}
      <section className='max-w-4xl mx-auto p-6 bg-secondary-bg shadow-lg rounded-lg mt-10'>
        <h2 className='text-2xl font-semibold mb-4'>Share Your Thoughts</h2>
        <form onSubmit={handlePostSubmit} className='space-y-4'>
          <textarea
            className='w-full border-gray-300 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
            rows={4}
            placeholder='Write your message here...'
            value={newPost}
            onChange={e => setNewPost(e.target.value)}
          />
          <button
            type='submit'
            className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700'
          >
            Post
          </button>
        </form>
      </section>

      {/* Posts Section */}
      <section className='max-w-4xl mx-auto mt-10 p-6 bg-secondary-bg shadow-lg rounded-lg'>
        <h2 className='text-2xl font-semibold mb-4'>Community Posts</h2>
        <div className='space-y-4'>
          {posts.map(post => (
            <div
              key={post.id}
              className='bg-secondary-bg p-4 shadow rounded-lg border border-gray-300'
            >
              <p className='text-gray-400'>{post.content}</p>
              <div className='text-sm text-gray-200 mt-2'>
                Posted by <span className='font-semibold'>{post.author}</span> on {post.date}
              </div>
            </div>
          ))}
          {posts.length === 0 && (
            <p className='text-gray-200'>No posts yet. Be the first to share!</p>
          )}
        </div>
      </section>
    </div>
  )
}

export default CommunityPage
