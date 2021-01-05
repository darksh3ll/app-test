import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddButton from '../../components/AddButton'
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import logo from '../../assets/logo.png'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:grey[300],
    minHeight:'100vh',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (

    <div className={classes.root}>

      <Typography align="center" variant="h5" gutterBottom>
        Un coup de pouce ?
      </Typography>

      <Typography align="center" variant="subtitle1" gutterBottom>
        Pour bien débuter sur Batisimply, commencer à ajouter vos utilisateurs, puis créer un chantier
      </Typography>

      <img src={logo} width="300" height="auto" alt=""/>

      <Typography  variant="h6" gutterBottom>
        Créer vos utilisateurs
      </Typography>
        <ArrowDownwardIcon fontSize="large"/>
      <AddButton />

      <Typography  variant="h6" gutterBottom>
        Créer un chantier
      </Typography>
      <ArrowDownwardIcon fontSize="large"/>
      <AddButton/>
    </div>

  );
}

export default App;
