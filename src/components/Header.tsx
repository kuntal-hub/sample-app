import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { useAppDispatch } from '@/store/hooks'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@/hooks/use-toast'
import { setAuth } from '@/store/authSlice'

export default function Header() {
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
        <header className='flex sticky top-0 left-0 flex-nowrap justify-between md:hidden items-center p-3 bg-white text-primary-background border-b border-primary-border'>
            <img src="/Frame 10.svg" alt="logo" className='h-8 block' />

            <Sheet>
                <SheetTrigger asChild>
                    <Button variant='ghost'>
                        <img src="/Frame 1024.svg" alt="menu" />
                    </Button>
                </SheetTrigger>
                <SheetContent side='top' className='px-5 pt-3 pb-5'>
                    <SheetHeader>
                        <SheetTitle>
                            <img src="/Frame 10.svg" alt="logo" className='h-8 block' />
                        </SheetTitle>
                    </SheetHeader>
                    <>
                        <div className='m-0 p-0 flex flex-col text-left'>
                            <Accordion type="single" collapsible className="mb-4 mt-6 border border-gray-300 rounded-lg">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>UtkarshDhairyaPanwar</AccordionTrigger>
                                    <AccordionContent>
                                        UtkarshDhairyaPanwar Repository
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <Button variant='default' className='my-1 flex justify-start bg-[#1570EF] hover:bg-[#0E65E5]'>
                                <img src="/Text and icon.svg" alt="all Repo" />
                            </Button>
                            <Button variant='ghost' className='my-1 flex justify-start hover:bg-gray-200'>
                                <img src="/Text and icon (1).svg" alt="all Repo" />
                            </Button>
                            <Button variant='ghost' className='my-1 flex justify-start hover:bg-gray-200'>
                                <img src="/Text and icon (2).svg" alt="all Repo" />
                            </Button>
                            <Button variant='ghost' className='my-1 flex justify-start hover:bg-gray-200'>
                                <img src="/Text and icon (3).svg" alt="all Repo" />
                            </Button>
                            <Button variant='ghost' className='my-1 flex justify-start hover:bg-gray-200'>
                                <img src="/Text and icon (4).svg" alt="all Repo" />
                            </Button>
                            <Button variant='ghost' className='my-1 flex justify-start hover:bg-gray-200'>
                                <img src="/Text and icon (5).svg" alt="all Repo" />
                            </Button>
                            <Button variant='ghost' onClick={handleLogout} className='my-1 flex justify-start hover:bg-red-200'>
                                <img src="/Text and icon (6).svg" alt="all Repo" />
                            </Button>
                        </div>
                    </>
                </SheetContent>
            </Sheet>
        </header>
    )
}
