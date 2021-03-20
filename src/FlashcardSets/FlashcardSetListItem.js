import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';

class FlashcardSetListItem extends React.Component {

//   flashcardSetListItem = ({flashcardSet}) => {
//     //debugger
//     return <li className='' key={flashcardSet.id}> {flashcardSet.title} </li>
    
// }

deleteFlashcardSet = (id) => {
    console.log("delete", id)
}

render(){
//debugger
    const {classes} = this.props
    return(
        <div>
            <ListItem
                className={classes.listItem}
                selected = ''
                alignItems='flex-start'>
                
                <div
                className={classes.textSection}
                onClick={() => this.selectFlashcard}>
                    <ListItemText
                        primary={this.props.flashcardSet.title}
                        secondary={this.props.flashcardSet.title}
                    ></ListItemText>
                </div>

                <DeleteIcon 
                    onClick={() => this.deleteFlashcardSet(this.props.flashcardSet.id)}
                    className={classes.deleteIcon}>
                </DeleteIcon>

            </ListItem>
        </div>

    )
}




}

export default withStyles(styles)(FlashcardSetListItem)