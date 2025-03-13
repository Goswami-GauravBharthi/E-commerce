import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import "./css/contact.css";
import { useAuth0 } from "@auth0/auth0-react";

export const Contact = () => {
const {user,isAuthenticated}=useAuth0();

  return (
    <section className="contact-section ">
      <div className="container grid contact grid-2">
        {/* col-1 */}
        <div className="contact-message">
          <p className="first">Contact us</p>
          <h2>
            Have a <span>Product</span> or want to <span>Collaborate</span>?
          </h2>
          <p>We would love to hear from you. Drop a message</p>

          <div className="location-box">
            <div>
              <p>Location</p>
              <p>Bhavanagar , Gujarat</p>
            </div>
            <div>
              <p>Mail to</p>
              <p>gaurav02105@gmail.com</p>
            </div>
            <div className="info">
              <p>Follow on</p>
              <div className="grid grid-3  ">
                <BsInstagram size={22} className="icon" />
                <FaFacebookSquare size={22} className="icon" />
                <SiDiscord size={22} className="icon" />
              </div>
            </div>
          </div>
        </div>

        {/* col-2 */}

        <div className="contact-form">
          <form action="https://formspree.io/f/mzzdwkvv" method="POST">
            <h2>Send A Message</h2>
            <label htmlFor="name">Your Name</label>
            <br />
            <input
              type="text"
              name="username"
              placeholder="Enter Your Name"
              required
              value={isAuthenticated?user.name:""}
            />

            <label htmlFor="email">Your E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              value={isAuthenticated?user.email:""}
              required
              placeholder="Enter your E-mail"
            />

            <label htmlFor="message">Your Message</label>
            <br />
            <textarea
              name="message"
              rows={3}
              required
              id="message"
              placeholder="type message"
            ></textarea>

            <button className="simple-btn send" type="submit">
              Send{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
