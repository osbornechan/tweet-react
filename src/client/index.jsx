import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets';
import User from './User';
import Entities from './Entities';


class App extends React.Component {
  render() {

    const allTweets = tweets.tweets;

    return (
      <div class='container' style={{width:'70%'}}>
        <br/>
        <User screen_name={allTweets[0].user.screen_name} />
        <Entities allTweets={allTweets} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));