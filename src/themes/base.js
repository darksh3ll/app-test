import {createMuiTheme} from '@material-ui/core/styles'
import { deepOrange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette:{
    primary:{
      main:deepOrange[500]
    },
    secondary:{
      main:"#243b55"
    },
  },
  typography: {
    subtitle1: {
    },
    h2:{
      fontWeight:'bold',
      color:'#243b55'
    }
  },

});


export default theme
