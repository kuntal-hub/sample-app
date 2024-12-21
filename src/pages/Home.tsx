import { useEffect, useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { repositories, Repository } from '@/lib/data'
import { Skeleton } from "@/components/ui/skeleton"

export default function Home() {
    const [repo, setRepo] = useState<Repository[]>([]);
    const [refreshCount, setRefreshCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setRepo([...repositories]);
        }, 1000);
    }, [refreshCount]);

    const handleRefresh = () => {
        setRepo([]);
        setRefreshCount(refreshCount + 1);
    }

    return (
        <div className='flex inter flex-nowrap justify-center items-center'>
            <Sidebar />
            <div className='flex flex-col w-full md:p-4 bg-gray-100 md:w-[calc(100%-242px)] md:fixed md:right-0 md:top-0 h-screen overflow-y-auto'>
                <Header />
                <div className='bg-white rounded-lg shadow-md'>
                    <div className='flex flex-col sm:flex-row sm:justify-between p-4 items-start'>
                        <div className='flex flex-col items-start'>
                            <h1 className='text-2xl inter-600 text-start'>Repositories</h1>
                            <p className='text-sm text-gray-500 mt-1 text-start'>
                                {repositories.length} total repositories
                            </p>
                        </div>
                        <div className='flex flex-nowrap justify-end mt-3 sm:my-0'>
                            <Button onClick={handleRefresh} variant='outline' className='mr-1 flex flex-nowrap justify-center items-center hover:bg-gray-200'>
                                <img src="/Frame 1015.svg" alt="refresh" />
                                <span className='text-sm inter-400 text-gray-600'>
                                    Refresh All
                                </span>
                            </Button>
                            <Button variant='default' className='ml-2 flex flex-nowrap justify-center items-center  bg-[#1570EF] hover:bg-[#0E65E5]'>
                                <img src="/plus.svg" alt="add" />
                                <span className='text-sm inter-400 text-white'>
                                    Add Repository
                                </span>
                            </Button>
                        </div>

                    </div>

                    <div className='flex flex-nowrap items-center border border-gray-200 py-2 px-3 mx-4 rounded-md max-w-[366px] mb-4'>
                        <img src="/search.svg" alt="search" className='w-4' />
                        <input type="text" placeholder='Find a repository...' className='w-full ml-3 text-sm focus:outline-none' />
                    </div>

                    {repo.length > 0 ? <div>
                        {
                            repo.map((repo, index) => (
                                <div key={index} className='flex flex-col cursor-pointer hover:bg-gray-100 items-start border border-gray-200 p-4'>
                                    <div className='flex flex-nowrap justify-start items-center'>
                                        <h2 className='text-[16px] xl:text-lg inter-500 mr-4'>{repo.name}</h2>
                                        {
                                            repo.status === 'Public' ? (<img src="/Badge.svg" alt="public" className='h-5 xl:h-6' />) : (<img src="/Badge (1).svg" alt="private" className='h-5 xl:h-6' />)
                                        }
                                    </div>
                                    <div className='flex flex-nowrap justify-start items-center mt-2'>
                                        <span className='inter-400 text-gray-600 text-xs xl:text-sm mr-[6px]'>
                                            {repo.language}
                                        </span>
                                        <img src="/Ellipse 1.svg" alt="." />
                                        <img src="/database.svg" alt="db" className='ml-5 sm:ml-7' />
                                        <span className='inter-400 text-gray-600 text-xs xl:text-sm ml-[6px]'>
                                            {repo.storage}
                                        </span>
                                        <span className='inter-400 text-gray-600 text-xs xl:text-sm ml-5 sm:ml-7'>
                                            Updated {repo.lastUpdated}
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div> : <div>
                        {
                            Array.from({ length: 10 }).map((_, index) => (
                                <div key={index} className='flex flex-col cursor-pointer hover:bg-gray-100 items-start border border-gray-200 p-4'>
                                    <div className='flex flex-nowrap justify-start items-center'>
                                        <Skeleton className='w-40 h-5 rounded-full' />
                                        <Skeleton className='w-16 h-5 ml-6 rounded-full' />
                                    </div>
                                    <div className='flex flex-nowrap justify-start items-center mt-3'>
                                        <Skeleton className='w-24 h-4 rounded-full' />
                                        <Skeleton className='w-20 h-4 ml-6 rounded-full' />
                                        <Skeleton className='w-28 h-4 ml-6 rounded-full' />
                                    </div>
                                </div>
                            ))
                        }
                    </div>}
                </div>
            </div>
        </div>
    )
}
