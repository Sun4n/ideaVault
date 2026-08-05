import EditProfile from '@/component/shared/EditProfile';
import { auth } from '@/lib/auth';
import { Card } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';


const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user
    console.log(user);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/${user?.email}`)
    const userData = await res.json()
    console.log(userData);

    return (
        <div className='max-w-[1280px] mx-auto w-full '>
            <Card className='my-4 p-5'>
                <div >
                    {
                        userData.map((data, indx) => {
                            return <div key={indx} className='flex gap-4'>
                                <div >
                                    <Image src={data?.image} alt='userImage' width={200} height={200} className='object-cover'></Image>
                                </div>
                                <div >
                                    <p className='text-[2rem] font-bold'>Name:{data?.name}</p>
                                    <p className='text-[1rem] font-bold'>Email:{data?.email}</p>
                                    <EditProfile data={data}></EditProfile>
                                </div>
                            </div>
                        })
                    }
                </div>

            </Card>
        </div>
    );
};

export default ProfilePage;