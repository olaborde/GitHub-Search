import React, { Component } from 'react';
import axios from 'axios'
import ResultsGrid from './ResultsGrid'
import {buildSearchURI} from '../../utils';
class searchResults extends Component{
  state = {
    repos: []

  }
// when prop or state change it will reload
componentDidUpdate = async (prevProps, prevState) => {
  const {language, stars, searchInProgress} = this.props;

  if(prevState.repos !== this.state.repos){
    this.props.resetSearch();

    return;
  }

  // a search in progress
  // if
  if (searchInProgress) {
    //We want to build the URI to send out
    const encodedURI = buildSearchURI({ language, stars});
    // valid response from the API
    const githubResponse = await axios.get(encodedURI);
    // parse something
    const repos = githubResponse.data.items.slice(0, 15);
    // set the state of this cmponent to populate 'repos'

    // console.log(repos);
    this.setState({ repos });
  }


}

  render(){
    return (

    <div>

     <ResultsGrid repos={this.state.repos} />
    </div>
    );
  }
}


export default searchResults;