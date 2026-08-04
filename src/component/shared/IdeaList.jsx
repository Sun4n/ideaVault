'use client'
import React, { use, useState } from 'react';
import IdeaCard from '@/component/shared/IdeaCard';
import Search from '@/component/shared/Search';
import CategoryFilter from './CategoryFilter';
const IdeaList = ({ideas}) => {
    const [searchData,setSearchData]=useState(ideas)
    return (
        <div>
            <div className='py-4 w-full flex gap-2 items-center '>
                <Search ideas={ideas} onFilter={setSearchData}></Search>
                <CategoryFilter ideas={ideas} onFilter={setSearchData}></CategoryFilter>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    searchData.map(idea => <IdeaCard key={idea._id} idea={idea}></IdeaCard>)
                }
            </div>
        </div>
    );
};

export default IdeaList;