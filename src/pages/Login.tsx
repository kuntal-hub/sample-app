import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { useToast } from "@/hooks/use-toast"
import { useAppDispatch } from '@/store/hooks';
import { setAuth } from '@/store/authSlice'

export default function Login() {
    const navigate = useNavigate()
    const { toast } = useToast()
    const dispatch = useAppDispatch()

    const handleLogin = () => {
        setTimeout(() => {
            toast({
                title: 'Login Success 🎉',
                description: 'You have successfully logged in',
                className: 'bg-green-500 text-white'
            })
            dispatch(setAuth(true));
            navigate('/dashboard');
        }, 500)
    }

    return (
        <div className='text-[#081735] flex flex-nowrap justify-center'>
            <div className='h-auto min-h-screen hidden lg:flex lg:w-[50%] bg-gray-100 justify-center items-center'>

                <div className='w-[474px] h-[322px] m-0 relative scale-75 xl:scale-90 2xl:scale-100'>
                    <div className='w-[447px] h-[170px] shadow bg-white rounded-xl absolute top-0 left-0'>
                        <div className='flex flex-nowrap justify-start items-center p-4 border-b border-[#E5E5E5]'>
                            <img src="/Subtract.svg" className='w-7 h-[31px]' alt="Subtract" />
                            <p className='inter ml-3 inter-700 text-lg'>
                                AI to Detect & Autofix Bad Code
                            </p>
                        </div>

                        <div className='flex flex-nowrap justify-around h-[90px] items-center'>
                            <div className='flex flex-col justify-center items-center'>
                                <strong>30+</strong>
                                <p className='inter inter-400 text-sm'>Language Support</p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <strong>10K+</strong>
                                <p className='inter inter-400 text-sm'>Developers</p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <strong>100K+</strong>
                                <p className='inter inter-400 text-sm'>Hours Saved</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-[256px] h-[164px] shadow bg-white rounded-xl absolute bottom-0 right-0'>
                        <div className='flex flex-nowrap justify-between items-center py-4 px-5'>
                            <img src="/Group 4.svg" alt="group5" />
                            <img src="/Group 5.svg" alt="group6" />
                        </div>
                        <img src="/Group 6.png" alt="group6" className='block px-5 py-5 w-[108px]' />

                    </div>
                </div>

                <img src="/Subtract.png" alt="Logo" className='max-w-[284px] max-h-[319px] w-auto h-[30vh] fixed bottom-2 left-2 ' />


            </div>
            <div className='h-auto min-h-screen w-full lg:w-[50%] bg-gray-200 flex flex-col justify-center items-center py-6'>
                <div className='max-w-[672px] max-h-[602px] h-[486px] sm:h-[504px] 2xl:h-[550px] w-[92%] sm:w-[80%] md:w-[70%] bg-white rounded-xl shadow-lg flex flex-col justify-start items-center py-8'>
                    <img src="/Frame 10.svg" alt="logo" className='block mx-auto w-[46%] max-h-10' />
                    <h1 className='inter inter-700 text-xl sm:text-2xl 2xl:text-3xl text-[#081735] mx-auto mt-6 sm:mt-8 sm:mb-2 mb-0'>
                        Welcome to CodeAnt AI
                    </h1>
                    <Tabs defaultValue="SAAS" className="w-full">
                        <div className='p-5 mb-3'>

                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="SAAS">SAAS</TabsTrigger>
                                <TabsTrigger value="Self Hosted">Self Hosted</TabsTrigger>
                            </TabsList>
                        </div>
                        <hr />
                        <TabsContent value="SAAS">
                            <div className='flex flex-col justify-center items-center px-5 mt-3'>
                                <Button onClick={handleLogin} variant="outline" className='flex flex-nowrap justify-center items-center my-[6px] w-full max-w-[446px] h-12 2xl:h-14'>
                                    <img src="/Icon.svg" alt="github" /><span className='ml-2 inter inter-600 text-sm 2xl:text-[16px]'>Sign in with Github</span>
                                </Button>
                                <Button onClick={handleLogin} variant="outline" className='flex flex-nowrap justify-center items-center my-[6px] w-full max-w-[446px] h-12 2xl:h-14'>
                                    <img src="/Icon (1).svg" alt="github" /><span className='ml-2 inter inter-600 text-sm 2xl:text-[16px]'>Sign in with GitLab</span>
                                </Button>
                                <Button onClick={handleLogin} variant="outline" className='flex flex-nowrap justify-center items-center my-[6px] w-full max-w-[446px] h-12 2xl:h-14'>
                                    <img src="/Icon (2).svg" alt="github" /><span className='ml-2 inter inter-600 text-sm 2xl:text-[16px]'>Sign in with Azure Devops</span>
                                </Button>
                                <Button onClick={handleLogin} variant="outline" className='flex flex-nowrap justify-center items-center my-[6px] w-full max-w-[446px] h-12 2xl:h-14'>
                                    <img src="/Icon (3).svg" alt="github" /><span className='ml-2 inter inter-600 text-sm 2xl:text-[16px]'>Sign in with Bitbucket</span>
                                </Button>
                            </div>
                        </TabsContent>
                        <TabsContent value="Self Hosted">
                            <div className='flex flex-col justify-center items-center px-5'>

                                <Button onClick={handleLogin} variant="outline" className='flex flex-nowrap justify-center items-center my-[6px] w-full max-w-[446px] 2xl:h-14 h-12'>
                                    <img src="/Icon (1).svg" alt="github" /><span className='ml-2 inter inter-600 text-sm 2xl:text-[16px]'>Self Hosted GitLab</span>
                                </Button>
                                <Button onClick={handleLogin} variant="outline" className='flex flex-nowrap justify-center items-center my-[6px] w-full max-w-[446px] 2xl:h-14 h-12'>
                                    <img src="/Icon (4).svg" alt="github" /><span className='ml-2 inter inter-600 text-sm 2xl:text-[16px]'>Sign in with SSO</span>
                                </Button>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

                <p className='inter inter-400 text-[#081735] text-xs 2xl:text-sm mt-8'>
                    By signing up you agree to the <a href="#" className='inter-600 hover:underline'>Privacy Policy.</a>
                </p>
            </div>
        </div>
    )
}
