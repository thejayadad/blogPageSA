'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const PostCard = ({ title, desc, creator, creatorImg, id }) => {
  const characterLimit = 140;
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedDesc =
    desc && (isExpanded ? desc : `${desc.slice(0, characterLimit)}...`);

  const handleToggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='p-4 md:w-1/2 w-full pt-24'>
      <div className='h-full bg-gray-100 p-8 rounded'>
        <p className='leading-relaxed mb-6 mt-12'>
          {truncatedDesc}
          {!isExpanded && desc && desc.length > characterLimit && (
            <button
              onClick={handleToggleExpansion}
              className='text-blue-500 hover:underline focus:outline-none'
            >
              See More
            </button>
          )}
        </p>
        <Link href={`/post/${id}`} className='inline-flex items-center'>
          <img
            alt='testimonial'
            src={creatorImg}
            className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
          />
          <span className='flex-grow flex flex-col pl-4'>
            <span className='title-font font-medium text-gray-900'>{title}</span>
            <span className='text-gray-500 text-sm capitalize'>{creator}</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
