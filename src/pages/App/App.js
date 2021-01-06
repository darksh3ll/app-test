import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AddButton from '../../components/AddButton'
import Typography from '@material-ui/core/Typography';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from '../../themes/base'
import logo from '../../assets/image-acceuil.svg'
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import useToogle from '../../hooks/useToogle'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:"#e8ecf1",
    minHeight:'100vh',
    filter: (props) => (props.toogle ? `blur(4px)`:null),
  },
  wrapper:{
    minHeight:"250px"
  },
  wrapper1:{
    display:"flex",
    flexDirection:'column',
    alignItems:'center',
    justifyContent:"space-around"
  },
  contentModal:{
    backgroundColor:'white',
    width:'60%',
    height:'60%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
}));

function App() {
  const [toogle,setToogle] = useToogle()
  const classes = useStyles({toogle});
  return (
    <ThemeProvider theme={theme}>
      <>
        <Modal
          style={{display:'flex',alignItems:'center',justifyContent:'center'}}
          open={toogle}
          onClose={setToogle}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Paper className={classes.contentModal}>
            <Typography align="center" variant="h1" >
              Hello
            </Typography>
          </Paper>

        </Modal>


      <div className={classes.root}>

        <Box p={5}>
          <Typography align="center" variant="h2" >
            Un coup de pouce ?
          </Typography>
        </Box>

       <Typography color="secondary" align="center" variant="subtitle1">
           Pour bien débuter sur Batisimply, commencer à ajouter vos utilisateurs, puis créer un chantier
        </Typography>

        <Box m={10} align="center">
          <img src={logo} alt="#"/>
        </Box>

        <Box m={10}>
          <Divider orientation="horizontal" variant="inset" />
        </Box>
         <Grid container className={classes.wrapper} spacing={5}>
           <Grid className={classes.wrapper1} item xs={12} sm={5}>
             <Children onclick={setToogle} title=" Créer vos utilisateurs"/>
           </Grid>

            <Grid item xs={12} sm={2} >
              <Divider orientation="vertical" variant="inset" />
            </Grid>

            <Grid className={classes.wrapper1}  item xs={12} sm={5} >
              <Children onclick={setToogle} title=" Créer un chantier"/>
            </Grid>
         </Grid>
      </div>
      </>

    </ThemeProvider>

  );
}

const Children = ({title,onclick}) => (
  <>
    <Typography align="center" color="secondary"  variant="h4" gutterBottom>
      {title}
    </Typography>
    <ArrowDownwardIcon color="secondary" fontSize="large"/>
    <AddButton onclick={onclick} />
  </>
)

export default App;
