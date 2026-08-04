
import IdeaList from '@/component/shared/IdeaList';
import React from 'react';
export const dynamic = 'force-dynamic';

const IdeaPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea`,{
        cache:'no-store'
    })
    const ideas = await res.json()
    

    return (
        <div className=' max-w-[1280px] mx-auto py-4'>
            <IdeaList ideas={ideas}></IdeaList>
        </div>
    );
};

export default IdeaPage;