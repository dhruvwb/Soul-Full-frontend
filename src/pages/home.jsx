import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlay
} from "react-icons/fa";
import { useEnquiryModal } from "../helpers/components/EnquiryModalContext";
import Footer from "../helpers/components/Footer";
import Seo from "../helpers/components/Seo";
import homeContent from "../models/homeContent";
import "../helpers/css/home.css";
import { getAssetUrl, getPublicCms, getPublicCustomPackageCategories } from "../services/api";

const formatPrice = value => {
  if (!value) return "";
  const stringValue = String(value);
  if (stringValue.includes("₹")) return stringValue;
  if (/^[0-9]+$/.test(stringValue)) return `₹${stringValue}`;
  return stringValue;
};

const sortByDate = items =>
  [...items].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

const Home = () => {
  const navigate = useNavigate();
  const { openModal } = useEnquiryModal();
  const carouselRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const [slideWidth, setSlideWidth] = useState(0);
  const [customCategories, setCustomCategories] = useState([]);
  const [cmsData, setCmsData] = useState(null);
  const gapSize = 20;

  const activePackages = useMemo(
    () => homeContent.packages.filter(pkg => pkg.status === "active"),
    []
  );

  const popularCards = useMemo(() => {
    return homeContent.popularPackages
      .filter(item => item.status === "active")
      .map(item => {
        const pkg = activePackages.find(p => p.slug === item.packageSlug);
        if (!pkg) return null;
        return {
          ...pkg,
          shortDescription: item.shortDescription || pkg.shortDescription
        };
      })
      .filter(Boolean);
  }, [activePackages]);

  const carouselSlides = useMemo(() => {
    if (popularCards.length === 0) return [];
    return [...popularCards, ...popularCards, ...popularCards];
  }, [popularCards]);

  useEffect(() => {
    let isMounted = true;
    const fetchCustomCategories = async () => {
      try {
        const data = await getPublicCustomPackageCategories();
        if (isMounted) {
          setCustomCategories(data || []);
        }
      } catch (error) {
        console.error("Failed to load custom categories", error);
      }
    };
    fetchCustomCategories();
    return () => {
      isMounted = false;
    };
  }, []);

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

  const resolveImage = (value) => {
    if (!value) return "";
    if (value.startsWith("http")) return value;
    return getAssetUrl(value);
  };

  const goldenTriangleRegions = useMemo(
    () => homeContent.goldenTriangleRegions.filter(item => item.status === "active"),
    []
  );

  const galleryItems = useMemo(
    () => homeContent.gallery.filter(item => item.status === "active").slice(0, 8),
    []
  );

  const latestBlogs = useMemo(
    () => sortByDate(homeContent.blogs.filter(item => item.status === "active")).slice(0, 3),
    []
  );

  const latestNews = useMemo(
    () => sortByDate(homeContent.news.filter(item => item.status === "active")).slice(0, 3),
    []
  );

  const heroImage = homeContent.hero.backgroundImage;

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisibleCount(1);
      } else if (width < 992) {
        setVisibleCount(2);
      } else if (width < 1200) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    if (popularCards.length > 0) {
      setCarouselIndex(popularCards.length);
    }
  }, [popularCards.length]);

  useEffect(() => {
    if (!carouselRef.current) return;
    const updateSlideWidth = () => {
      const slide = carouselRef.current.querySelector(".popular-carousel__slide");
      if (slide) {
        setSlideWidth(slide.getBoundingClientRect().width + gapSize);
      }
    };
    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);
    return () => window.removeEventListener("resize", updateSlideWidth);
  }, [carouselSlides.length, visibleCount]);

  useEffect(() => {
    if (popularCards.length <= visibleCount) return;
    const interval = setInterval(() => {
      setCarouselIndex(prev => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [popularCards.length, visibleCount]);

  useEffect(() => {
    if (enableTransition) return undefined;
    const id = requestAnimationFrame(() => setEnableTransition(true));
    return () => cancelAnimationFrame(id);
  }, [enableTransition]);

  const handleNext = () => {
    setCarouselIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    setCarouselIndex(prev => prev - 1);
  };

  const handleTransitionEnd = () => {
    const total = popularCards.length;
    if (!total) return;
    if (carouselIndex >= total * 2) {
      setEnableTransition(false);
      setCarouselIndex(total);
    } else if (carouselIndex < total) {
      setEnableTransition(false);
      setCarouselIndex(total + carouselIndex);
    }
  };

  return (
    <div className="home-page">
      <Seo title="Home" description={homeContent.hero.subtitle} image={heroImage} />
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${homeContent.hero.backgroundImage})` }}
      >
        <div className="home-hero__overlay" />
        <Container className="home-hero__content">
          <h1 className="home-hero__title">{homeContent.hero.title}</h1>
          <p className="home-hero__subtitle">{homeContent.hero.subtitle}</p>
          <Button className="home-btn-primary" onClick={openModal}>
            {homeContent.hero.ctaLabel}
          </Button>
        </Container>
      </section>

      <section className="home-section" id="popular-packages">
        <Container>
          <h2 className="home-section__title">Popular Tour Packages in India</h2>
          <p className="home-section__subtitle">
            Handpicked itineraries loved by travelers across the country.
          </p>
          <div
            className="popular-carousel"
            style={{ "--cards-visible": visibleCount, "--carousel-gap": `${gapSize}px` }}
          >
            <button
              type="button"
              className="popular-carousel__nav popular-carousel__nav--left"
              onClick={handlePrev}
              aria-label="Previous tour packages"
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              className="popular-carousel__nav popular-carousel__nav--right"
              onClick={handleNext}
              aria-label="Next tour packages"
            >
              <FaChevronRight />
            </button>
            <div className="popular-carousel__viewport">
              <div
                className={`popular-carousel__track ${enableTransition ? "" : "is-static"}`}
                ref={carouselRef}
                onTransitionEnd={handleTransitionEnd}
                style={{ transform: `translateX(-${carouselIndex * slideWidth}px)` }}
              >
                {carouselSlides.map((pkg, index) => (
                  <div className="popular-carousel__slide" key={`${pkg.id}-${index}`}>
                    <Card
                      className="home-card popular-card"
                      onClick={() => navigate(`/popular-tours/${pkg.slug}`)}
                    >
                      <img src={pkg.images[0]} alt={pkg.title} className="home-card__image" />
                      <div className="home-card__body">
                        <div className="popular-card__meta">
                          <span className="home-pill">{pkg.duration}</span>
                          <span className="home-card__price">{formatPrice(pkg.price) || "Price on Request"}</span>
                        </div>
                        <h5>{pkg.title}</h5>
                        <p>{pkg.location}</p>
                        <p>{pkg.shortDescription}</p>
                        <div className="home-card__actions">
                          <Button
                            variant="outline-dark"
                            size="sm"
                            onClick={event => {
                              event.stopPropagation();
                              openModal({ packageName: pkg.title, message: "Interested in this package." });
                            }}
                          >
                            Enquire Now
                          </Button>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={event => {
                              event.stopPropagation();
                              navigate(`/popular-tours/${pkg.slug}`);
                            }}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="home-section" id="customized-packages">
        <Container>
          <h2 className="home-section__title">Customized Tour Packages</h2>
          <p className="home-section__subtitle">
            Choose a theme and explore tailor-made experiences.
          </p>
          <Row className="g-4">
            {customCategories.map(category => {
              const imageUrl = resolveImage(category.imageUrl);
              return (
                <Col key={category.key} md={6} lg={3}>
                  <button
                    type="button"
                    className="custom-category-card"
                    onClick={() => navigate(`/packages/${category.key}`)}
                    style={{
                      backgroundImage: imageUrl ? `url(${imageUrl})` : "none"
                    }}
                  >
                    <span className="custom-category-card__overlay" />
                    <span className="custom-category-card__title">{category.label}</span>
                  </button>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className="home-section" id="golden-triangle">
        <Container>
          <h2 className="home-section__title">Golden Triangle Tour In India</h2>
          <p className="home-section__subtitle">
            Discover iconic circuits across every region of India.
          </p>
          <Row>
            {goldenTriangleRegions.map(region => (
              <Col key={region.id} md={6} lg={3} className="mb-4">
                <div
                  className="golden-card"
                  onClick={() => navigate(`/golden-triangle/${region.slug}`)}
                >
                  <img src={region.image} alt={region.title} />
                  <div className="golden-card__overlay">{region.title}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="home-section" id="gallery">
        <Container>
          <h2 className="home-section__title">Our Gallery</h2>
          <p className="home-section__subtitle">Photos and videos from recent journeys.</p>
          <div className="gallery-grid">
            {galleryItems.map(item => (
              <div className="gallery-item" key={item.id}>
                {item.mediaType === "video" ? (
                  <video className="gallery-media" muted>
                    <source src={item.mediaUrl} />
                  </video>
                ) : (
                  <img
                    className="gallery-media"
                    src={item.mediaUrl}
                    alt={item.title}
                    loading="lazy"
                  />
                )}
                {item.mediaType === "video" && (
                  <div className="gallery-item__overlay">
                    <FaPlay />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Button className="home-btn-primary" onClick={() => navigate("/gallery")}>
              View All
            </Button>
          </div>
        </Container>
      </section>

      <section className="home-section" id="blogs">
        <Container>
          <h2 className="home-section__title">Blogs</h2>
          <p className="home-section__subtitle">Latest travel stories and inspiration.</p>
          <Row>
            {latestBlogs.map(blog => (
              <Col key={blog.id} md={4} className="mb-4">
                <Card className="home-card h-100">
                  <Card.Img className="blog-card__image" src={blog.coverImage} />
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{blog.excerpt}</Card.Text>
                    <Button
                      variant="outline-dark"
                      onClick={() => navigate(`/blogs/${blog.slug}`)}
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-3">
            <Button className="home-btn-primary" onClick={() => navigate("/blogs")}>
              View More
            </Button>
          </div>
        </Container>
      </section>

      <section className="home-section" id="news">
        <Container>
          <h2 className="home-section__title">News</h2>
          <p className="home-section__subtitle">Updates from Soulful India Tours.</p>
          <Row>
            {latestNews.map(item => (
              <Col key={item.id} md={4} className="mb-4">
                <Card className="home-card h-100">
                  <div style={{ position: "relative" }}>
                    <Card.Img className="news-card__image" src={item.image} />
                    <div className="news-date">{item.date}</div>
                  </div>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.excerpt}</Card.Text>
                    <Button
                      variant="outline-dark"
                      onClick={() => navigate(`/news/${item.slug}`)}
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-3">
            <Button className="home-btn-primary" onClick={() => navigate("/news")}>
              View More
            </Button>
          </div>
        </Container>
      </section>

      <section className="home-section" id="about">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4">
              <h2 className="home-section__title" style={{ textAlign: "left" }}>
                {homeContent.about.title}
              </h2>
              <p className="home-section__subtitle" style={{ textAlign: "left" }}>
                {homeContent.about.subtitle}
              </p>
              <p>{cmsData?.aboutShortDescription || homeContent.about.description}</p>
              <Button
                className="home-btn-primary mt-4"
                onClick={() => navigate(homeContent.about.ctaLink)}
              >
                {homeContent.about.ctaLabel}
              </Button>
            </Col>
            <Col md={6} className="mb-4">
              <img
                src={cmsData?.aboutImage ? getAssetUrl(cmsData.aboutImage) : homeContent.about.image}
                alt={homeContent.about.title}
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)"
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
