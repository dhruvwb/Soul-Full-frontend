import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, Alert } from "react-bootstrap";
import Footer from "../helpers/components/Footer";
import Seo from "../helpers/components/Seo";
import RichContent from "../helpers/components/RichContent";
import { submitEnquiry } from "../services/api";
import homeContent from "../models/homeContent";
import goldenTriangleTours from "../models/goldenTriangleData";

const GoldenTriangleDetail = () => {
  const { slug } = useParams();
  const tour = goldenTriangleTours[slug] || null;

  const [bookForm, setBookForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = homeContent.footer?.contact || {};
  const whatsappNumber = contactInfo.whatsapp || contactInfo.phone;
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${String(whatsappNumber).replace(/\D/g, "")}`
    : "";

  const bannerImage = tour?.bannerImage || "";
  const heroStyle = { "--hero-image": bannerImage ? `url(${bannerImage})` : "none" };

  const seoTitle = tour?.metaTitle || tour?.title || "Golden Triangle Tour";
  const seoDescription =
    tour?.metaDescription ||
    tour?.shortDescription ||
    "Explore India's iconic Golden Triangle circuits with Soulful India Tours.";

  const handleBookChange = (event) => {
    const { name, value } = event.target;
    setBookForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    const messageLines = [
      `Tour: ${tour?.title || "Golden Triangle"}`,
      bookForm.message ? `Message: ${bookForm.message}` : null
    ].filter(Boolean);

    try {
      await submitEnquiry({
        name: bookForm.name,
        mobile: bookForm.phone,
        email: bookForm.email,
        message: messageLines.join("\n")
      });
      setSubmitStatus({ type: "success", text: "Thanks! We will contact you shortly." });
      setBookForm({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus({ type: "danger", text: "Failed to send. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  if (!tour) {
    return (
      <div className="tour-detail-empty">
        <Seo
          title="Tour not found"
          description="The Golden Triangle tour you are looking for could not be found."
          noindex
        />
        <p>Tour not available.</p>
        <Footer />
      </div>
    );
  }

  return (
    <div className="tour-detail">
      <Seo title={seoTitle} description={seoDescription} image={bannerImage} />

      {/* Hero Banner */}
      <section className="tour-hero" style={heroStyle}>
        <div className="tour-hero__content">
          <p className="tour-hero__eyebrow">Soulful India Tours</p>
          <h1 className="tour-hero__title">{tour.title}</h1>
          {tour.shortDescription && (
            <p className="tour-hero__subtitle">{tour.shortDescription}</p>
          )}
          <div className="tour-hero__meta">
            {tour.duration && <span>{tour.duration}</span>}
            {tour.location && <span>{tour.location}</span>}
            {tour.price && <span>From {tour.price}</span>}
          </div>
        </div>
      </section>

      {/* Body: content + sidebar */}
      <section className="tour-detail__body">
        <div className="tour-detail__container">
          {/* Left content */}
          <div className="tour-detail__content">
            {/* Overview */}
            <div className="tour-section">
              <h2>Overview</h2>
              <RichContent html={tour.description} />
            </div>

            {/* Highlights */}
            {tour.highlights && (
              <div className="tour-section">
                <h2>Highlights</h2>
                <RichContent html={tour.highlights} />
              </div>
            )}

            {/* Detailed Itinerary */}
            {tour.itinerary && (
              <div className="tour-section">
                <h2>Detailed Itinerary</h2>
                <RichContent html={tour.itinerary} />
              </div>
            )}

            {/* Inclusions & Exclusions */}
            {(tour.inclusions || tour.exclusions) && (
              <div className="tour-section tour-section--split">
                {tour.inclusions && (
                  <div>
                    <h3>Inclusions</h3>
                    <RichContent html={tour.inclusions} />
                  </div>
                )}
                {tour.exclusions && (
                  <div>
                    <h3>Exclusions</h3>
                    <RichContent html={tour.exclusions} />
                  </div>
                )}
              </div>
            )}

            {/* Banner image */}
            {bannerImage && (
              <div className="tour-media">
                <img src={bannerImage} alt={tour.title} />
              </div>
            )}
          </div>

          {/* Right sidebar */}
          <aside className="tour-detail__sidebar">
            <div className="tour-card">
              <h3>Book Now</h3>
              <Form onSubmit={handleBookSubmit}>
                {submitStatus && (
                  <Alert variant={submitStatus.type} className="py-2">
                    {submitStatus.text}
                  </Alert>
                )}
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={bookForm.name}
                    onChange={handleBookChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone No</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={bookForm.phone}
                    onChange={handleBookChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={bookForm.email}
                    onChange={handleBookChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={bookForm.message}
                    onChange={handleBookChange}
                  />
                </Form.Group>
                <Button type="submit" className="w-100" disabled={submitting}>
                  {submitting ? "Sending..." : "Book Now"}
                </Button>
              </Form>
            </div>

            <div className="tour-card tour-card--contact">
              <h3>Contact Us</h3>
              <p>{contactInfo.phone || "+91 12345 67890"}</p>
              {whatsappNumber && (
                <p>
                  WhatsApp: {whatsappNumber}
                  {whatsappHref && (
                    <>
                      {" "}
                      <a href={whatsappHref} target="_blank" rel="noreferrer">
                        Chat
                      </a>
                    </>
                  )}
                </p>
              )}
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GoldenTriangleDetail;
