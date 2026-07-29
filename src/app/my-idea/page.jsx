
import MyIdeaCard from '@/component/shared/MyIdeaCard';
import { auth } from '@/lib/auth';
import { authClient } from '@/lib/auth-client';
import { headers } from 'next/headers';
import React from 'react';

const MyIdeaPage =  async() => {
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
    const user = session?.user
    // console.log(user?.id);
    const res = await fetch(`http://localhost:5000/idea/user/${user?.id}`)
    const myIdeaData = await res.json()
    // console.log(myIdeaData);
    
    return (
        <div className='grid grid-cols-1 w-full md:grid-cols-3 gap-4 max-w-[1280px] mx-auto py-4'>
            {
                myIdeaData.map(data=><MyIdeaCard key={data._id} data={data}></MyIdeaCard>)
            }
        </div>
    );
};

export default MyIdeaPage;