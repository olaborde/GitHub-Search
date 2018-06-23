import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

import SearchForm from './SearchForm'

const styles = {
  withGradient: {
    height: 360,
    background: 'linear-gradient(to bottom, #5a4ba3 0%, #7b3795 100%)',
  },

  contentWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 50,
    marginRight: 50,
  },
};

class App extends Component {
  render() {
    const { classes } = this.props;
    
    return (
      <main className={classes.makePrettyColor}>
        <CssBaseline />
        <section className={classes.withGradient}>
          <section className={classes.contentWrapper}>
          <SearchForm />
          </section>
        </section>
        I am ready to rock this training!
      </main>
    );
  }
}

export default withStyles(styles)(App);
// export default App;