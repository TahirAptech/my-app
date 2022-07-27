import styles from "../../styles/formStyle.module.css";
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm, useFormContext } from "react-hook-form";

const ContactForm = () => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <section className={styles.formStyle}>
            <Typography variant="h4" align="center">
                Contact Form
            </Typography>
            <Box marginTop={2} marginBottom={2}>
                <TextField label="Email" fullWidth {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "Invalid Email" }
                })} />
                {errors.email && <small style={{ color: "red" }}>{errors.email.message}</small>}
            </Box>

            <Box marginBottom={2}>
                <TextField label="Phone Number" type={'number'} fullWidth {...register("phone", { required: true })} />
                {errors.phone && <small style={{ color: "red" }}>Phone Number field is required</small>}
            </Box>

            <Box marginBottom={2}>
                <TextField type={'number'} label="Alternate Phone Number" fullWidth {...register("alternatePhone")} />
            </Box>
        </section>
    )
}

export default ContactForm;
