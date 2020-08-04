import React from 'react';

class App extends React.Component{     // class component로 변경한 이유는 state를 사용하기 위해서.
  state = { // 바꿀 데이터를 넣는다.
    isLoading : true,
    movie : []
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading:false});
    }, 6000);
  }
  render(){ // class component는 render를 가지고 있지 않지만, React component는 render method를 가지고 있기 때문에 사용 가능하다. ->  html code를 보여주게 된다.
    const {isLoading} = this.state;
    return (
      <div>{isLoading? "Loading..." : "we are ready"}</div>
    );
  }
}


// Component Life Cycle
// mounting 컴포넌트 생성 : construnctor() -> render() -> componentDidMount() 
// updating 컴포넌트 수정 : setState() 호출되면 -> render() -> componentDidUpdate()
// unmounting 컴포넌트 제거 : componentWillUnmount()

export default App;
