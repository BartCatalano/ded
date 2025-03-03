import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./Layout/AppLayout"
import HomePage from "./pages/HomePage"
import CreatePage from "./Pages/CreatePage"

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path='/Creation' element={<CreatePage/>} ></Route>
        </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
