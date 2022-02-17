import React from 'react';

const ImageCarousel = (props) => {
  // console.log({'ImgCarousel Styles Prop': props.productStyles});
  let allImages = null;
  let productId = null;
  if (props.productStyles) {
    allImages = props.productStyles.results;
    productId = props.productStyles.product_id;
  }


  // console.log({'Styles stylesProp': props.productStyles});
  return (
    // <div>
    //   {allImages && allImages[0].photos.map((eachImg) => {
    //     return <img className="productStyles" src={eachImg.url} />}
    //   )}
    // </div>
    <div>images</div>
  );
}

export default ImageCarousel;