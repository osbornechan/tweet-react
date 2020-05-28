import React from 'react';

class UrlEntity extends React.Component {
    render() {

        const allUrlEntities = this.props.tweet.map(tweet => {
            console.log('tweet:', tweet)
            return (
                <div class='row justify-content-between d-flex'>
                    <p><i class='fa fa-comment'></i> {tweet.user.statuses_count}</p>
                    <p><i class='fa fa-retweet'></i> {tweet.retweet_count}</p>
                    <p><i class='fa fa-heart'></i> {tweet.favorite_count}</p>
                    <i class='fa fa-upload'></i>
                </div>
            )
        })

        return(
            <div>
                {allUrlEntities}
            </div>
        )
    }
}

export default UrlEntity