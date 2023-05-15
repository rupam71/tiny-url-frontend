import WebViewTypes from '@/type/WebViewType';
import * as React from 'react';
import packageInfo from './../../package.json'

interface FooterType {
    viewCount: WebViewTypes
}

const Footer = ({viewCount}:FooterType) => {
    return <div className='footer'>
        <p>Total Unique Viewer {viewCount.webUniqe}</p>
        <p>Total Visited {viewCount.webView} Times</p>
        <p>V-{packageInfo.version}</p>
    </div>
}
 
export default Footer;