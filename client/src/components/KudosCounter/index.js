import React from 'react'
import Typography from '@material-ui/core/Typography';

function KudosCounter(props) {
  
    return (
      <div style={{textAlign: "center"}}>
        <h3>Kudos</h3>
        <Typography className="kudosCounter" variant='display4'>{props.kudosCounter}</Typography>
      </div>
    )
  }
  

export default KudosCounter; 