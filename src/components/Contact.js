import "../index.css";
import Footer from "./Footer";
import { useState } from "react";
export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name.length < 2) {
      alert("Please enter a valid name");
    } else if (data.subject.length < 5) {
      alert("Please enter a valid subject");
    } else if (data.message.length < 10) {
      alert("please write a valid message");
    } else {
      alert(
        "Your message has been submited successfully, Youl'll hear from us soon! HAPPY BAKING! 👩‍🍳🥖"
      );
    }
  };
  return (
    <div className="container-fluid pt-5  contact ">
      <section className="mb-5 pb-5">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>

        <p className="text-center  w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-6 mb-md-0 mb-5 justify-content-center">
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              name="contact-form"
              method="POST"
            >
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={data.name}
                      onChange={handleData}
                      className="form-control"
                      required
                    />
                    <label for="name" className="">
                      Your name
                    </label>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col-md-8 ">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={data.email}
                      onChange={handleData}
                      className="form-control"
                      required
                    />
                    <label for="subject" className="">
                      Email
                    </label>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-3">
                <div className="col-md-8 ">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={data.subject}
                      onChange={handleData}
                      className="form-control"
                      required
                    />
                    <label for="subject" className="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-3">
                <div className="col-md-8">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      value={data.message}
                      onChange={handleData}
                      rows="4"
                      required
                      className="form-control md-textarea "
                    ></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>

              <div className="text-center text-md-left">
                <button className=" btn btn-dark mt-4 ">
                  <a className="text-decoration-none text-white ">Send</a>
                </button>
              </div>
            </form>
            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>112 Long, Cape Town, SA</p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+27 83 340 8875</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>sweettooth@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
