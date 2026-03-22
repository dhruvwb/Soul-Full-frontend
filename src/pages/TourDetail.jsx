import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, Alert } from "react-bootstrap";
import Footer from "../helpers/components/Footer";
import Seo from "../helpers/components/Seo";
import RichContent from "../helpers/components/RichContent";
import { getAssetUrl, getPublicDomesticPackageBySlug, submitEnquiry } from "../services/api";
import homeContent from "../models/homeContent";

const TourDetail = () => {
  const { slug } = useParams();
  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookForm, setBookForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchPackage = async () => {
      setLoading(true);
      try {
        const data = await getPublicDomesticPackageBySlug(slug);
        if (isMounted) {
          setPkg(data || null);
        }
      } catch (error) {
        console.error("Failed to load package", error);
        if (isMounted) {
          setPkg(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPackage();
    return () => {
      isMounted = false;
    };
  }, [slug]);

  const isHtml = val => typeof val === 'string' && /<[a-z][\s\S]*>/i.test(val);

  const parseList = value => {
    if (!value) return [];
    if (Array.isArray(value)) {
      return value.map(item => String(item).trim()).filter(Boolean);
    }
    return String(value)
      .split(/\r?\n+/)
      .map(item => item.trim())
      .filter(Boolean);
  };

  const inclusions = useMemo(() => parseList(pkg?.inclusions), [pkg]);
  const exclusions = useMemo(() => parseList(pkg?.exclusions), [pkg]);
  const highlights = useMemo(() => parseList(pkg?.highlights), [pkg]);
  const itinerary = useMemo(() => parseList(pkg?.itinerary), [pkg]);

  const resolveImage = value => {
    if (!value) return "";
    if (value.startsWith("http")) return value;
    return getAssetUrl(value);
  };

  const bannerImage = resolveImage(pkg?.images?.[0] || pkg?.imageUrl || "");
  const heroStyle = {
    "--hero-image": bannerImage ? `url(${bannerImage})` : "none"
  };
  const seoTitle = pkg?.metaTitle || pkg?.title || "Tour Package";
  const seoDescription =
    pkg?.metaDescription ||
    pkg?.shortDescription ||
    pkg?.description ||
    "Explore curated India tour packages from Soulful India Tours.";
  const contactInfo = homeContent.footer?.contact || {};
  const whatsappNumber = contactInfo.whatsapp || contactInfo.phone;
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${String(whatsappNumber).replace(/\D/g, "")}`
    : "";

  const handleBookChange = (event) => {
    const { name, value } = event.target;
    setBookForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    const messageLines = [
      `Package: ${pkg?.title || ""}`,
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
      setBookForm({
        name: "",
        phone: "",
        email: "",
        message: ""
      });
    } catch (error) {
      setSubmitStatus({ type: "danger", text: "Failed to send. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="tour-detail-empty">
        <p>Loading...</p>
      </div>
    );
  }

  if (!pkg) {
    return (
      <div className="tour-detail-empty">
        <Seo
          title="Tour package not found"
          description="The tour package you are looking for could not be found."
          noindex
        />
        <p>Package not available.</p>
      </div>
    );
  }

  return (
    <div className="tour-detail">
      <Seo title={seoTitle} description={seoDescription} image={bannerImage} />
      <section className="tour-hero" style={heroStyle}>
        <div className="tour-hero__content">
          <p className="tour-hero__eyebrow">Soulful India Tours</p>
          <h1 className="tour-hero__title">{pkg.title}</h1>
          {pkg.shortDescription && (
            <p className="tour-hero__subtitle">{pkg.shortDescription}</p>
          )}
          <div className="tour-hero__meta">
            {pkg.duration && <span>{pkg.duration}</span>}
            {pkg.location && <span>{pkg.location}</span>}
            {pkg.price && <span>From {pkg.price}</span>}
          </div>
        </div>
      </section>

      <section className="tour-detail__body">
        <div className="tour-detail__container">
          <div className="tour-detail__content">
            <div className="tour-section">
              <h2>Overview</h2>
              {isHtml(pkg.description || pkg.shortDescription) ? (
                <RichContent html={pkg.description || pkg.shortDescription} />
              ) : (
                <p>{pkg.description || pkg.shortDescription}</p>
              )}
            </div>
            {(isHtml(pkg.highlights) || highlights.length > 0) && (
              <div className="tour-section">
                <h2>Highlights</h2>
                {isHtml(pkg.highlights) ? (
                  <RichContent html={pkg.highlights} />
                ) : (
                  <ul>
                    {highlights.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            {(isHtml(pkg.itinerary) || itinerary.length > 0) && (
              <div className="tour-section">
                <h2>Itinerary</h2>
                {isHtml(pkg.itinerary) ? (
                  <RichContent html={pkg.itinerary} />
                ) : (
                  <ul>
                    {itinerary.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            {(isHtml(pkg.inclusions) || isHtml(pkg.exclusions) || inclusions.length > 0 || exclusions.length > 0) && (
              <div className="tour-section tour-section--split">
                {(isHtml(pkg.inclusions) || inclusions.length > 0) && (
                  <div>
                    <h3>Inclusions</h3>
                    {isHtml(pkg.inclusions) ? (
                      <RichContent html={pkg.inclusions} />
                    ) : (
                      <ul>
                        {inclusions.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
                {(isHtml(pkg.exclusions) || exclusions.length > 0) && (
                  <div>
                    <h3>Exclusions</h3>
                    {isHtml(pkg.exclusions) ? (
                      <RichContent html={pkg.exclusions} />
                    ) : (
                      <ul>
                        {exclusions.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            )}
            {bannerImage && (
              <div className="tour-media">
                <img src={bannerImage} alt={pkg.title} />
              </div>
            )}
          </div>

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

export default TourDetail;