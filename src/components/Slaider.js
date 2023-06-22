import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import useResizeObserver from "use-resize-observer";

import img1 from '../assets/abstract-sunglasses-colored-lenses-discount-banner-sale-modern-design-fashion-trendy-154986353.jpg'
import img2 from '../assets/beautiful-web-banner-summer-sale-top-view-seashells-fresh-cocktail-sun-glasses-smartphone-sea-sand-wooden-texture-87772184.jpg'
import img3 from '../assets/da3ee0e00935c2312d66aa98f912b1eb.jpg'
import img4 from '../assets/eyeglasses-banner-concept-palm-leaves-260nw-1335921272.webp'
import img5 from '../assets/hello-summer-sale-banner-design-with-tropical-leaves-beach-sunglasses-accessories_68196-4987 (1).avif'
import img6 from '../assets/summer-sale-design-wave-background-260nw-1740939296.webp'
import img7 from '../assets/abstract-sunglasses-colored-lenses-discount-banner-sale-modern-design-fashion-trendy-154986353.jpg'




const images = [
    { url: `${img1}` },
    { url: `${img2}` },
    { url: `${img3}` },
    { url: `${img4}` },
    { url: `${img5}` },
    { url: `${img6}` },
    { url: `${img7}` },
  ];

export default function Slaider() {
    const { ref, width = 1, height = 1 } = useResizeObserver();
  return (
    <div ref={ref} className='Slaider'>
      <SimpleImageSlider
        width={width}
        height={height}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={2.0}
      />
    </div>
  )
}
