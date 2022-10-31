/* eslint-disable */
import React, { useEffect, useState } from 'react';
import {
    Checkbox,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { AXIOS_METHOD, doApiCall, useApi } from '../../hooks/useApi';

export const EventDetailsPage = () => {
    const [applicants, setApplicants] = useState([]);
    const { user } = useAuth0();
    const { eventId } = useParams();
    const [data, loading, error, apiCallback] = useApi(
        AXIOS_METHOD.GET,
        `/applicants/${eventId}/${user.sub}`
    );

    useEffect(() => {
        setApplicants(data.applicants);
    }, [data]);

    const handleFieldChange = async (columnName, row, value) => {
        await doApiCall(
            AXIOS_METHOD.PATCH,
            `/applicant/${eventId}/${row._user}`,
            apiCallback,
            {},
            {
                canceled: row.canceled,
                paid: row.paid,
                came: row.came,
                [columnName]: value,
            }
        );
    };
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Felhasználó</TableCell>
                        <TableCell align="right">Lemondta</TableCell>
                        <TableCell align="right">Fizetett</TableCell>
                        <TableCell align="right">Eljött</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {applicants &&
                        applicants.length !== 0 &&
                        applicants.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.user[0].name}
                                </TableCell>
                                <TableCell align="right">
                                    <Checkbox
                                        checked={row.canceled}
                                        onChange={async (e) => {
                                            await handleFieldChange(
                                                'canceled',
                                                row,
                                                e.target.checked
                                            );
                                        }}
                                    />
                                </TableCell>
                                <TableCell align="right">
                                    <Checkbox
                                        checked={row.paid}
                                        onChange={async (e) => {
                                            await handleFieldChange('paid', row, e.target.checked);
                                        }}
                                    />
                                </TableCell>
                                <TableCell align="right">
                                    <Checkbox
                                        checked={row.came}
                                        onChange={async (e) => {
                                            await handleFieldChange('came', row, e.target.checked);
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EventDetailsPage;
