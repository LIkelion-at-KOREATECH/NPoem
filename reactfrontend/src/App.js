import React from 'react';
import './App.css';
import api from './api';
import loadingView from './Components/loadingView';
import secondSection from './Components/secondSection';

import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userID: '',
      word: '',
      content: '',
      clicked: true,
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
    event.preventDefault()
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
      this.setState({ clicked: false })
      return false
    }
    else {
      setTimeout(() => ((this.setState({ clicked: true }), console.log(this.state.clicked)), this.getrandomID()), 3000)
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

  
  
  render() {
    return (
      <div className="App">
        <section className="login-block">
          <div className="container"> {/*요기서부터*/}
            <div className="row">
              <div className="login-sec">
                <h2 className="text-center">랜덤 아이디 배정</h2>  {/*요기까지가 틀*/}
                 <form className="RandomID" onSubmit={this.handlingSubmit}>
                  <div className="gettingID">
                    { //클릭하면 버튼 사라지고 로딩뜨는 형식
                      this.state.clicked
                        ? <Button variant="outlined" onClick={(event) => this.handlingloading()} >T R Y !</Button>
                        : this.handlingloading()
                    }
                  </div>
                  <div className="gettingID">
                    <span>{this.state.userID}</span><br></br>
                  <Button type="submit" variant="outlined"  href="#second">게임하기</Button>
                  </div>
                </form>
              </div></div></div>
              {/* 띄어쓰기 느낌으로다가 해놓은거 */}
              <div className="container secondsec" id="second">
                  <div className="row"> {secondSection.showSecondSec(this.state.userID) }</div>
              </div>
              


              </section>
      </div>
    );
  }

}

export default App;
