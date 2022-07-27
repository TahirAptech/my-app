import { FormProvider, useForm } from "react-hook-form";
import RegistraionForm from "./screens/RegistraionForm";

function App() {
  const useFormMethods = useForm();
  return (
    <FormProvider {...useFormMethods}>
      <RegistraionForm />
    </FormProvider>
  );
}

export default App;
