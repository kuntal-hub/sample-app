import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/store/hooks'
import { setAuth } from '@/store/authSlice'
import { useToast } from '@/hooks/use-toast'

export default function Sidebar() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { toast } = useToast()

    const handleLogout = () => {
        dispatch(setAuth(false))
        navigate('/login')
        toast({
            description: 'You have been logged out successfully',
            className: 'bg-green-500 text-white',
        })
    }

    return (
        <nav className='w-[242px] hidden h-screen fixed top-0 left-0 bg-white text-[#081735] inter md:flex md:flex-col md:justify-between'>

            <div className='m-0 p-0'>

                <img src="/Frame 10.svg" alt="logo" className='h-8 block m-4' />

                <Accordion type="single" collapsible className="mx-4 mb-4 border border-gray-300 rounded-lg">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>UtkarshDhairyaPa...</AccordionTrigger>
                        <AccordionContent>
                            UtkarshDhairyaPanwar Repository
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Button variant='default' className='mx-4 my-1 bg-[#1570EF] hover:bg-[#0E65E5]'>
                    <img src="/Text and icon.svg" alt="all Repo" />
                </Button>
                <Button variant='ghost' className='mx-4 my-1 hover:bg-gray-200'>
                    <img src="/Text and icon (1).svg" alt="all Repo" />
                </Button>
                <Button variant='ghost' className='mx-4 my-1 hover:bg-gray-200'>
                    <img src="/Text and icon (2).svg" alt="all Repo" />
                </Button>
                <Button variant='ghost' className='mx-4 my-1 hover:bg-gray-200'>
                    <img src="/Text and icon (3).svg" alt="all Repo" />
                </Button>
                <Button variant='ghost' className='mx-4 my-1 hover:bg-gray-200'>
                    <img src="/Text and icon (4).svg" alt="all Repo" />
                </Button>
            </div>

            <div className='m-0 p-0 pb-6'>

                <Button variant='ghost' className='mx-4 my-1 hover:bg-gray-200'>
                    <img src="/Text and icon (5).svg" alt="all Repo" />
                </Button>
                <Button onClick={handleLogout} variant='ghost' className='mx-4 my-1 hover:bg-red-200'>
                    <img src="/Text and icon (6).svg" alt="all Repo" />
                </Button>
            </div>
        </nav>
    )
}
