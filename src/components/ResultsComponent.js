import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { green, red } from '@mui/material/colors';

export default function ResultsComponent({list}) {
    var icon = (l) => {
        console.log(l.operation === l.result);
        if(l.operation === l.result)
            return <CheckCircleIcon sx={{ color: green[500], paddingRight: '20px'}}/>
        else
            return <CancelIcon sx={{ color: red[500], paddingRight: '20px'}}/>
    }
  return (
    <div style={{height: '400px', overflowY: 'auto'}}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {
            list.map( l => (
                <ListItem>
                    {icon(l)}
                    <ListItemText primary={l.operation} secondary={l.result}/>
                </ListItem>)
            )
        }
        </List>
    </div>
  )
}
