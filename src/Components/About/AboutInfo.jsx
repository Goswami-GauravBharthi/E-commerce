import { NavLink } from "react-router-dom"
import "./../../Pages/css/about.css"

export const AboutInfo=()=>{
  return <div className="about-section">
  <div className="container about-div grid md:grid-cols-2 grid-cols-1">
    <div className="order-2 about-info">
      <h2>
        Fast & <span>Reliable</span> Shipping
      </h2>
      <p>
        We are more than just an e-commerce store; we are a community of
        like-minded individuals who value quality, style, and innovation.
        Thank you for choosing{" "}
        <span className="special"> Gaurav Store</span>. We look forward to
        serving you and being a part of your journey.
      </p>
      <ul>
        <h2>Why Choose Us?</h2>
        <li>
          <h3>Quality Assurance:</h3> Every product meets our high
          standards of quality and durability.
        </li>
        <li>
          <h3> Customer-Centric Approach:</h3> Your satisfaction is our
          priority, with dedicated support always available.
        </li>
        <li>
          <h3> Secure Shopping:</h3> Your data is safe with our advanced
          encryption technology.
        </li>
      </ul>
    </div>
    <div className="order-1 flex items-center justify-center">
      <img src="/images/about-2.svg" alt="" className="w-full " />
    </div>
  </div>

  {/* second div */}
  <div className="container grid md:grid-cols-2 grid-cols-1 ">
    <div className="order-2 md:order-1 about-info flex flex-col items-start justify-center ">
      <h2 className="">
        Easy <span>Shopping</span> Experience
      </h2>
      <p>
        Enjoy easy shopping with Gaurav Store! We offer top-quality
        products, fast and reliable delivery, and 24/7 customer support.
        Your security is our priority, with advanced encryption for safe
        and seamless online shopping.
      </p>
    
        <div className="w-full"><img src="/images/li.svg" alt=""  className="w-1/2"/></div>

        <div className="flex justify-center w-full  ">
         <NavLink to="/product">
         <button className="simple-btn">Shopping</button>
         </NavLink>
        </div>
        
    </div>
    <div className="order-1 md:order-2 flex items-center justify-center">
      <img src="/images/about-3.svg" alt="" className="w-full " />
    </div>
  </div>
</div>
}