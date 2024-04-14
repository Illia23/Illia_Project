import { Outlet } from 'react-router-dom'
import Header from 'components/Navbar'
import layot from './Layot.module.css';
const Layot = () => {
    return (
        <div className={layot.container}>
            <Header />
            <Outlet />
        </div>
            
           
  )
}

export default Layot