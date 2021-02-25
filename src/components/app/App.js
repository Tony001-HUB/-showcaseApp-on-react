import React,{Component} from 'react';
import Header from '../header/Header.js'
import Footer from '../footer/footer'
import Shop from '../shop/Shop'

export default class App extends Component {
    
render() {
  return (
    <div>
        <Header/>
          <Shop/>
        <Footer/>
    </div>
  );
}
}