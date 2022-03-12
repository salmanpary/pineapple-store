import React from 'react'
import './products.css'
// import Product from './Product'
import Image from 'react-bootstrap/Image'

const Products = () => {
  return (
      <div className="products">
          <div className="heading1">
          Unique products? Yup. It's on the leash

        </div>
        <div className="desc">
        It has premium products. It has a good price. Free delivery, always. We connect you to small producers and <br />
        suppliers of the best markets and restaurants. That's why, with Trela, the main course is always a good <br />
        one. 😋
            </div>
            <div className="all">
            <div className="product">
               <Image src="https://www.trela.com.br/_next/image?url=https%3A%2F%2Fprod-zapt-images.s3.sa-east-1.amazonaws.com%2Fhortifruti_a5273a2683.png&w=1920&q=75" rounded height="280px" width="284px"></Image>
                <div className="image"></div>
                <div className="desci">
                    flower
                    </div>
                </div>
                <div className="product">
               <Image src="https://www.trela.com.br/_next/image?url=https%3A%2F%2Fprod-zapt-images.s3.sa-east-1.amazonaws.com%2Fhortifruti_a5273a2683.png&w=1920&q=75" rounded height="280px" width="284px"></Image>
                <div className="image"></div>
                <div className="desci">
                    flower
                    </div>
                </div>
                <div className="product">
               <Image src="https://www.trela.com.br/_next/image?url=https%3A%2F%2Fprod-zapt-images.s3.sa-east-1.amazonaws.com%2Fhortifruti_a5273a2683.png&w=1920&q=75" rounded height="280px" width="284px"></Image>
                <div className="image"></div>
                <div className="desci">
                    flower
                    </div>
                </div>
                <div className="product">
               <Image src="https://www.trela.com.br/_next/image?url=https%3A%2F%2Fprod-zapt-images.s3.sa-east-1.amazonaws.com%2Fhortifruti_a5273a2683.png&w=1920&q=75" rounded height="280px" width="284px"></Image>
                <div className="image"></div>
                <div className="desci">
                    flower
                    </div>
                </div>
                
                </div>
            
          </div>
    
  )
}
export default Products;
