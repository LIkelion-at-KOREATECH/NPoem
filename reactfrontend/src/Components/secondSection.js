import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';


export default {
   // test(ID){return(ID+"야")},
    showSecondSec(userID) {
        return (
            <div className="login-sec">
                <div className="row justify-content-md-center">
                    <h2 className="text-center">삼행시를 하는, {this.state.userID}</h2>
                </div>
                <br></br>
                <div className="row justify-content-md-center">
                    {<Button className="button-type" variant="outlined" onClick={(event) => this.handlingTimer()} >시작하기</Button>}

                </div>
                <hr />
                <div className="row justify-content-md-center">

                    <span>타이머</span>
                </div>
                <hr />
                <div className="row justify-content-md-center">

                    <span>제시어</span>
                </div>
                <div className="row justify-content-md-center">

                <Card className={'card'} id="card-width">
                    <CardContent >
                        <TextField
                            id="outlined-name"
                            label="content"
                            //value={this.state.content}
                            //onChange={this.handlingChange}
                            name="content"
                            margin="normal"
                            variant="outlined"
                            multiline
                            rows="4"
                        />

                    </CardContent>
                    <CardActions>
                        <Button color="secondary" size="small" onClick={(event) => this.handlingSubmit()} >제출하기</Button>
                    </CardActions>
                </Card>
                </div>
            </div>

        )
    },
    handlingTimer() {
        return (
            <div>
                {console.log("timer")}
            </div>

        )
    }
}

