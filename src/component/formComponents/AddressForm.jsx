import styles from "../../styles/formStyle.module.css";
import { Box, Button, TextField, Typography } from '@mui/material';
import { useFormContext } from "react-hook-form";

const AddressForm = () => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <section className={styles.formStyle}>
            <Typography variant="h4" align="center">
                Address Form
            </Typography>
            <Box marginTop={2} marginBottom={2}>
                <TextField label="Country Name" fullWidth {...register("country", { required: true })} />
                {errors.country && <small style={{ color: "red" }}>Country Name is required</small>}
            </Box>

            <Box marginTop={2} marginBottom={2}>
                <TextField label="State Name" fullWidth {...register("state", { required: true })} />
                {errors.state && <small style={{ color: "red" }}>State Name is required</small>}
            </Box>

            <Box marginTop={2} marginBottom={2}>
                <TextField label="City Name" fullWidth {...register("city", { required: true })} />
                {errors.city && <small style={{ color: "red" }}>City Name is required</small>}
            </Box>
        </section>
    )
}

export default AddressForm;
