import { SubmitButton } from '@/components/Buttons/SubmitButton';
import TextEditor from '@/components/TextEditor/TextEditor';
import { createPost } from '@/lib/actions';
import getServerUser from '@/lib/getServerUser';
import React from 'react';

const CreatePost = async () => {
  const user = await getServerUser();
  const image = user.image;
  const creator = user.email;
    console.log("Email from from" + creator)
    console.log("Image from from" + image)

  if (!user) {
    return <p className='text-4xl font-bold'>Login My Friend</p>;
  }

  return (
    <section className='px-4 py-8'>
      <div className='flex items-center flex-col gap-8 justify-center mx-auto max-w-screen-xl cursor-pointer'>

        <h1 className='title font-serif text-4xl'>
          SAY IT LOUD AND PROUD!
        </h1>

        <div className='flex items-center gap-6 hover:opacity-80'>
          <img
            src={image}
            className='rounded-full'
            alt='User Avatar'
          />
          <span className='font-semibold text-lg'>Creator {creator}</span>
        </div>

        <form 
        action={createPost}
        className='flex flex-col w-full'>
          <label className='font-semibold text-lg mb-2'>Title Your Memory</label>
          <input
            name='title'
            className='border-none lg:text-5xl md:text-4xl sm:text-3xl border-b w-full focus:outline-none rounded-full p-6 bg-gray-100 hover:bg-gray-200'
            placeholder='Title...'
          />
          
          <label className='font-semibold text-lg mt-6 mb-2'>Ok, Here Let It All Out</label>
          <textarea
            name='desc'
            rows={6}
            color={12}
            className='rounded-lg text-3xl border p-8 rounded-3xl'
            placeholder='Description'
          />
         <SubmitButton />
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
