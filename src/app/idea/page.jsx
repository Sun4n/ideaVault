import IdeaCard from '@/component/shared/IdeaCard';
import React from 'react';

const IdeaPage = async() => {
    const res = await fetch('http://localhost:5000/idea')
    const ideas = await res.json()
    console.log(ideas);

    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                ideas.map(idea=><IdeaCard key={idea._id} idea={idea}></IdeaCard>)
            }
            
        </div>
    );
};

export default IdeaPage;