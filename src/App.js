
import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Punklist from './components/Punklist';
import Main from './components/Main';

function App() {
 const [punkListData, setPunkListData] = useState([]);
 const [selectedPunk, setSelectedPunk] = useState(0);
 useEffect(()=>{
    const getMyNfts = async ()=>{
      const openSeaData  = await axios.get('https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x4E4Dd7E890C088dC6e1A653c7761aFc756f86565')
      setPunkListData(openSeaData.data.assets)
    }
    return getMyNfts()
 },[]);

  return (
    <div className ="app">
         <Header/>
         {/* <CollectionCard id ={0} name={'cyber celesital'} traits={[{'value': 7}]}
         image='https://lh3.googleusercontent.com/khhnfp0Z_o83TEUzZ1Inh6PfQgFca2Skbx2bLCaW5IM-xqC8EPFg5aDUEqJCjLwEujz-48EYJ-AcrhF8FNiM4It31_fqh_mwMxRKCEc=w600'/> */}
         <Main
         punkListData={punkListData}
         selectedPunk={selectedPunk}
         />
         <Punklist 
         punkListData ={punkListData}
         setSelectedPunk ={setSelectedPunk}
         />
    </div>

    
   
  );
}

export default App;
