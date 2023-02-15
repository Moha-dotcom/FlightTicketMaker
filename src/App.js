import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Form } from "./Form";
import Nav from "./Nav";
import NavItem from "./NavItem";
import Page404 from './Page404'
import Table from "./Table";
import { ViewPdf } from "./ViewPdf";




function App() {
  return (

    <>
     <BrowserRouter>
     <div className="mx-auto max-w-7xl sm:px-6 lg:px-8  ">
       
       <Nav>
   
        <NavItem href="/" isActive>Create A Flight Ticket</NavItem>
        <NavItem href="/view">View List of Tickets</NavItem>
        {/* <NavItem href="/picks">Vincent’s Picks</NavItem> */}
      </Nav>
      </div>
      <Routes>
        <Route path="/" element={<Form />}/>
        <Route path="/view" element={<Table />} />
        <Route path="/error" element={<Page404 />} />
      
       
      </Routes>
     </BrowserRouter>
    </>
   
  );
}

export default App;
