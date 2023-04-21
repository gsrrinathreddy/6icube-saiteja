import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function BasicCard(props) {
  const image = props.image;
  const title = props.title;
  const description = props.description;


  return (
    <Card sx={{ maxWidth: 240 ,margin:"15px"}}>
      <CardMedia
      sx={{height:140,margin:"15px"}}
      image={props.image}
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.description}
        </Typography>
      </CardContent>
         </Card>
  );
}