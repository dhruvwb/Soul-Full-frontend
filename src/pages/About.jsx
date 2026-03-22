import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../helpers/components/Footer";
import Seo from "../helpers/components/Seo";
import RichContent from "../helpers/components/RichContent";
import homeContent from "../models/homeContent";
import { getAssetUrl, getPublicCms } from "../services/api";
import "./about.css";

const About = () => {
  const { about } = homeContent;
  const [cmsData, setCmsData] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchCms = async () => {
      try {
        const data = await getPublicCms();
        if (isMounted) {
          setCmsData(data || null);
        }
      } catch (error) {
        console.error("Failed to load CMS", error);
      }
    };
    fetchCms();
    return () => {
      isMounted = false;
    };
  }, []);

  const bannerImage = cmsData?.aboutBannerImage
    ? getAssetUrl(cmsData.aboutBannerImage)
    : about.image;
  const aboutImage = cmsData?.aboutImage
    ? getAssetUrl(cmsData.aboutImage)
    : about.image;
  const title = cmsData?.aboutTitle || about.title;
  const subtitle = cmsData?.aboutSubtitle || about.subtitle;
  const description = cmsData?.aboutDetailedDescription || about.description;
  const seoDescription = subtitle || description;
  const seoImage = bannerImage || aboutImage;

  return (
    <div className="about-page">
      <Seo title="About Us" description={seoDescription} image={seoImage} />
      {bannerImage && (
        <section
          className="about-banner"
          style={{ backgroundImage: `url(${bannerImage})` }}
          aria-label="About banner"
        >
          <h1 className="about-banner-title">{title}</h1>
        </section>
      )}
      <Container className="about-content">
        <Row className="align-items-start">
          <Col md={6} className="mb-4">
            {/<[a-z][\s\S]*>/i.test(subtitle || '') ? (
              <RichContent html={subtitle} className="about-subtitle" />
            ) : (
              <p className="about-subtitle">{subtitle}</p>
            )}
            {/<[a-z][\s\S]*>/i.test(description || '') ? (
              <RichContent html={description} className="about-text" />
            ) : (
              <p className="about-text">{description}</p>
            )}
          </Col>
          <Col md={6} className="mb-4">
            <img src={aboutImage} alt={title} className="about-image" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
