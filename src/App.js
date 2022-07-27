import { FormProvider, useForm } from "react-hook-form";
import { Route } from "react-router-dom";
import { BrowserRouter, Router, Routes } from "react-router-dom";
import RegistraionForm from "./screens/RegistraionForm";
// import Autocompletes from "./component/Autocompletes";
// import AddressForm from '../component/formComponents/AddressForm';
// import ContactForm from '../component/formComponents/ContactForm';
// import PersonalInfo from '../component/formComponents/PersonalInfo';

function App() {
  const useFormMethods = useForm();
  return (
    //#region Router
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<RegistraionForm />} />
    //     <Route path="/ContactForm" element={<ContactForm />} />
    //     <Route path="/AddressForm" element={<AddressForm />} />
    //     <Route path="/PersonalInfo" element={<PersonalInfo />} />
    //   </Routes>
    // </BrowserRouter>
    //#endregion

    <FormProvider {...useFormMethods}>
      <RegistraionForm />
    </FormProvider>
  );
}

export default App;
