import { useState, useEffect } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Navbar, Container } from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import './NavBar.css'

const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const collectionRef = query(collection(db, 'categories'), orderBy('order')) 

    getDocs(collectionRef).then(response => {

      const categoriesAdapted = response.docs.map(doc => {
        const data = doc.data()
        const id = doc.id

        return { id, ...data}
      })
      setCategories(categoriesAdapted)
    })
  }, [])

  return (
    <Navbar expand="lg">
        <Container>
        <NavLink to='/' className={"logo"}>
          <h1>Fútbol Retro</h1>
      </NavLink>
        <div className="Categories">
          {categories.map(cat => (
              <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
            ))}
        </div>
        <CartWidget />
        </Container>
      </Navbar>
  )
}

export default NavBar