import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { submitContact } from '../services/api';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await submitContact(formData);

      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Auto-hide success message
      setTimeout(() => setSuccess(false), 4000);
    } catch (error) {
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* HERO SECTION */}
      <div
        className="hero-section"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e)',
          height: '350px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff'
        }}
      >
        <div className="text-center">
          <h1>Contact Us</h1>
          <p>Home / Contact Us</p>
        </div>
      </div>

      <Container className="py-5">
        <Row>
          {/* LEFT COLUMN */}
          <Col lg={6}>
            {/* CALLBACK FORM */}
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h4>Want Us To Call Back? Please Fill The Details Below:</h4>

                {success && (
                  <Alert variant="success">
                    Thank you! We will contact you shortly.
                  </Alert>
                )}

                {errors.submit && (
                  <Alert variant="danger">{errors.submit}</Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name *</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone *</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          isInvalid={!!errors.phone}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                  </Button>
                </Form>
              </Card.Body>
            </Card>

            {/* CONTACT INFO */}
            <Card className="shadow-sm">
              <Card.Body>
                <div className="mb-3 d-flex">
                  <FaClock className="me-3 mt-1" />
                  <div>
                    <strong>Working Hours</strong>
                    <br />
                    10:00 AM – 6:00 PM (Mon–Sat)
                  </div>
                </div>

                <div className="mb-3 d-flex">
                  <FaPhone className="me-3 mt-1" />
                  <a href="tel:+919773529963">
                    <strong>+91 97735 29963</strong>
                  </a>
                </div>

                <div className="mb-3 d-flex">
                  <FaWhatsapp className="me-3 mt-1 text-success" />
                  <a
                    href="https://wa.me/919773529963"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>+91 97735 29963</strong>
                  </a>
                </div>

                <div className="d-flex">
                  <FaMapMarkerAlt className="me-3 mt-1 text-danger" />
                  <div>
                    Tooti Chowk, 1171-75, 6, Main Bazar Rd, Paharganj,
                    <br />
                    New Delhi – 110055, India
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* RIGHT COLUMN */}
          <Col lg={6}>
            <Card className="shadow-sm mb-4">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps?q=tooti%20chowk%20new%20delhi&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
              />
            </Card>

            <Card className="shadow-sm text-center">
              <Card.Body>
                <h5>Need Help?</h5>
                <p>Call us for instant support</p>
                <strong>+91 97735 29963</strong>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
