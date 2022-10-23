import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function OutlinedCard({ title, sumUp, content, author }) {
    return (
        <Box>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body2">{sumUp}</Typography>
                    <Typography sx={{ marginTop: 4 }} color="text.secondary">
                        {author}
                    </Typography>
                    <Typography sx={{ marginTop: 4 }} color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Tovább...</Button>
                </CardActions>
            </Card>
        </Box>
    );
}
