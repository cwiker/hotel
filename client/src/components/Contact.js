import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css"

function Contact() {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
        .sendForm(
            'service_l7q1lvs', 
            'template_gcxr568', 
            formRef.current, 
            'user_yIgHHoYQdioaziicX5lHF'
        )
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
    });
  };

  return (
          <div className="c-container">
              <div className="c-div">
                <p className="c-para">If you would like to know more about our hotel or any questions, please feel free to contact us by leaving your information in the form below. Our staff will contact you back asap. Thank you for your support. </p>
              </div>
              <h1>Contact Us</h1>
              <form ref={formRef} onSubmit={handleSubmit} className="c-form">
                <input
                  className="c-input"
                  type="text"
                  placeholder="Name"
                  name="user_name"
                />
                <br />
                <input
                  className="c-input"
                  type="text"
                  placeholder="Subject"
                  name="user_subject"
                />
                <br />
                <input
                  className="c-input"
                  type="text"
                  placeholder="Email"
                  name="user_email"
                />
                <br />
                <textarea 
                  className="c-textarea"
                  type="text"
                  placeholder="Message"
                  name="message"
                />
                <br />
                <button className="c-button">
                  Submit
                </button><br/>
                {done && "Thank you. We will get back to you asap."}
              </form>
            </div>
          );
}
export default Contact

// function Contact() {
//     return (
//  <div class="form-container">
//       <form class="register-form">
//         <input
//           id="first-name"
//           class="form-field"
//           type="text"
//           placeholder="First Name"
//           name="firstName"
//         />
//         <input
//           id="last-name"
//           class="form-field"
//           type="text"
//           placeholder="Last Name"
//           name="lastName"
//         />
//         <input
//           id="email"
//           class="form-field"
//           type="text"
//           placeholder="Email"
//           name="email"
//         />
//         <button class="form-field" type="submit">
//           Contact Us
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Contact
