import React from 'react';
import './homepage.styles.scss'

const Homepage = () => {
    return(
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Spring fragrances</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Summer fragrances</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Fall fragrances</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Winter fragrances</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;