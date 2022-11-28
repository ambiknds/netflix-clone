import React from 'react'
import './Content.css'
import RowData from '../../constants/URLS'
import Row from '../row/Row'

export default function Content() {
    

    return (
        <div className='content-wrapper'>
            {RowData.map((el) => {
                return <Row title={el.title} url={el.url}/>
            }) }
        </div>
    )
}

//5a09156795d1d54241b7fb4062a1e800
//Install axios Api