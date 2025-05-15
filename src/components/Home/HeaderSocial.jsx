import React from 'react';
import "./home.css"

const HeaderSocial = () => {
  return (
    <div className="home__socials">
        <a href="https://www.linkedin.com/in/kanittha-somboon/?trk=opento_sprofile_topcard" className='home__social-link' target="_blank">
        <i class="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://github.com/tonkows" className='home__social-link' target="_blank">
        <i class="fa-brands fa-github"></i>
        </a>

        <a href="https://www.facebook.com/profile.php?id=100005871582155" className='home__social-link' target="_blank">
        <i class="fa-brands fa-facebook"></i>
        </a>

    </div>
  )
}

export default HeaderSocial