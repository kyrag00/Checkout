import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Confirmation from "./Confirmation"
import Payment from "./Payment"
import Products from "./Products"

const App = () => {


  return (
    <Router>
    <Routes>
       <Route path="/" element={<Payment />} />
       <Route path="/confirmation" element={<Confirmation />} />
       <Route path="/products" element={<Products />} />
    </Routes>
    </Router>
  )
}

export default App