import React from 'react';
import UrlEntity from './UrlEntity';

class Entities extends React.Component {
    render() {

        const allEntities = this.props.allTweets.map(tweet => {
            return (
                <div class='row' style={{borderTop:'1px solid gainsboro', padding: '10px'}}>
                    <div class='col-2'>
                        <img src={tweet.user.profile_image_url} class='rounded-circle' style={{height: '80%'}}/>
                    </div>
                    <div class='col-9'>
                        <div class='row justify-content-between'>
                            <div class='d-flex'>
                                <p class='text-uppercase font-weight-bold'>{tweet.user.screen_name} <i class="fa fa-check-circle"></i></p> &nbsp;
                                <p class='text-secondary'>@{tweet.user.screen_name} · {tweet.created_at}</p>
                            </div>
                            <i class='fa fa-angle-down'></i>
                        </div>
                        <div class='row'>
                            <p>{tweet.text}</p>
                        </div>
                        <UrlEntity tweet={[tweet]} />
                    </div>
                </div>
            )
        })

        return (
            <div>
                {allEntities}
            </div>
        )
    }
}

export default Entities