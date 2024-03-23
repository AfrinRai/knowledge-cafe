import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {


  return (
    <div className='mx-auto w-[80%]'>
      <Header></Header>
      <div className=' md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
