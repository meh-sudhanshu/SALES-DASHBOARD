import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import Homepage from "./Layouts/Homepage/Homepage";
import CustomerList from './Layouts/CustomerList/CustomerList'
import ReferenceList from './Layouts/ReferenceList/ReferenceList'
import TrainerList from './Layouts/TrainerList/TrainerList'
import ProfitReports from './Layouts/ProfitReportsList/ProfitReportsList'
import InvoiceList from './Layouts/InvoiceList/InvoiveList'
import LicenceList from './Layouts/LicenceList/LicenceList'
import CourseCatalogList from './Layouts/CourseCatalogList/CourseCatalogList'
function App() {

  
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path='/customerList' element={<CustomerList/>}/>
                <Route path='/referenceList' element={<ReferenceList/>}/>
                <Route path='/trainerList' element={<TrainerList/>}/>
                <Route path='/profitReports' element={<ProfitReports/>}/>
                <Route path='/invoiceList' element={<InvoiceList/>}/>
                <Route path='/licenceList' element={<LicenceList/>}/>
                <Route path='/courseCatalogList' element={<CourseCatalogList/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
