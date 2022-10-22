import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import format from 'date-fns/format';

export default function MediaCard({ name, place, description, date }) {
    return (
        <Card sx={{ maxWidth: 345, margin: '0 auto' }} elevation={6}>
            <CardMedia
                component="img"
                height="140"
                image="https://www.picng.com/upload/wine/png_wine_17299.png"
                alt="wine"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" marginTop={2}>
                    {`${place} ${format(date, 'yyyy-MM-ii')}`}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Jelentkezés</Button>
            </CardActions>
        </Card>
    );
}
