import './App.css';
import { React, useState} from 'react';



function Dispaly(props){
  return(
    <div>
      <h1 className="App-header">{props.name}</h1>
      <img src={props.image} alt=""/>
      <div>{props.summary}</div>
      <h2>{props.time}</h2>
      <h2>{props.date}</h2>
    </div>
  )
}
function App(){
  const [dataHook, setData] = useState({name:'',  summary:'',  image:'',  time:'',  date:''});
  const getData = async() =>{
    const api = await fetch(`http://api.tvmaze.com/search/shows?q=Seinfeld`)
    const data = await api.json()
    const dateNeeded = data[0].show
    const newData={
      name:dateNeeded.name,
      summary:dateNeeded.summary,
      image:dateNeeded.image.original,
      time:dateNeeded.runtime,
      date:dateNeeded.premiered
    }
    setData({...newData})
  }
  getData();
  return(
    <Dispaly {...dataHook}/>
  )
}
/*
class App1 extends Component {
  state = {
    name:'',
    summary:'',
    image:'',
    time:'',
    date:''
  };
  getData = async() =>{
    const api = await fetch(`http://api.tvmaze.com/search/shows?q=Seinfeld`)
    const data = await api.json()
    const dateNeeded = data[0].show
    this.setState({
      name:dateNeeded.name,
      summary:dateNeeded.summary,
      image:dateNeeded.image.original,
      time:dateNeeded.runtime,
      date:dateNeeded.premiered
    })
  }

  render(){
    this.getData()
    return (
      <>
        <Dispaly {...this.state}/>
      </>
    );
  }    
}
*/
export default App;
