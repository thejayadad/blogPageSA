import React from 'react'
import SearchForm from '../Form/SearchForm'
import PostCard from './PostCard'
import { getPost } from '@/lib/data'

const PostList = async () => {
  const posts = await getPost()
  return (
    <section className='px-4 py-8'>
      <div className='mx-auto max-w-screen-xl'>
      
      <h1 className='title font-serif text-4xl'>
          See Our Recent Post
        </h1>
      <SearchForm />
      <div className='flex flex-wrap -m-4'>
      {
        posts.map((post) => (
          <>
          <PostCard title={post.title} creatorImg={post.creatorImg}
          desc={post.desc}
          creator={post.creator}
          />
          </>
        ))
      }

      </div>
      </div>
    </section>  
  )
}

export default PostList