// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
function Logo({ width = '100px' }) {
  return (
    <div>
      {/* <FontAwesomeIcon height='250px' width={width} icon={faBlog} /> */}
      <FontAwesomeIcon 
        icon={faBlog} 
        style={{ height: '50px', width: width }} 
      />
    </div>
  );
}
export default Logo;
