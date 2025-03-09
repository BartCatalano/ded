import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./Layout/AppLayout"
import CreatePage from "./Pages/CreatePage"
import InfoPage from "./Pages/InfoPage"
import HomePage from "./Pages/HomePage"
import PrintPage from "./Pages/PrintPage"

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/stampa" element={<PrintPage />} />
        <Route element={<AppLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path='/Creation' element={<CreatePage/>} ></Route>
        <Route path='/Info' element={<InfoPage/>} ></Route>
        </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
