import React from 'react';
import featureimage from '../images/Frame 19.png';

function Features() {
    return (
        <div id='features'>
            <div className='features-model'>
                <img src={featureimage} alt='feature-image'/>
            </div>
            <div className='features-text'>
                <h2>Features</h2>
                <h3>This Application <span>Software</span> is Art</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Soluta sed hic vero nobis earum! Quisquam dolores voluptatum voluptatibus, 
                     corporis sapiente dignissimos beatae ea enim nulla sed quod,
                     earum eligendi nisi voluptate pariatur deleniti odit 
                     error porro nemo voluptates atque! Molestias!
                </p>
                <button>View More Features</button>
            </div>
        </div>
    )
}

export default Features;
