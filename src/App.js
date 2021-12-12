
import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';

function App() {
  return (
    <div className ="app">
         <Header/>
         <CollectionCard id ={0} name={'cyber celesital'} traits={[{'value': 7}]}
         image='https://lh3.googleusercontent.com/khhnfp0Z_o83TEUzZ1Inh6PfQgFca2Skbx2bLCaW5IM-xqC8EPFg5aDUEqJCjLwEujz-48EYJ-AcrhF8FNiM4It31_fqh_mwMxRKCEc=w600'/>
    </div>
   
  );
}

export default App;
