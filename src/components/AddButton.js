import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    borderRadius:'50%',
    padding:20,
    '&:hover': {
      backgroundColor: deepOrange[700],
    },
  },
}))(Button);

const AddButton  = () => {
  return (
    <ColorButton>
      <AddIcon fontSize="large"/>
    </ColorButton>
  );
}

export default AddButton
