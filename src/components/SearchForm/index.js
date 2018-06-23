import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { SEARCH_FROM_HEADING_TEXT } from '../../constants'

const styles = {
  searchForm: {
    marginTop: 50,
  },

  formWrapper: {
    display: 'flex',
    marginTop: 30,
  },

  headingText: {
    fontWeight: 300,
    letterSpacing: 1,
    color: '#fff',
  },

  textFieldLabel: {
    color: '#fff',
  },

  textFieldLarge: {
    width: 100,
    marginRight: 80,
  },

  textFieldSmall: {
    width: 80,
  },

  cssUnderline: {
    '&:before': {
      borderBottomColor: '#fff',
    },
    '&:after': {
      borderBottomColor: '#fff',
    },
  },

  cssLabel: {
    color: '#fff',
    '&$cssFocused': {
      color: '#fff',
    },
  },

  cssFocused: {},

  button: {
    marginTop: 50,
    background: 'linear-gradient(135deg,#fd853a 0%,#fd6e37 100%)',
    color: '#fff',
    letterSpacing: 1,
    boxShadow: 'none',
  },
};

class SearchForm extends Component {

  state = {
    language: '',
    stars: ''
  }

  handleInputChange = name => event =>{
    this.setState({

      [name]: event.target.value
    })

  }

  render() {
    const { classes } = this.props;
    const { language, stars } = this.state;
    return (
      <section>

        <Typography className={classes.searchForm}>
          {SEARCH_FROM_HEADING_TEXT}

        </Typography>
        <section className={classes.formWrapper}>
        <TextField
            id="language"
            label="Language"
            value={language}
            className={classes.textFieldLarge}
            onChange={this.handleInputChange('language')}
            // onChange ={event => this.handleInputChange(event)}
            InputLabelProps={{
              FormLabelClasses: {
                root: classes.cssLabel,
                focused: classes.cssFocused
              }
            }}
            InputProps={{
              classes: {
                root: classes.textFieldLabel,
                underline: classes.cssUnderline
              }
            }}
          />

          {/* stars textfield */}

             <TextField
            id="stars"
            label="stars"
            value={stars}
            className={classes.textFieldSmall}
            onChange={this.handleInputChange('stars')}
            // onChange ={event => this.handleInputChange(event)}
            InputLabelProps={{
              FormLabelClasses: {
                root: classes.cssLabel,
                focused: classes.cssFocused
              }
            }}
            InputProps={{
              classes: {
                root: classes.textFieldLabel,
                underline: classes.cssUnderline
              }
            }}
          />


        </section>
        
      </section>
    );
  }
}

export default withStyles(styles)(SearchForm);