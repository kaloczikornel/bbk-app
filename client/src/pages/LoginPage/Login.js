import React from 'react';
import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';

function Login() {
    return (
        <Paper
            sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                height: 300,
                padding: 5,
            }}
            elevation={12}
        >
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <Typography variant="h2">Login</Typography>
                            <Field
                                component={TextField}
                                type="email"
                                name="email"
                                label="E-mail"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                fullWidth
                            />
                            {errors.email && touched.email && errors.email}
                            <Field
                                component={TextField}
                                type="password"
                                name="password"
                                label="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                fullWidth
                            />
                            {errors.password && touched.password && errors.password}
                            <Button type="submit" disabled={isSubmitting} fullWidth>
                                Login
                            </Button>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </Paper>
    );
}

export default Login;
