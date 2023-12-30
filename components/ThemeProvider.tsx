"use client"
import React,{useState} from 'react'
import { Roboto } from 'next/font/google'
import '~styles/globals.css'
import { Navbar, Footer} from '~components'
import { Provider } from 'react-redux'
import store from '~redux'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


type Props = {
  children: React.ReactNode
}
const ThemeProvider = ({
  children,
}: Props) => {
    const [theme,setTheme] = useState(false)
    console.log(theme)
  return (
    <Provider store={store}>
        <body className={`${roboto.className} dark__theme`}>
            <Navbar/>
            {children}
            <Footer/>
        </body>              
    </Provider>

  )
}

export default ThemeProvider


