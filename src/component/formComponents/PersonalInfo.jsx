// import { Link } from "react-router-dom";
import styles from "../../styles/formStyle.module.css";
import { Box, Button, TextField, Typography } from '@mui/material';
import { useFormContext } from "react-hook-form";

const PersonalInfo = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <section className={styles.formStyle}>
            <Typography variant="h4" align="center">
                Personal Form
            </Typography>
            <Box marginTop={2} marginBottom={2}>
                <TextField label="First Name" fullWidth {...register("firstname", { required: true })} />
                {errors.firstname && <small style={{ color: "red" }}>First Name is required</small>}
            </Box>

            <Box marginTop={2} marginBottom={2}>
                <TextField label="Last Name" fullWidth {...register("lastname", { required: true })} />
                {errors.lastname && <small style={{ color: "red" }}>Last Name is required</small>}
            </Box>

            <Box marginBottom={2}>
                <TextField label="Age" type="number" fullWidth {...register("age", {
                    required: { value: true, message: "Age is required" },
                    maxLength: { value: 2, message: "Wrong Age" },
                })} />
                {errors.age && <small style={{ color: "red" }}>{errors.age.message}</small>}
            </Box>

            {/* <Typography textAlign={'center'} marginTop={2}>
                <Link to="/ContactForm">Next</Link>
            </Typography> */}
        </section>
    )
}

export default PersonalInfo;
