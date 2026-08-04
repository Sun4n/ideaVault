
import MyIdeaCard from '@/component/shared/MyIdeaCard';
import { auth } from '@/lib/auth';
import { authClient } from '@/lib/auth-client';
import { headers } from 'next/headers';
import React from 'react';
export const dynamic = 'force-dynamic';
const MyIdeaPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user
    const token = await auth.api.getToken({
          headers : await headers()
        })
    // console.log(user?.id);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea/user/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token?.token}`
        }
    })
    const myIdeaData = await res.json()
    // console.log(myIdeaData);

    return (
        <div className='grid grid-cols-1 w-full md:grid-cols-3 gap-4 max-w-[1280px] mx-auto py-4'>
            {
                myIdeaData.length !== 0 ? myIdeaData.map(data => <MyIdeaCard key={data._id} data={data}></MyIdeaCard>)
                    : <div className='mx-[100%] my-[50%] w-full font-bold text-[48px]'><div>Nothing here yet</div></div>
            }
        </div>
    );
};

export default MyIdeaPage;