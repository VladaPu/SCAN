import React from 'react';
import './LoaderInfo.css';
import { RotatingLines } from  'react-loader-spinner'
const LoaderInfo = () => {
  return (
    <div className='loaderBox'>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="60"
        visible={true}
        />
    </div>
  )
}

export default LoaderInfo
