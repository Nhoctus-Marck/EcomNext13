'use client'
import React from 'react'
import StarRatings from "react-star-ratings";
import "./productcss.css";
import ReactImageMagnify from 'react-image-magnify';
import { useRef } from 'react';

const ProductsDetails = ({product}) => {

  const imgRef = useRef(null)

  const setImgPreview = (url) =>{
    imgRef.current.src = url
  }

  const inStock = product?.stock >= 1
  // console.log(product.images[0].url);
  const watchImg300 = product.images[0].url;
  return (
    <>
    
    {/* <BreadCrumbs /> */}
    <section className="bg-white py-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
          <aside>
            <div className="border border-gray-200 shadow-sm p-3 text-center rounded mb-5">
              <div className='ImageMagnify text-center rounded mb-5 object-cover inline-block'>
              {/* <ReactImageMagnify ref={imgRef} {...{
              smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  src: watchImg300,
                  width:200,
                  height: 100,
              },
              largeImage: {
                  src: watchImg300,
                  width: 1200,
                  height: 1800,
              }
          }} /> */}
              </div>
              <img  ref={imgRef}     
                className="object-cover inline-block zoomImg"
                style={{
                  width: "100%",
                  position: "relative",
                  aspectRatio:"3/2",
                  objectFit:"contain",
                }}
                src= {watchImg300}
                alt="Product title"
                width="340"
                height="340"
              />
            </div>
            <div className="space-x-2 overflow-auto text-center whitespace-nowrap">
              {product?.images?.map(img => (
                <a className="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500 cursor-pointer"
                onClick={() => setImgPreview(img?.url)}>
                <img
                  className="w-14 h-14"
                  src={img.url}
                  alt="Product title"
                  width="500"
                  height="500"
                />
              </a>
              ))}      
            </div>
          </aside>
          <main>
            <h2 className="font-semibold text-2xl mb-4">{product?.name}</h2>

            <div className="flex flex-wrap items-center space-x-2 mb-2">
              <div className="ratings">
                <StarRatings
                  rating={product?.ratings}
                  starRatedColor="#ffb829"
                  numberOfStars={5}
                  starDimension="20px"
                  starSpacing="2px"
                  name="rating"
                />
              </div>
              <span className="text-yellow-500">{product?.ratings}</span>

              <svg
                width="6px"
                height="6px"
                viewBox="0 0 6 6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
              </svg>

              <span className="text-green-500">Verified</span>
            </div>

            <p className="mb-4 font-semibold text-xl">${product?.price}</p>

            <p className="mb-4 text-gray-500">
            {product?.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              <button className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                <i className="fa fa-shopping-cart mr-2"></i>
                Add to cart
              </button>
            </div>

            <ul className="mb-5">
              <li className="mb-1">
                {" "}
                <b className="font-medium w-36 inline-block">Stock</b>
                {inStock ? (
                  <b className="font-medium w-36 inline-block text-green-500">In Stock</b>
                ): (<b className="font-medium w-36 inline-block text-red-500">Out of Stock</b>)}
              </li>
              <li className="mb-1">
                {" "}
                <b className="font-medium w-36 inline-block">Category:</b>
                <span className="text-gray-500">{product?.category}</span>
              </li>
              <li className="mb-1">
                {" "}
                <b className="font-medium w-36 inline-block">
                  Seller / Brand:
                </b>
                <span className="text-gray-500">{product?.seller}</span>
              </li>
            </ul>
          </main>
        </div>

        {/* <NewReview /> */}
        <hr />

        <div className="font-semibold">
          <h1 className="text-gray-500 review-title mb-6 mt-10 text-2xl">
            Other Customers Reviews
          </h1>
          {/* <Reviews /> */}
        </div>
      </div>
    </section>
  </>
  )
}

export default ProductsDetails