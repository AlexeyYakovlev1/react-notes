import React from 'react';

interface IImage {
  src: string
}

const Image: React.FC<IImage> = ({src}) => {
  return (
    <div className="image">
      <div className="image__photo" style={{backgroundImage: `url(${src})`}}></div>
    </div>
  )
}

export default Image;
