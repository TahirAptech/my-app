import { Box, Button } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import AddressForm from '../component/formComponents/AddressForm';
import ContactForm from '../component/formComponents/ContactForm';
import PersonalInfo from '../component/formComponents/PersonalInfo';
import styles from "../styles/formStyle.module.css";

const RegistraionForm = () => {
    const { handleSubmit } = useFormContext();

    const onSubmit = (data) => {console.log(data); alert("Record saved sucessfully!") }
    return (
        <Box component="form" className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <br />
            <PersonalInfo />
            <br />
            <ContactForm />
            <br />
            <AddressForm />
            <br />
            <Button type="submit" variant="contained" sx={{ width: "35%" }}>Submit</Button>
            <br />
            <br />
            <br />
        </Box>
    )
}

export default RegistraionForm;
