import React from 'react';
import './App.css';
import api from './api';
import loadingView from './Components/loadingView';
import secondSection from './Components/secondSection';

import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userID: '',
      word: "제시어",
      content: '',
      clicked: true,
      disable: false,
      minute: '00',
      second: '00',
      detaildisable: false,
    }
  }
  async getPosts() {
    const theresult = await api.getAllPosts()
    this.setState({ results: theresult.data })
    console.log(theresult)
  }

  //이게 try를 눌러서 맘에드는 별명 나올때까지 누를 수 있다는 요구 가정하에 만든 건데
  //만약 위 요구가 맞다면 별명을 선택하기 전까지 모든 ID를 게시물 저장되듯 되면 안되니까
  //마지막에 submit한것만 create해줬어영

  handlingSubmit = async (event) => {
    this.setState({ disable: true })
    let result = await api.createID({ userID: this.state.userID })
    this.getPosts()
  }
  handlingChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }


  getrandomID() {
    this.setState({ userID: "꽤 높은 키" })
    console.log(this.state.userID)

  }


  //함수 여러개쓰기 귀찮아서 쓴건데 읽기 어려우면 두개로 나눠도됨. 근데 만든게 더 귀찮았던것 같기도하고 에효 뻘짓햇네 뻘짓햇어

  handlingloading = () => {
    console.log("buttonclick")
    if (this.state.clicked === true) {
      this.setState({ clicked: false, disable: true })
      return false
    }
    else {
      setTimeout(() => ((this.setState({ clicked: true, disable: false }), console.log(this.state.clicked)), this.getrandomID()), 3000)
      //3초 지나고 나서 한번만 state변환시켜야함 
      //setTimeout함수 아닌곳에서 하면 클럭수만큼 반복되는 멋진 현상일어남.

      console.log("work")
      //빙글빙글돌아가는 모습은 view이기 때문에 return에서 view보여줌.
      //return 안해도 뷰 보여주는 방법있으면 알려줘요..흐앙
      return (
        <div>
          {loadingView.showloading()}
        </div>
      )
    }

  }

  handlingstart = () => {
    this.setState({ disabled: true })
    this.handlingTimer()
  }
  handlingTimer() {

  }
  finalSubmit() {
    this.setState({ detaildisable: true })

  }

  handlingShowdetail() {

    return (
      <div className="login-sec">
        <div className="row justify-content-md-center">
          <h2 className="text-center">{this.state.userID+"의 삼행시"}</h2>
        </div>
        <div className="row justify-content-md-center">
          <h3 className="text-center endfont">{"' "+this.state.word +" '"}</h3>
        </div>
        <div className="row justify-content-md-center ">
        {this.state.content}
        </div>
        <br></br>
      </div>
    )

  }
  render() {
    return (
      <div className="App">
        <section className="login-block">
          <div className="container"> {/*요기서부터*/}
            <div className="row">
              <div className="login-sec">
                <h2 className="text-center">랜덤 아이디 배정</h2>  {/*요기까지가 틀*/}

                <div className="gettingID">
                  {
                    this.state.clicked
                      ? <Button variant="outlined" id="trybtn" disabled={this.state.disable} onClick={(event) => this.handlingloading()} >T R Y !</Button>
                      : this.handlingloading()
                  }
                </div>
                <div className="gettingID">
                  <span>{this.state.userID}</span><br></br>
                  <Button type="submit" variant="outlined" href="#second" disabled={this.state.disable} onClick={(event) => this.handlingSubmit()}>게임하기</Button>
                </div>

              </div></div></div>
          {/******************************/}
          <div className="container secondsec" id="second">
            <div className="row">
              <div className="login-sec">
                <div className="row justify-content-md-center">
                  <h2 className="text-center">삼행시를 하는, {this.state.userID}</h2>
                </div>
                <br></br>
                <div className="row justify-content-md-center">
                  {<Button className="button-type" variant="outlined" href="#startlink" 
                  disabled={!(this.state.disable && this.state.clicked)}
                  onClick={(event) => this.handlingstart()} >시작하기</Button>}
                </div>
                <hr /> <hr />
                <div className="row justify-content-md-center" id="startlink" >
                  <span>타이머</span> </div> <br></br>
                <div className="row justify-content-md-center">
                  <div className="text-center timer-div">{this.state.minute + ":" + this.state.second}</div>
                </div><br></br>
                <hr />
                <div className="row justify-content-md-center">
                  <span>{"'" + this.state.word + "'"}</span>
                </div>
                <div className="row justify-content-md-center">

                  <Card className={'card'} id="card-width">
                    <CardContent >
                      <TextField
                        id="outlined-full-width"
                        label="content"
                        //value={this.state.content}
                        //onChange={this.handlingChange}
                        name="content"
                        margin="normal"
                        variant="outlined"
                        multiline
                        fullWidth
                        rows="4"
                      />

                    </CardContent>
                    <CardActions>
                      <Button color="secondary" size="large" href="#showdetail" onClick={(event) => this.finalSubmit()}>제출하기</Button>
                    </CardActions>
                  </Card>
                </div>
              </div>
            </div>
          </div>


          <div className="container secondsec" id="showdetail">
            <div className="row">
              {
                this.state.detaildisable && this.handlingShowdetail()

              }
            </div>
          </div>

        </section>
      </div>
    );
  }

}

export default App;
