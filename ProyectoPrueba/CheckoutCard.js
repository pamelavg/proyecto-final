import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
// instalo el npm i accounting para los simbolos del dinero
import accounting from "accounting"

const useStyles = makeStyles((theme) => ({
  root:{
    maxWidth:345,
  },
  action: {
    marginTop:"1rem",
  },
  media:{
    height:0,
    paddingTop:"56.25%",
  },
  cardActions: {
      display: 'flex',
      justifyContent: 'space-between',
      textAling: 'center',
  },
  cardRating: {
      display: 'flex',
  }
}));

export default function CheckoutCard ({
    producto : {id, name, productType, price, rating, image, description}
}) 
    {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography className={classes.action} variant='h5' color='textSecondary'>
            {accounting.formatMoney(price, "S/")}
          </Typography>
        }
        title={name}
        subheader="in stock"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      
      <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.cardRating}>
        {Array(rating).fill().map((_,i)=>(
          <p>&#11088;</p>
        ))}
        </div>
        <IconButton>
        <DeleteIcon fontSize='large'/>
        </IconButton>
      </CardActions>
    </Card>
  );
}