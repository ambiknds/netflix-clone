import './Nav.css'
import { useState, useEffect } from 'react';

const Nav = () => {
    const [show, setShow] = useState();

    const scrollHandler = () => {
        if(window.scrollY > 10){
            setShow(true);
        }else{
            setShow(false)
        }
    }
    useEffect(() => {
        //To change Nav background
        window.addEventListener('scroll', scrollHandler);

        return () => {
            //execute before ui is remove from screen to improve performance
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])
    return (
        <nav style={{
            backgroundColor: show ? 'rgb(20,20,20)': 'transparent'
        }}>
            <section>
                <div className="nav_left">
                    <img
                        className="nav_logo"
                        alt="Logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
                    />
                    <div className="nav_links">
                        <a href="/">Home</a>
                        <a href="/">Tv Shows</a>
                        <a href="/">Tv Movies</a>
                        <a href="/">New & Popular</a>
                        <a href="/">My List</a>
                        <a href="/">Browse by language</a>
                    </div>
                </div>
                <div className="nav_right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    <p>Children</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                    </svg>
                    <img
                        className='nav_avatar'
                        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                        alt='avatar'
                    />
                    
                </div>
            </section>
        </nav>
    )
}

export default Nav;