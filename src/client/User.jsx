import React from 'react';

class User extends React.Component {
    render() {

        return(
            <div>
                <div class='row' style={{borderBottom:'1px solid grey', padding:'10px'}}>
                    <div class='col-1'>
                        <i class="fa fa-arrow-left"></i>
                    </div>
                    <div class='col-11'>
                        <h4 class='text-uppercase'>{this.props.screen_name} <i class="fa fa-check-circle"></i></h4>
                    </div>
                </div>
                <div class='row justify-content-center font-weight-bold text-center text-secondary'>
                    <div class='col-3' style={{padding: '10px'}}>Tweets</div>
                    <div class='col-3' style={{padding: '10px'}}>Tweets & replies</div>
                    <div class='col-3' style={{padding: '10px'}}>Media</div>
                    <div class='col-3' style={{padding: '10px'}}>Likes</div>
                </div>
            </div>
        )
    }
}

export default User