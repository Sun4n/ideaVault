
import DeleteComment from '@/component/shared/DeleteComment';
import EditComment from '@/component/shared/EditComment';
import { auth } from '@/lib/auth';
import { Card } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';


const MyInteractionPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user
    console.log(user?.id);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comment/user/${user?.id}`)
    const commentData = await res.json()
    console.log(commentData);
    return (
        <div className='max-w-[1280px] mx-auto md:w-[1280px] w-full'>
            <h1 className='text-[48px] font-bold'>My Inteactions</h1>
            <p className='text-[1.5rem] font-medium'>Comments({commentData.length})</p>
            <div className='space-y-2 my-4 w-full'>
                {
                    commentData.map((comment, indx) => {
                        return <Card key={indx} className='w-[400px] md:w-full'>
                            <div className='flex justify-between items-center'>  
                                <h1 className='text-[1rem] md:text-[30px] font-bold'>{comment.ideaTitle}</h1>
                                <div className='flex gap-3 items-center'>
                                    <EditComment comment={comment}></EditComment>
                                    <DeleteComment comment={comment}></DeleteComment>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center justify-start'>
                                <div className='mt-5'>
                                    <Image src={comment.userImage} alt='user image' width={60} height={60} className='rounded-full object-cover'></Image>
                                </div>
                                <div className=''>
                                    <h1 className='font-bold text-[1rem]'>{comment.userName}</h1>
                                    <p>{comment.date}</p>
                                    <p>{comment.comment}</p>
                                </div>
                            </div>
                        </Card>
                    })
                }
            </div>
        </div>
    );
};

export default MyInteractionPage;