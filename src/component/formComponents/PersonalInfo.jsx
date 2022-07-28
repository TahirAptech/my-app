import styles from "../../styles/formStyle.module.css";
import { Box, Button, TextField, Typography } from '@mui/material';
import { Controller, useFormContext, useController } from "react-hook-form";

const PersonalInfo = () => {
    const { control } = useFormContext();
    // const {} =useController();
    return (
        <section className={styles.formStyle}>
            <Typography variant="h4" align="center">
                Personal Form
            </Typography>
            <Box marginTop={2} marginBottom={2}>
                <Controller
                    name="firstname"
                    control={control}
                    rules={{ required: { value: true, message: "First Name is required" } }}
                    render={
                        ({
                            field: { onChange, onBlur, value, name, ref },
                            fieldState: { invalid, isTouched, isDirty, error },
                            formState: { errors },
                        }) => (
                            <>
                                <TextField label="First Name" fullWidth />
                                {errors.firstname && <small style={{ color: "red" }}>{errors.firstname.message}</small>}
                            </>
                        )
                    }
                />

                {/* <TextField label="First Name" fullWidth {...register("firstname", { required: true })} /> */}
                {/* {errors.firstname && <small style={{ color: "red" }}>First Name is required</small>} */}
            </Box>

            {/* <Box marginTop={2} marginBottom={2}>
                <TextField label="Last Name" fullWidth {...register("lastname", { required: true })} />
                {errors.lastname && <small style={{ color: "red" }}>Last Name is required</small>}
            </Box> */}

            <Box marginTop={2} marginBottom={2}>
                <Controller
                    name="lastname"
                    control={control}
                    rules={{ required: { value: true, message: "Last Name is required" } }}
                    render={
                        ({
                            field: { onChange, onBlur, value, name, ref },
                            fieldState: { invalid, isTouched, isDirty, error },
                            formState: { errors },
                        }) => (
                            <>
                                <TextField label="Last Name" fullWidth />
                                {errors.lastname && <small style={{ color: "red" }}>{errors.lastname.message}</small>}
                            </>
                        )
                    }
                />

                {/* <TextField label="First Name" fullWidth {...register("firstname", { required: true })} /> */}
                {/* {errors.firstname && <small style={{ color: "red" }}>First Name is required</small>} */}
            </Box>

            {/* <Box marginBottom={2}>
                <TextField label="Age" type="number" fullWidth {...register("age", {
                    required: { value: true, message: "Age is required" },
                    maxLength: { value: 2, message: "Wrong Age" },
                })} />
                {errors.age && <small style={{ color: "red" }}>{errors.age.message}</small>}
            </Box> */}
            <Box marginTop={2} marginBottom={2}>
                <Controller
                    name="age"
                    control={control}
                    rules={{ required: { value: true, message: "Age is required" }, maxLength: { value: 2, message: "Wrong Age" } }}
                    render={
                        ({
                            field: { onChange, onBlur, value, name, ref },
                            fieldState: { invalid, isTouched, isDirty, error },
                            formState: { errors },
                        }) => (
                            <>
                                <TextField label="Age" fullWidth type={'number'} />
                                {errors.age && <small style={{ color: "red" }}>{errors.age.message}</small>}
                            </>
                        )
                    }
                />

                {/* <TextField label="First Name" fullWidth {...register("firstname", { required: true })} /> */}
                {/* {errors.firstname && <small style={{ color: "red" }}>First Name is required</small>} */}
            </Box>

        </section>
    )
}

export default PersonalInfo;
