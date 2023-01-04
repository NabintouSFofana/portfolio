import React from 'react';
import {BsGithub, BsLinkedin } from 'react-icons/bs';
//import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href="https://www.linkedin.com/in/nabintousfofana/"><BsLinkedin /></a>
        </div>
        
        <div>
            <a href="https://github.com/NabintouSFofana"><BsGithub /></a>
        </div>
    </div>
);

export default SocialMedia;