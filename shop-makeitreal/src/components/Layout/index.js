import { Link } from 'react-router-dom'
import './styles.css'

function Layout({children}){
  return(
    <div>
      <nav className='layout_menu'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
      import { Link } from 'react-router-dom'
import './styles.css'

function Layout({children}){
  return(
    <div>
      <nav className='layout_menu'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout