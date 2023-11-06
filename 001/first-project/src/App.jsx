import './App.css'
import { ContactForm } from './components/ContactForm'
import { Counter } from './components/Counter'
import { UserList } from './components/UserList'
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <main className='main'>
      <header style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center"
      }}>
        <Link to='/' >Home</Link>
        <Link to='/counter' >Counter</Link>
        <Link to='/user-list' >User List</Link>
      </header>
      <Routes>
        <Route exact path='/' ></Route>
        <Route path='/counter' Component={Counter}></Route>
        <Route path='/user-list' Component={UserList}></Route>
      </Routes>

      {/* <Counter />
      <UserList /> */}
      <ContactForm/>
    </main>
  )
}

export default App
