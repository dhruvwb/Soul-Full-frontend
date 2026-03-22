import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Card, Button, Accordion } from "react-bootstrap";
import thailand from "../assets/thailand.png";
import { Link } from "@mui/material";
import Header from "../helpers/components/header";
import { getAssetUrl, getPublicDestinations } from "../services/api";

const ThailandTouristPlaces = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [destinations, setDestinations] = useState([]);
  const [loadingDestinations, setLoadingDestinations] = useState(true);
  // Additional text to show when "Read More" is clicked
  const additionalText = [
    "From the chaotic streets of Bangkok city to the swaying palms and must-visit places in Phuket, Thailand has many stunning locations that will never disappoint you.",
    "Bangkok is the capital city and is a must-visit for backpackers, whereas Chiang Mai is the city of ancient temples. Railay invites adventurous travelers to rock climbing, and Khao Yai National Park is ideal for all wildlife enthusiasts to explore the country’s rich biodiversity.",
    "If you have snorkeling on your mind, Similan Islands are the best choice, and for all-night partying, Ko Pha-Ngan is recommended.",
    "So whether it’s beaches, shopping, partying, food, or nightlife that pique your interest, we have prepared a list of some of the must-visit places in Thailand.",
  ];

  const faqData = [
    {
      question: "Which are the best hill stations to go with kids in India?",
      answer:
        "Some of the best hill stations for kids are Nainital, Shimla, and Munnar.",
    },
    {
      question:
        "What are the top hill station destinations in India to visit with the family?",
      answer: "Ooty, Darjeeling, and Manali are great for family trips.",
    },
    {
      question: "What are the famous hill station destinations near Delhi?",
      answer: "Mussoorie, Nainital, and Shimla are popular near Delhi.",
    },
    {
      question: "What are the best hill station destinations near Bangalore?",
      answer: "Coorg, Chikmagalur, and Wayanad are close to Bangalore.",
    },
    {
      question: "Which are the best hill stations in North India?",
      answer: "Shimla, Manali, and Gulmarg are amazing in North India.",
    },
    {
      question: "Which are the top hill stations in South India?",
      answer: "Munnar, Ooty, and Kodaikanal top the list in South India.",
    },
    {
      question:
        "What are the best hill station destinations for the summer holidays in India?",
      answer: "Ladakh, Shillong, and Mount Abu are great summer destinations.",
    },
    {
      question: "What can families do during a hill station?",
      answer:
        "Families can enjoy nature walks, sightseeing, and adventure activities.",
    },
    {
      question: "What is the best time for hill station vacations in India?",
      answer:
        "The best time is usually summer (March to June) and winter (October to February).",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const destinationSlug = (value) =>
    String(value || "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

  useEffect(() => {
    let isMounted = true;
    const fetchDestinations = async () => {
      try {
        const data = await getPublicDestinations();
        if (isMounted) {
          setDestinations(data || []);
        }
      } catch (error) {
        console.error("Failed to load destinations", error);
      } finally {
        if (isMounted) {
          setLoadingDestinations(false);
        }
      }
    };
    fetchDestinations();
    return () => {
      isMounted = false;
    };
  }, []);

  const activeDestinations = useMemo(
    () => destinations.filter(item => item.isActive !== false),
    [destinations]
  );

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 105) + 150; // Random value between 150-255
    const g = Math.floor(Math.random() * 105) + 150;
    const b = Math.floor(Math.random() * 105) + 150;
    return `rgb(${r}, ${g}, ${b})`;
  };

  const tours = [
    {
      id: 1,
      nights: "4 Nights / 5 Days",
      title: "5 Days Bangkok Pattaya Tour",
      location: "Pattaya – Bangkok",
      price: "On Request",
      image: "bangkok_pattaya.jpg", // Replace with your image path or variable
    },
    {
      id: 2,
      nights: "10 Nights / 11 Days",
      title: "Singapore Malaysia Thailand Tour Package",
      location: "Singapore – Kuala Lumpur – Pattaya – Bangkok",
      price: "INR 75,000 Per Person",
      image: "singapore_malaysia_thailand.jpg", // Replace with your image path or variable
    },
    {
      id: 3,
      nights: "7 Nights / 8 Days",
      title: "Bali Honeymoon Package",
      location: "Bali, Indonesia",
      price: "INR 50,000 Per Person",
      image: "bali_honeymoon.jpg", // Replace with your image path or variable
    },
    {
      id: 4,
      nights: "5 Nights / 6 Days",
      title: "Maldives Beach Getaway",
      location: "Maldives",
      price: "INR 1,00,000 Per Person",
      image: "maldives_getaway.jpg", // Replace with your image path or variable
    },
    {
      id: 5,
      nights: "8 Nights / 9 Days",
      title: "Europe Tour: Paris, Rome, and London",
      location: "Paris – Rome – London",
      price: "INR 1,50,000 Per Person",
      image: "europe_tour.jpg", // Replace with your image path or variable
    },
    {
      id: 6,
      nights: "6 Nights / 7 Days",
      title: "Explore Japan: Tokyo and Kyoto",
      location: "Tokyo – Kyoto",
      price: "INR 80,000 Per Person",
      image: "japan_tour.jpg", // Replace with your image path or variable
    },
    {
      id: 7,
      nights: "3 Nights / 4 Days",
      title: "Dubai Adventure Tour",
      location: "Dubai, UAE",
      price: "INR 60,000 Per Person",
      image: "dubai_adventure.jpg", // Replace with your image path or variable
    },
    {
      id: 8,
      nights: "5 Nights / 6 Days",
      title: "Thailand Island Hopping Tour",
      location: "Phuket – Krabi – Koh Samui",
      price: "INR 70,000 Per Person",
      image: "thailand_island_hopping.jpg", // Replace with your image path or variable
    },
  ];

  return (
    <div>
      <Header />
      <Container className="my-5">
        <Row className="text-center mb-4">
          <Col>
            <h2>Places to Visit in Thailand</h2>
            <p>
              A bucket-list holiday destination for travelers across the globe,
              Thailand is an exotic country with many attractions under its rug.
              From golden beaches to glittering beaches, Thailand welcomes
              travelers with open arms for an unforgettable travel affair.
              Whether it is your first time or 50th, there are numerous
              beautiful places to visit in Thailand that will any day leave you
              spellbound.
            </p>
            {showMore &&
              additionalText.map((text, index) => <p key={index}>{text}</p>)}
            <Button variant="link" onClick={() => setShowMore(!showMore)}>
              {showMore ? "Read Less" : "Read More"}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="mb-4">
            <h3>List of Tourist Places to Visit in Thailand</h3>
          </Col>
        </Row>
        {/* Card components of the destinations  */}
        <Container>
          {loadingDestinations && <p>Loading destinations...</p>}
          {!loadingDestinations && activeDestinations.length === 0 && (
            <p>No destinations available yet.</p>
          )}
          {activeDestinations.map(item => {
            const rawImage = item.images?.[0] || item.image || "";
            const imageUrl = rawImage ? getAssetUrl(rawImage) : "";
            const slug = item.slug || destinationSlug(item.name);
            const previewText = (item.shortDescription || item.description || "Details coming soon.")
              .replace(/<[^>]*>/g, '')
              .replace(/&nbsp;/g, ' ')
              .substring(0, 250);
            return (
              <Row className="mb-4" key={item._id || item.name}>
                <Col xs={3} className="d-flex justify-content-center align-items-center">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={item.name}
                      style={{
                        width: "300px",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "300px",
                        height: "200px",
                        borderRadius: "8px",
                        background: "#f0f0f0",
                      }}
                    />
                  )}
                </Col>
                <Col xs={8} className="ml-10" style={{ border: "", marginLeft: "20px" }}>
                  <h2 style={{ fontWeight: "bold" }}>{item.name}</h2>
                  <p>{previewText}{previewText.length >= 250 ? "..." : ""}</p>
                  <Link
                    to={`/destinations/${slug}`}
                    style={{ color: "blue", textDecoration: "underline" }}
                  >
                    View Details
                  </Link>
                </Col>
              </Row>
            );
          })}
        </Container>
        {/*  Thailand Tour packages component */}
        <Container className="mt-8">
          <div className="text-center mb-10">
            <h2 style={{ marginBottom: "40px", textDecoration: "underline" }}>
              Thailand Tour Packages
            </h2>
          </div>
          <Row className="g-4">
            {tours.map((tour) => (
              <Col key={tour.id} md={3}>
                {/* Set to md={3} for 4 cards in a row */}
                <Card
                  style={{
                    backgroundColor: getRandomColor(),
                    border: "none",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%", // Make card take full height of the column
                    borderRadius: "18px", // Add border radius
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={thailand} // Replace with your actual image path
                    alt={tour.title}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: "18px", // Match border radius
                      borderTopRightRadius: "18px", // Match border radius
                    }}
                  />
                  <div
                    style={{
                      // backgroundColor: getRandomColor(),
                      padding: "10px",
                      borderBottomLeftRadius: "18px", // Match border radius
                      borderBottomRightRadius: "18px", // Match border radius
                    }}
                  >
                    <Card.Body style={{ flexGrow: 1 }}>
                      {/* Allow body to grow */}
                      <Card.Subtitle className="text-muted mb-2">
                        {tour.nights}
                      </Card.Subtitle>
                      <Card.Title>{tour.title}</Card.Title>
                      <Card.Text className="text-muted">
                        <i className="fas fa-map-marker-alt"></i>{" "}
                        {tour.location}
                      </Card.Text>
                      <hr
                        style={{
                          borderTop: "1px solid grey",
                          margin: "10px 0",
                        }}
                      />
                      <Card.Text className="fw-bold">
                        Price:{" "}
                        <span
                          style={{
                            color:
                              tour.price === "On Request" ? "#555" : "#f00",
                          }}
                        >
                          {tour.price}
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
          {/* View packages button  */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Button
              style={{
                color: "white",
                backgroundColor: "orange",
                border: "none",
                padding: "10px 20px",
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: "5px",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "darkorange";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "orange";
                e.target.style.transform = "scale(1)";
              }}
            >
              VIEW PACKAGES
            </Button>
          </div>
        </Container>
        {/* Faq section  */}
        <div className="container my-5">
          <h3 className="text-center mb-4">
            FAQ Hill Station Tour Packages in India
          </h3>
          <Accordion>
            {faqData.map((item, index) => (
              <Card key={index} className="mb-3 shadow-sm border-0">
                <Card.Header
                  className="d-flex justify-content-between align-items-center  text-black"
                  style={{ borderRadius: "5px" }}
                >
                  <span className="font-weight-bold">{item.question}</span>
                  <Button
                    variant="light"
                    onClick={() => toggleFAQ(index)}
                    aria-controls={`faq-content-${index}`}
                    aria-expanded={activeIndex === index}
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      padding: "0 10px",
                      borderRadius: "50%",
                      lineHeight: "1",
                    }}
                  >
                    {activeIndex === index ? "−" : "+"}
                  </Button>
                </Card.Header>
                <Accordion.Collapse
                  eventKey={index.toString()}
                  in={activeIndex === index}
                >
                  <Card.Body className="bg-light text-secondary">
                    <p className="mb-0">{item.answer}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default ThailandTouristPlaces;
