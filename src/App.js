import Nav from './components/Nav';
import First from './components/First';
import Second from './components/Second';
import Buttons from './components/Buttons';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';
import Sixth from './components/Sixth';
import Seventh from './components/Seventh';
import Footer from './components/Footer';


function App() {
  return (
    <div>
        <Nav/>
        <div className="container">
          <div className='top'>
            <First id='first'/>
            <Second id='second'/>
            <Buttons color='#b90415' text = 'Start Your Trial Now'/>
            <Third id='third'/>
            <img className='image1' src={process.env.PUBLIC_URL+ "third.png"}/>
          </div>
        </div>
          <div className='middle'>
            <div className='center'>
              <Fourth id='fourth'/>
              <Buttons color='#103063' text='Read More'/>
              <img className='image1' src={process.env.PUBLIC_URL+ "fourth.png"}/>
            </div>
          </div>
        <div className='container'>
          <div className='top'>
            <Fifth className="fifth" id='fifth'/>
          </div> 
        </div>
          <div className='white'>
            <div className='center'>
              <img className='image1' src={process.env.PUBLIC_URL+ "fifth.png"}/>
              <Sixth id='sixth'/>
            </div>
          </div>
          <div className='container'>
            <Seventh/>
          </div>
            <Footer/>
    </div>
  );
}

export default App;
