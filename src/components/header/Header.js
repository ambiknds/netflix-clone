import './Header.css';

export default function Header() {
  return (
    <header>
      <div className='header_inner_shadow'></div>
      <div className='header_content'>
        <div className='header_billboard'>
          <img src='https://cdn-icons-png.flaticon.com/512/2172/2172943.png' alt='billboard'/>
        </div>
        <h4 className='header_desc'>
        A freelance computer hacker discovers a mysterious government computer program. He breaks into the program and is thrust into a revolution.
        </h4>
        <div className='header_buttons'>
          <button className='header_button play_button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>
            Play
          </button>
          <button className='header_button more_info_button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
            More Info
          </button>
        </div>
      </div>
    </header>
  )
}
