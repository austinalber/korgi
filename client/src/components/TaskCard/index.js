import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { yellow } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PetsIcon from '@material-ui/icons/Pets';
import Likes from '../Likes'; 


// styling
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 325
  },
  media: {
    height: 325,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: yellow[800]
  }
}));
// end of styling 

// logic 
function TaskCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

// end of logic 


// display 

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        taskTitle="Paella dish"
      />
      <CardContent />
      <CardActions disableSpacing>
        <IconButton className="taskLikes" aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton className="taskLocation" aria-label="share">
          <ShareIcon />
        </IconButton>
        <PetsIcon
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </PetsIcon>
        <Likes />
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardHeader
          avatar={
            <Avatar aria-label="userImage" className={classes.avatar}>
              K
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
            </IconButton>
          }
          title="Task of the Week"
          subheader="September 14, 2016" 
        />
        <CardContent>
          <Typography className="taskNotes" variant="body2" color="textSecondary" component="p">
            I heart sriracha!
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default TaskCard; 

// need to convert to css
// pass props with task and user model 
