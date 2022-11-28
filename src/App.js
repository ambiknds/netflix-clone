import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Content from './components/content/Content';
import axios from 'axios';

//To save time we write the axios code inside the app.js file
//so that we dont have to rewrite again and again
axios.defaults.baseURL= 'https://api.themoviedb.org/3'
axios.defaults.params = {
  api_key : "5a09156795d1d54241b7fb4062a1e800",
}
const App = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <Content/>
    </div>
  )
}

export default App;