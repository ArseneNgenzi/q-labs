import { Sora } from '@next/font/google'

import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'


const sora = Sora({
  subsets: ['latin'],
  variable: '--font=sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})
const Layout = ({children}) => {
  return <div className={`  text-gray-200 bg-[#2e2257]/70 ${sora.variable} font-sora  h-screen`}>
    <TopLeftImg/>
    <Nav/>
    <Header/>
    <div className=' '>
      {children}
    </div>
  </div>;
};

export default Layout;
