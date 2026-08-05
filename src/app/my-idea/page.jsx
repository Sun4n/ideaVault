import MyIdeaCard from '@/component/shared/MyIdeaCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

export const dynamic = 'force-dynamic';

const MyIdeaPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user

    // user না থাকলে fetch-ই করার দরকার নেই
    if (!user?.id) {
        return (
            <div className='mx-[100%] my-[50%] w-full font-bold text-[48px]'>
                <div>Please login</div>
            </div>
        )
    }

    const token = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea/user/${user.id}`, {
        headers: {
            authorization: `Bearer ${token?.token}`
        }
    })

    // response fail করলে array না ধরে নিয়ে সেফ ভাবে হ্যান্ডেল করো
    let myIdeaData = []
    if (res.ok) {
        const data = await res.json()
        if (Array.isArray(data)) {
            myIdeaData = data
        }
    } else {
        console.error('Failed to fetch ideas:', res.status)
    }

    return (
        <div className='grid grid-cols-1 w-full md:grid-cols-3 gap-4 max-w-[1280px] mx-auto py-4'>
            {
                myIdeaData.length !== 0
                    ? myIdeaData.map(data => <MyIdeaCard key={data._id} data={data}></MyIdeaCard>)
                    : <div className='mx-[100%] my-[50%] w-full font-bold text-[48px]'><div>Nothing here yet</div></div>
            }
        </div>
    );
};

export default MyIdeaPage;