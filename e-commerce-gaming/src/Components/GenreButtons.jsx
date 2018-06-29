import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

class GenreButtons extends React.Component {
    render() {
        return (
            <div>
                Sort By Genre Below:
                <List component="nav">
                    <Divider light />
                    <ListItem button>
                        <ListItemText primary="RPG" />
                    </ListItem>
                    <Divider />
                    <ListItem button divider>
                        <ListItemText primary="Shooter" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Sports" />
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <ListItemText primary="Strategy" />
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <ListItemText primary="Action-Adventure" />
                    </ListItem>
                    <Divider light />
                </List>
            </div>
        );
    }
}

export default GenreButtons;