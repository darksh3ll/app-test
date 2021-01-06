import React from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// const ColorButton = withStyles((theme) => ({
//   root: {
//     color: theme.palette.getContrastText(deepOrange[500]),
//     backgroundColor: deepOrange[500],
//     '&:hover': {
//       backgroundColor: deepOrange[700],
//     },
//   },
// }))(Fab);

const AddButton  = ({onclick}) => {
  return (
    <Fab onClick={onclick} size="large" color="primary" >
      <AddIcon />
    </Fab>
  );
}

export default AddButton
