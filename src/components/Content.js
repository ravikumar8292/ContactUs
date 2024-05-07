import React from "react";
import "./Content.css";
import call from "./images/icons8-call-50 (1).png";
import message from "./images/icons8-message-32.png";
import contact from "./images/contact.svg";

export default function Content() {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="heading">CONTACT US</div>
          <div className="passege">
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.
          </div>
          <div className="down-container">
            <div className="Contact-form">
              <div className="first-contact">
                <div className="via-chat">
                  <button>
                    <img src={message} alt="" srcset="" />
                    VIA SUPPORT CHAT
                  </button>
                </div>
                <div className="via-call">
                  <button>
                    <img src={call} alt="" srcset="" />
                    VIA CALL
                  </button>
                </div>
              </div>
              <div className="second-contact">
                <div className="via-email">
                  <button>
                    <img src={message} alt="" srcset="" />
                    VIA EMAIL FORM
                  </button>
                </div>
              </div>
              <div className="third-contact">
                <div className="name">
                  <label htmlFor="name">Name:</label>
                  <br />
                  <input type="text" placeholder="enter your name" />
                </div>
                <div className="email">
                  <label htmlFor="email">Email:</label>
                  <br />
                  <input type="email" placeholder="enter email" />
                </div>
                <div className="text-box">
                  <label htmlFor="Text">Text:</label>
                  <br />
                  <input type="text" />
                </div>
                <div className="submit">
                  {/* <label htmlFor="Text">Text:</label><br /> */}
                  <input type="submit" />
                </div>
              </div>
            </div>
            <div className="image">
              <img src={contact} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
