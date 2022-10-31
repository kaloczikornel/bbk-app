import React from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
    Button,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AXIOS_METHOD, doApiCall } from '../../../hooks/useApi';
import { useAuth } from '../../../hooks/useAuth';

export const UserEditModal = ({ open, handleClose, event }) => {
    const { dbUser } = useAuth();
    const handleSave = async (values) => {
        if (event) {
            await doApiCall(AXIOS_METHOD.PATCH, `/event/${event._id}`, handleClose, handleClose, {
                name: values.name,
                place: values.place,
                date: values.date,
                description: values.description,
                userId: dbUser._id,
            });
        } else {
            await doApiCall(AXIOS_METHOD.POST, '/event', handleClose, handleClose, {
                name: values.name,
                place: values.place,
                date: values.date,
                description: values.description,
                userId: dbUser._id,
            });
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{`Esemény ${event ? 'szerkesztése' : 'létrehozása'}`} </DialogTitle>
                <DialogContent>
                    <Formik
                        initialValues={{
                            name: event?.name,
                            place: event?.place,
                            date: event?.date,
                            description: event?.description,
                        }}
                        onSubmit={(values) => handleSave(values)}
                    >
                        {({ values, setFieldValue }) => (
                            <Form>
                                <Stack gap={2} marginTop={4}>
                                    <TextField
                                        fullWidth
                                        id="name"
                                        name="name"
                                        label="Esemény neve"
                                        value={values.name}
                                        onChange={(e) => setFieldValue('name', e.target.value)}
                                    />
                                    <TextField
                                        fullWidth
                                        id="place"
                                        name="place"
                                        value={values.place}
                                        label="Esemény helye"
                                        onChange={(e) => setFieldValue('place', e.target.value)}
                                    />
                                    <DateTimePicker
                                        label="Esemény időpontja"
                                        value={values.date ?? new Date()}
                                        onChange={(e) => setFieldValue('date', e.$d)}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                    <TextField
                                        fullWidth
                                        multiline
                                        maxRows={10}
                                        id="description"
                                        name="description"
                                        value={values.description}
                                        label="Esemény leírása"
                                        onChange={(e) =>
                                            setFieldValue('description', e.target.value)
                                        }
                                    />
                                    <Button color="primary" variant="text" type="submit">
                                        Mentés
                                    </Button>
                                </Stack>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Mégsem</Button>
                </DialogActions>
            </Dialog>
        </LocalizationProvider>
    );
};

export default UserEditModal;
