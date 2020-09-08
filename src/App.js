import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    background: 'blue',
    margin: 0,
    padding: 0,
  }
  }))


function App(){
  const classes = useStyles()

  return(
    <div className={classes.root}>
        pre
    </div>
  )
}
export default App
