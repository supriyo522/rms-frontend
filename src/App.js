// import logo from './logo.svg';
// import './App.css';
import Header from './Components/Header'
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Login from './Components/Login';
import AddFabric from './Components/AddFabric';
// import Test from './Components/Test';

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import AddVendor from './Components/AddVendor';
import AddSalesPerson from './Components/AddSalesPerson';
import AddSalesCast from './Components/AddSalesCast';
import InputData from './Components/InputData';

function App() {
  return (
   <>
   {/* <Header />
   <Dashboard />
   <Footer /> */}

    <Router>
        <div className="App">
          <Header />

          <main>
            <Routes>
              < Route path="/" element={<Dashboard />} />
              {/* <Route path="/add_fabric " element={<Add_Fabric />} />  */}
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/login" element={<Login />} /> */}
              <Route path="/add_fabric" element={<AddFabric  />} />
              <Route path="/add_vendor" element={<AddVendor/>} />
              <Route path="/add_sales_person" element={<AddSalesPerson/>}/>
              <Route path="/add_sales_cast" element={<AddSalesCast/>}/>
              <Route path="/input" element={<InputData />}/>
              {/* // 
              // 
              // 
              // <Route path="/companydetails" element={<CompanyDetails />} />
              // <Route path="/clientreview" element={<ClientReview />} />
              // <Route path="/dashboard" element={<Dashboard />} />
              // <Route path="/mymodal" element={<Mymodal/>}/> */}
          </Routes>
          </main>
         
          <Footer />
        </div>
      </Router> 

   {/* <div className='bg-info'> dfghjkm
<h1 className='text-danger'>ghjj</h1>
   </div> */}
   </>
  );
}

export default App;
