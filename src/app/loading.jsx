import React from 'react';

const Loading = () => {
    return (
        <div className='w-full min-h-[70vh] flex flex-col items-center justify-center gap-4'>
            <div className='relative w-16 h-16'>
                <div className='absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700'></div>
                <div className='absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 animate-spin'></div>
            </div>
            <p className='text-gray-500 dark:text-gray-400 font-medium text-lg'>Loading...</p>
        </div>
    );
};

export default Loading;