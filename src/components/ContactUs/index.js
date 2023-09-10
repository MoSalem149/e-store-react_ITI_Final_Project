import React, { useState } from "react";
import "../../style/ContactUs/style.css";

const ContactUs = ({ onSubmitForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmissionConfirmed, setIsSubmissionConfirmed] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmitForm(formData);
    setIsSubmissionConfirmed(true);
  };

  return (
    <div className="btn-title section-title ">
      <div className="contact-icon ms-3 py-4 ">
        <button className="btn btn-color py-3" onClick={toggleFormVisibility}>
          <i className="fas fa-envelope px-1"></i>
          {isFormVisible ? "Hide Form" : "Show Form"}
        </button>
      </div>
      {isFormVisible && (
        <div className="contain bg-dark" style={{ padding: "20px" }}>
          <h2 className="contain-header">Contact Us</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-white">
                Name
              </label>
              <input
                type="text"
                className="form-control bg-cost-color"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-white">
                Email
              </label>
              <input
                type="email"
                className="form-control bg-cost-color"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label text-white">
                Subject
              </label>
              <input
                type="text"
                className="form-control bg-cost-color"
                id="subject"
                name="subject"
                placeholder="Enter The Subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
          {isSubmissionConfirmed && (
            <p>Thank you for contacting us! We will get back to you soon.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactUs;
