import UrlInput from '@/component/UrlInput';
import React from 'react';

const MainFile = () => {
    return ( 
        <div className="body">
            <h1 className="heading">Tiny Url Maker</h1>
            <p className="heading-text">Make Your Big Url Short With Us.</p>

            <UrlInput />
        </div>
     );
}
 
export default MainFile;