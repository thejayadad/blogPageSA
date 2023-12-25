'use client'
import React from 'react'
import { FiSearch } from 'react-icons/fi'; 
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';


const SearchForm = ({placeholder}) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();
    const handleSearch = useDebouncedCallback((e) => {
        const params = new URLSearchParams(searchParams);
    
        params.set('page', 1);
    
        if (e.target.value) {
          e.target.value.length > 2 && params.set('q', e.target.value);
        } else {
          params.delete('q');
        }
    
        replace(`${pathname}?${params}`);
      }, 300);
  
  return (
    <div className='flex max-w-screen-md mx-auto mt-24 cursor-pointer'>
    <form className='w-full relative'>
    <FiSearch 
       size={64}
       className="absolute inset-y-0  left-0 pl-2.5 text-gray-500 pointer-events-none mt-4 cursor-pointer"

      />
      <input
        className='p-8 mr-12 w-full border rounded-full text-2xl'
        placeholder={placeholder}
        onChange={handleSearch}
      />
  
    </form>
  </div>
    
  )
}

export default SearchForm