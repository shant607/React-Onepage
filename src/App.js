import React from 'react'; 
import Header from '../src/Components/Header';
import Features from '../src/Components/Features';
import Services from '../src/Components/Services';
import Subscribe from '../src/Components/Subscribe';

function App() {
  return (
    <div className="App">
     <Header/>
     <div className='f-heading'>
       <h1>Features</h1>
       <p>Here are some features of the Software</p>
     </div>
     <Features/>
     <Services/>
     <Subscribe/>
    </div>
  );
}

export default App;
