import React, { createContext, useContext, useState } from 'react';
import { Modal, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { submitEnquiry } from '../../services/api';

const EnquiryModalContext = createContext();

export const useEnquiryModal = () => useContext(EnquiryModalContext);

export const EnquiryModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    adults: "",
    children: "",
    hotelCategory: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.checkInDate) newErrors.checkInDate = "Check-in date is required";
    if (!formData.checkOutDate) newErrors.checkOutDate = "Check-out date is required";
    if (!formData.adults) newErrors.adults = "Number of adults is required";
    if (!formData.consent) newErrors.consent = "You must agree to the terms";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await submitEnquiry(formData);
      setSuccess(true);
      setFormData({
        name: "",
        mobile: "",
        email: "",
        checkInDate: "",
        checkOutDate: "",
        adults: "",
        children: "",
        hotelCategory: "",
        message: "",
        consent: false,
      });
      setTimeout(() => {
        setSuccess(false);
        setShowModal(false);
      }, 3000);
    } catch (error) {
      setErrors({ submit: "Failed to send enquiry. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const buildMessage = (existingMessage, options) => {
    if (!options) {
      return existingMessage;
    }
    const lines = [];
    if (options.country) {
      lines.push(`Country: ${options.country}`);
    }
    if (options.packageName) {
      lines.push(`Package: ${options.packageName}`);
    }
    if (options.message) {
      lines.push(options.message);
    }
    if (lines.length === 0) {
      return existingMessage;
    }
    return lines.join('\n');
  };

  const openModal = (options) => {
    setFormData(prev => ({
      ...prev,
      message: buildMessage(options ? prev.message : '', options)
    }));
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  return (
    <EnquiryModalContext.Provider value={{ openModal }}>
      {children}
      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Enquire Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {success && (
            <Alert variant="success">
              Thank you! We will contact you shortly.
            </Alert>
          )}
          {errors.submit && (
            <Alert variant="danger">{errors.submit}</Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
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
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Mobile *</Form.Label>
                  <Form.Control
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    isInvalid={!!errors.mobile}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.mobile}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Check-in Date *</Form.Label>
                  <Form.Control
                    type="date"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleChange}
                    isInvalid={!!errors.checkInDate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.checkInDate}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Check-out Date *</Form.Label>
                  <Form.Control
                    type="date"
                    name="checkOutDate"
                    value={formData.checkOutDate}
                    onChange={handleChange}
                    isInvalid={!!errors.checkOutDate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.checkOutDate}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Number of Adults *</Form.Label>
                  <Form.Control
                    type="number"
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    isInvalid={!!errors.adults}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.adults}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Number of Children</Form.Label>
                  <Form.Control
                    type="number"
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Hotel Category</Form.Label>
              <Form.Select
                name="hotelCategory"
                value={formData.hotelCategory}
                onChange={handleChange}
              >
                <option value="">Select Hotel Category</option>
                <option value="Budget">Budget</option>
                <option value="Standard">Standard</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Luxury">Luxury</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                label="I agree to the terms and conditions and consent to receive communications from Soulful India Tours."
                isInvalid={!!errors.consent}
              />
              <Form.Control.Feedback type="invalid">
                {errors.consent}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit" disabled={loading} className="w-100">
              {loading ? "Submitting..." : "Submit Enquiry"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </EnquiryModalContext.Provider>
  );
};