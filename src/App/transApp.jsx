import { useState } from 'react'
import './transApp.css'
import logo from '../logo.png'

function App() {
    return (
        <div className='ts_app'>  
            <header className='ts_app_header'>
                <img src={logo} className='ts_app_logo' alt='logo'/>
            </header>
        </div>
        
    )
}

export default App;
