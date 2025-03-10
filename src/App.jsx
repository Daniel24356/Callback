import './App.css'
import PaymentSuccess from './PaymentSuccess'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
