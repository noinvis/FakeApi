import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import NotFound from './pages/not-found/NotFound'
import Layout from './pages/layout/Layout'
import DetailProduct from './pages/detail-product/DetailProduct'
import DetailUsers from './pages/detail-users/DetailUsers'
import UserMain from './pages/usermain/UserMain'

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index={true} element={<Home/>}/>
          <Route path='/usermain' element={<UserMain/>}/>
          <Route path='/product/:id' element={<DetailProduct/>}/>
          <Route path='/users/:id' element={<DetailUsers/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
   
    </BrowserRouter>
  )
}

export default App
