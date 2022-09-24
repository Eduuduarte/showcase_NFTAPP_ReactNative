import React from 'react';

import styles from '../styles/Global';
import '../index.css';

const Button = ({ assetUrl, link }) => {
  return (
    <div 
      className={`${styles.btnBlack}`}
      onClick={() => window.open(link, "_blank")}
    >
      <img src={assetUrl} alt="expo_icon" className={`${styles.btnIcon} w-48 h-48`} />
      <div className="flex flex-col ml-4">
        <p className={`${styles.btnText} font-normal text-xs`}>Visualize</p>
        <p className={`${styles.btnText} font-bold text-sm`}>Expo Store</p>
      </div>
    </div>
  )
}

export default Button