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
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;

    // Validate name (letters only)
    if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      setNameError("Please enter a valid name (letters only).");
      isValid = false;
    } else {
      setNameError("");
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate subject (letters only)
    if (!/^[a-zA-Z\s]+$/.test(formData.subject)) {
      setSubjectError("Please enter a valid subject (letters only).");
      isValid = false;
    } else {
      setSubjectError("");
    }

    return isValid;
  };

  const handleSubmit = () => {
    const isValid = validateForm();

    if (isValid) {
      onSubmitForm(formData);
      setIsSubmissionConfirmed(true);
    }
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
                className={`form-control bg-cost-color ${
                  nameError ? "is-invalid" : ""
                }`}
                id="name"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {nameError && <div className="invalid-feedback">{nameError}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-white">
                Email
              </label>
              <input
                type="email"
                className={`form-control bg-cost-color ${
                  emailError ? "is-invalid" : ""
                }`}
                id="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {emailError && (
                <div className="invalid-feedback">{emailError}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label text-white">
                Subject
              </label>
              <input
                type="text"
                className={`form-control bg-cost-color ${
                  subjectError ? "is-invalid" : ""
                }`}
                id="subject"
                name="subject"
                placeholder="Enter The Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
              {subjectError && (
                <div className="invalid-feedback">{subjectError}</div>
              )}
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
