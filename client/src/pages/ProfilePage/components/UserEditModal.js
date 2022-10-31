import React from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Button,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { AXIOS_METHOD, doApiCall } from '../../../hooks/useApi';

export const UserEditModal = ({ open, handleClose, user }) => {
    const handleSave = async (values) => {
        await doApiCall(
            AXIOS_METHOD.POST,
            `/user/${user._id}`,
            handleClose,
            {},
            {
                canGetIn: values.canGetIn,
                hasCard: values.hasCard,
                idCardNumber: values.idCardNumber,
            }
        );
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Profil szerkesztése</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Figyelj, hogy minden adatod megfeleljen a valóságnak!
                </DialogContentText>
                <Formik
                    initialValues={{
                        canGetIn: user.canGetIn,
                        hasCard: user.hasCard,
                        idCardNumber: user.idCardNumber,
                        email: user.email,
                    }}
                    onSubmit={(values) => handleSave(values)}
                >
                    {({ values, setFieldValue }) => (
                        <Form>
                            <Stack gap={2} marginTop={4}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email"
                                    value={values.email}
                                    disabled
                                />
                                <TextField
                                    fullWidth
                                    id="idCard"
                                    name="idCardNumber"
                                    value={values.idCardNumber}
                                    label="Személyi igazolvány szám"
                                    onChange={(e) => setFieldValue('idCardNumber', e.target.value)}
                                />
                                <FormControl fullWidth>
                                    <InputLabel id="select-label">
                                        Be tudsz jönni a koliba?
                                    </InputLabel>
                                    <Select
                                        labelId="select-label"
                                        id="demo-simple-select"
                                        name="canGetIn"
                                        value={values.canGetIn ? 1 : 0}
                                        label="Be tudsz jönni a koliba?"
                                        onChange={(e) =>
                                            setFieldValue('canGetIn', !!e.target.value)
                                        }
                                    >
                                        <MenuItem value={1}>Igen</MenuItem>
                                        <MenuItem value={0}>Nem</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel id="select-card-label">
                                        Van kolis belépőkártyád?
                                    </InputLabel>
                                    <Select
                                        labelId="select-card-label"
                                        id="card-simple-select"
                                        name="hasCard"
                                        value={values.hasCard ? 1 : 0}
                                        label="Van kolis belépőkártyád?"
                                        onChange={(e) => setFieldValue('hasCard', !!e.target.value)}
                                    >
                                        <MenuItem value={1}>Van</MenuItem>
                                        <MenuItem value={0}>Nincs</MenuItem>
                                    </Select>
                                </FormControl>
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
    );
};

export default UserEditModal;
