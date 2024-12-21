import { Outlet } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import './App.css'

function App() {

  return (
    <div className='w-screen h-screen antialiased fixed top-0 left-0 overflow-y-auto'>
      <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
        <Outlet />
        <Toaster />
      </ThemeProvider>
    </div>
  )
}

export default App
