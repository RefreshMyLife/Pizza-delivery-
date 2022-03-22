import React from 'react'
import ContentLoader from "react-content-loader"


function LoadingBlock() {
  return (
    <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="246" rx="6" ry="6" width="260" height="30" /> 
    <rect x="0" y="290" rx="6" ry="6" width="260" height="88" /> 
    <rect x="134" y="394" rx="21" ry="21" width="129" height="46" /> 
    <rect x="0" y="402" rx="6" ry="6" width="92" height="29" /> 
    <circle cx="130" cy="120" r="120" />
  </ContentLoader>
  )
}

export default LoadingBlock