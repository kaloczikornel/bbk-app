import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Form, Formik } from 'formik';
import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';

export const UserEditModal = ({ open, handleClose, user, handleSave }) => {
    const [livingType, setLivingType] = useState(0);
    const [hasCard, setHasCard] = useState(false);
    const [idCardNumber, setIdCardNumber] = useState('111111SA');

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Profil szerkesztése</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Figyelj, hogy minden adatod megfeleljen a valóságnak!
                </DialogContentText>
                <Formik
                    initialValues={{ livingType, hasCard }}
                    onSubmit={(values) => handleSave(values)}
                >
                    <Form>
                        <Stack gap={2} marginTop={4}>
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                label="Email"
                                value={user.email}
                                disabled
                            />
                            <TextField
                                fullWidth
                                id="idCard"
                                name="idCard"
                                label="Személyi igazolvány szám"
                                value={idCardNumber}
                                onChange={(e) => setIdCardNumber(e.target.value)}
                            />
                            <FormControl fullWidth>
                                <InputLabel id="select-label">Kolis vagy?</InputLabel>
                                <Select
                                    labelId="select-label"
                                    id="demo-simple-select"
                                    value={livingType}
                                    label="Kolis vagy?"
                                    onChange={(e) => setLivingType(e.target.value)}
                                >
                                    <MenuItem value={1}>Kolis</MenuItem>
                                    <MenuItem value={2}>VIK-es</MenuItem>
                                    <MenuItem value={0}>Külsős</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id="select-card-label">
                                    Van kolis belépőkártyád?
                                </InputLabel>
                                <Select
                                    labelId="select-card-label"
                                    id="card-simple-select"
                                    value={hasCard ? 1 : 0}
                                    label="Van kolis belépőkártyád?"
                                    onChange={(e) => setHasCard(!!e.target.value)}
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
                </Formik>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Mégsem</Button>
            </DialogActions>
        </Dialog>
    );
};

export default UserEditModal;
