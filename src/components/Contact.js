import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [errors, setErrors] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
    // Clear any existing errors
    setErrors({
      ...errors,
      [category]: ''
    });
  }

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    if (!formDetails.firstName) {
      formIsValid = false;
      newErrors.firstName = "First name is required";
    }

    if (!formDetails.lastName) {
      formIsValid = false;
      newErrors.lastName = "Last name is required";
    }

    if (!formDetails.email) {
      formIsValid = false;
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formDetails.email)) {
      formIsValid = false;
      newErrors.email = "Email is invalid";
    }

    if (!formDetails.message) {
      formIsValid = false;
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return formIsValid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setButtonText("Sending...");

    const templateParams = {
      firstName: formDetails.firstName,
      lastName: formDetails.lastName,
      email: formDetails.email,
      phone: formDetails.phone,
      message: formDetails.message,
    };

    emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setButtonText("Send");
        setStatus({ success: true, message: 'Message sent successfully' });
        setFormDetails(formInitialDetails);
      }, (err) => {
        console.log('FAILED...', err);
        setButtonText("Send");
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit} noValidate>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                        {errors.firstName && <span className="error">{errors.firstName}</span>}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                        {errors.lastName && <span className="error">{errors.lastName}</span>}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                        {errors.email && <span className="error">{errors.email}</span>}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <label htmlFor="phone">Phone No.</label>
                        <input type="tel" id="phone" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        {errors.message && <span className="error">{errors.message}</span>}
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
