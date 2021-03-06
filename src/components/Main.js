import React, { useState } from 'react'
import twitter from '../assets/twitter.png';
import moreIcon from '../assets/moreIcon.png';

import './Main.css'
const Main = ({selectedPunk, punkListData}) => {
    const[activePunk, setActivePunk] = useState(punkListData[0]);

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk]);

    }, [punkListData, selectedPunk]);
    return (
        <div className='main'>
            <div className="mainContent">
                <div className="punkHighlight">'
                    <div className="punkContainer">
                        <img className='selectedPunk' src={activePunk.image_original_url} alt="" />
                    </div>
                </div>


                <div className="punkDetails" style={{color: '#fff'}}>
                    <div className="title">
                            {activePunk.name}
                    </div>
                    <span className="itemNumber">.#3</span>
                </div>

                <div className="owner">
                    <div className="ownerImageContainer">
                        <img src="" alt="" />
                    </div>
                </div>

                <div className="ownerDetails">
                    <div className="ownerNameAndHandle">
                        <div>#addresshex</div>
                        <div className="ownerHandle">@sedgewick</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Main
