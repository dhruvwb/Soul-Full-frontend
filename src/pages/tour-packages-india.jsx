import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  Form,
  Row,
  Pagination,
  Dropdown,
  DropdownButton,
  Button,
  Accordion,
} from "react-bootstrap";
// import Header from "../helpers/components/header";
import { useNavigate } from "react-router-dom";
import { getSubcategoryById } from "../models/subcategories.js";
import { fetchPackData } from "../models/pack.js";
import Seo from "../helpers/components/Seo";
import tajMahal from "../assets/TahMahal.jpg";

// const tripsData = [
//   {
//     id: 1,
//     title: "3 Days Trip to Goa",
//     duration: "2 N / 3 D",
//     location: "Goa (2N)",
//     price: "7,000",
//     image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
//     highlights: "Highlights",
//   },
//   {
//     id: 2,
//     title: "Delightful Goa Vacation",
//     duration: "3 N / 4 D",
//     location: "Goa (3N)",
//     price: "9,500",
//     image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
//     highlights: "Highlights",
//   },
//   {
//     id: 3,
//     title: "Beach Getaway in Kerala",
//     duration: "4 N / 5 D",
//     location: "Kerala (4N)",
//     price: "15,000",
//     image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
//     highlights: "Highlights",
//   },
//   {
//     id: 4,
//     title: "Tropical Andaman Escape",
//     duration: "5 N / 6 D",
//     location: "Andaman (5N)",
//     price: "Price on Request",
//     image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
//     highlights: "Highlights",
//   },
//   {
//     id: 5,
//     title: "Charming Lakshadweep Vacation",
//     duration: "3 N / 4 D",
//     location: "Lakshadweep (3N)",
//     price: "20,000",
//     image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
//     highlights: "Highlights",
//   },
//   {
//     id: 6,
//     title: "Goan Heritage Tour",
//     duration: "2 N / 3 D",
//     location: "Goa (2N)",
//     price: "10,000",
//     image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
//     highlights: "Highlights",
//   },
// ];

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
const TourPackageIndia = ({ subcategoryId }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  // const [subcategoryId, setSubcategoryId] = useState(
  //   localStorage.getItem("selectedSubcategoryId")
  // );
  const [tripsData, setTripsData] = useState([]);

  const [subcategoryData, setSubcategoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const totalPages = 2;
  const navigate = useNavigate();

  const seoTitle =
    subcategoryData?.name || subcategoryData?.title || "Tour Packages";
  const seoDescription =
    subcategoryData?.description ||
    "Discover curated holiday packages across India with Soulful India Tours.";
  const seoImage =
    subcategoryData?.imageUrl || subcategoryData?.image || tajMahal;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // console.log("useEffect triggered with subcategoryId:", subcategoryId); // Debug log

    const fetchData = async () => {
      if (!subcategoryId) {
        console.error("Subcategory ID not found!");
        setLoading(false);
        return;
      }

      try {
        const data = await getSubcategoryById(subcategoryId); // Fetch data using ID
        // console.log("Fetched subcategory data:", data); // Debug log
        if (!data) {
          console.error("Sorry, no subcategory data found.");
          setSubcategoryData(null);
        } else {
          setSubcategoryData(data);
        }
      } catch (error) {
        console.error("Error fetching subcategory data:", error);
      }

      try {
        const packs = await fetchPackData(subcategoryId); // Fetch data using the model
        // console.log("Fetched packs data:", packs); // Debug log
        if (!packs || packs.length === 0) {
          console.error(
            "Sorry, no packages available for the selected subcategory."
          );
          setTripsData(null);
        } else {
          setTripsData(packs);
        }
      } catch (err) {
        console.error("Error fetching packs data:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [subcategoryId]);

  const formatNameForUrl = (name) => {
    return name
      .toLowerCase() // Convert to lowercase
      .replace(/ /g, "-") // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, ""); // Remove special characters
  };

  if (loading) {
    return (
      <>
        <Seo title="Tour Packages" description={seoDescription} image={seoImage} />
        <p>Loading...</p>
      </>
    );
  }

  if (!subcategoryData) {
    return (
      <>
        <Seo title="Tour Packages" description={seoDescription} image={seoImage} />
        <p>Failed to load subcategory data.</p>
      </>
    );
  }
  return (
    <div>
      <Seo title={seoTitle} description={seoDescription} image={seoImage} />
      {/* <Header /> */}
      {/* <Header /> */}
      {/* Interset part */}
      <div style={{ height: "35px", backgroundColor: "#f0f0f0" }}>
        <Container
          fluid
          style={{
            height: "100%",
            padding: "0 10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>
            Home &gt;&gt; {subcategoryData.category.name} &gt;&gt;{" "}
            {subcategoryData.name}
          </span>
        </Container>
      </div>

      {/* Text part Code */}
      <Container
        className="d-flex flex-column justify-content-center"
        style={{
          //   minHeight: "100vh", // Full height container if needed
          padding: "10px",
          textAlign: "center", // Center-align text
          //   backgroundColor: "#f8f9fa", // Optional light background
        }}
      >
        <h3>
          {subcategoryData.name && `${subcategoryData.name} - Tour Packages`}
        </h3>
        <p style={{ textAlign: "justify" }}>
          {subcategoryData.description || "Description not available."}
        </p>
      </Container>

      {/* Filter and Enquire code */}

      <div style={{}} className="mt-3">
        <Container style={{}}>
          <Row>
            {/* CheckBox code */}
            <Col style={{ flex: "1" }}>
              <Card
                style={{
                  width: "20rem",
                  backgroundColor: "#f0f0f0",
                  padding: "1px",
                  //   height: "100%",
                }}
              >
                <Card.Body>
                  {/* Filter by Duration */}
                  <Card.Title>Filter by Duration</Card.Title>
                  <Form>
                    <Form.Check
                      type="radio"
                      id="all"
                      name="duration"
                      label="All"
                      defaultChecked
                    />
                    <Form.Check
                      type="radio"
                      id="1-7-days"
                      name="duration"
                      label="(1-7) Days"
                    />
                    <Form.Check
                      type="radio"
                      id="8-15-days"
                      name="duration"
                      label="(8-15) Days"
                    />
                    <Form.Check
                      type="radio"
                      id="15plus-days"
                      name="duration"
                      label="(+15) Days"
                    />
                  </Form>

                  {/* Separator */}
                  <hr />

                  {/* Cities / Destinations */}
                  <Card.Title>Cities / Destinations</Card.Title>
                  <div style={{ maxHeight: "250px", overflowY: "auto" }}>
                    <Form>
                      {[
                        "Andaman Islands (3)",
                        "Bhuj (1)",
                        "Chennai (2)",
                        "Cochin (Kochi) (1)",
                        "Covelong (1)",
                        "Daman (1)",
                        "Delhi (1)",
                        "Diu (1)",
                        "Goa (9)",
                        "Havelock Island (5)",
                        "Jaipur (2)",
                      ].map((city, index) => (
                        <Form.Check
                          key={index}
                          type="checkbox"
                          id={`city-${index}`}
                          label={city}
                        />
                      ))}
                    </Form>
                  </div>

                  {/* Separator */}
                  <hr />

                  {/* Other Themes */}
                  <Card.Title>Other Themes</Card.Title>
                  <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                    <ul style={{ paddingLeft: "1rem", listStyleType: "none" }}>
                      {[
                        "Adventure Tour Packages",
                        "Ayurveda Tour & Spa Holidays",
                        "Backwaters Tour Packages",
                        "Beach Holiday Packages",
                        "Budget Tour Packages Outside India",
                        "Family Tour Packages",
                        "First Time Trip",
                        "Forts and Palaces Tours",
                        "Golden Triangle",
                        "Heritage and Cultural Tours",
                        "Hill Station Tour Packages",
                        "Himalayas Tour Packages",
                        "Honeymoon Packages",
                      ].map((theme, index) => (
                        <li key={index} style={{ marginBottom: "0.5rem" }}>
                          <span
                            style={{ color: "orange", marginRight: "0.5rem" }}
                          >
                            ►
                          </span>
                          {theme}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Right part code starts here */}
            <Col style={{ flex: "4" }}>
              <div style={{ padding: "10px" }}>
                {/* Title Row */}
                <Row>
                  <div
                    style={{
                      padding: "16px 0",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    Best Tour Packages in India
                  </div>
                </Row>

                {/* Pagination and Sort Row */}
                <Row>
                  <div
                    style={{
                      display: "flex",
                      //   border: "2px solid brown",
                      alignItems: "center",
                      textAlign: "center",
                      justifyContent: "space-between",
                      width: "100%", // Ensure it takes full width
                      //   padding: "5  px 0", // Optional padding for aesthetics
                    }}
                  >
                    {/* Pagination Section */}
                    {/* <div> */}
                    <p>
                      Showing: {currentPage === 1 ? "1-20" : "21-22"} out of 22
                    </p>
                    <Pagination>
                      <Pagination.Prev
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        Previous
                      </Pagination.Prev>
                      {[...Array(totalPages).keys()].map((_, idx) => (
                        <Pagination.Item
                          key={idx + 1}
                          active={currentPage === idx + 1}
                          onClick={() => handlePageChange(idx + 1)}
                        >
                          {idx + 1}
                        </Pagination.Item>
                      ))}
                      <Pagination.Next
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </Pagination.Next>
                    </Pagination>
                    {/* </div> */}

                    {/* Sort By Section */}
                    <DropdownButton id="dropdown-basic-button" title="Sort by">
                      <Dropdown.Item href="#/action-1">
                        Price: Low to High
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Price: High to Low
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Popularity
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-4">Rating</Dropdown.Item>
                    </DropdownButton>
                  </div>
                </Row>
              </div>

              {/* Enquire now code */}
              <div>
                {/* <h2>Tour Packages in India</h2> */}
                <div>
                  {tripsData &&
                  Array.isArray(tripsData) &&
                  tripsData.length > 0 ? (
                    tripsData.map((trip) => {
                      const isPriceOnRequest =
                        trip.price === "Price on Request";
                      return (
                        <Card
                          key={trip._id}
                          className="mb-4 shadow-sm rounded-3 transition-all duration-300 ease-in-out"
                          style={{
                            border: "none",
                            cursor: "pointer",
                            transform: "scale(1)",
                            transition:
                              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.boxShadow =
                              "0px 4px 15px rgba(0, 0, 0, 0.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <Card.Body>
                            <Row className="align-items-center">
                              {/* Left Section: Image */}
                              <Col
                                xs={12}
                                sm={4}
                                className="d-flex justify-content-center mb-3 mb-sm-0"
                              >
                                <img
                                  src={trip.image ? trip.image : tajMahal}
                                  alt="Destination"
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "cover",
                                    maxWidth: "250px",
                                    borderRadius: "8px",
                                  }}
                                />
                              </Col>

                              {/* Center Section: Trip Details */}
                              <Col xs={12} sm={6}>
                                <h5 className="fw-bold mb-1">{trip.name}</h5>{" "}
                                {/* Using trip.name instead of title */}
                                <p
                                  className="mb-1 text-muted"
                                  style={{ fontSize: "14px" }}
                                >
                                  <span style={{ fontWeight: "bold" }}>
                                    {trip.duration}
                                  </span>
                                </p>
                                <p
                                  className="mb-1 text-muted"
                                  style={{ fontSize: "14px" }}
                                >
                                  <span style={{ fontWeight: "bold" }}>
                                    {trip.route}
                                  </span>
                                </p>
                                <p
                                  className="mb-1 text-muted"
                                  style={{ fontSize: "14px" }}
                                >
                                  <i className="bi bi-check-circle-fill text-success me-1"></i>
                                  {trip.highlights}
                                </p>
                              </Col>

                              {/* Right Section: Price and Actions */}
                              <Col xs={12} sm={2} className="text-start">
                                {!isPriceOnRequest && (
                                  <>
                                    <p className="mb-1 text-muted">From</p>
                                    <h5 className="text-danger fw-bold">
                                      ₹{trip.price}
                                    </h5>
                                    <p className="mb-3 text-muted">
                                      Per Person
                                    </p>
                                  </>
                                )}
                                <div>
                                  <Button
                                    variant="outline-primary"
                                    size="sm"
                                    className="mb-2"
                                    onClick={() =>
                                      navigate(
                                        `/${formatNameForUrl(
                                          trip.subcategory.name
                                        )}/${formatNameForUrl(trip.name)}`,
                                        {
                                          state: {
                                            tripId: trip._id,
                                            subcategoryId: trip.subcategory._id,
                                          },
                                        }
                                      )
                                    }
                                    style={{ width: "105px" }}
                                  >
                                    View Details
                                  </Button>
                                  <Button
                                    variant="danger"
                                    size="sm"
                                    style={{ width: "105px" }}
                                  >
                                    Enquire Now
                                  </Button>
                                </div>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      );
                    })
                  ) : (
                    <p>Sorry, no packages available</p>
                  )}
                </div>
              </div>

              <Row>
                <div
                  style={{
                    display: "flex",
                    //   border: "2px solid brown",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "space-between",
                    width: "100%", // Ensure it takes full width
                    //   padding: "5  px 0", // Optional padding for aesthetics
                  }}
                >
                  {/* Pagination Section */}
                  {/* <div> */}
                  <p>
                    Showing: {currentPage === 1 ? "1-20" : "21-22"} out of 22
                  </p>
                  <Pagination>
                    <Pagination.Prev
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Pagination.Prev>
                    {[...Array(totalPages).keys()].map((_, idx) => (
                      <Pagination.Item
                        key={idx + 1}
                        active={currentPage === idx + 1}
                        onClick={() => handlePageChange(idx + 1)}
                      >
                        {idx + 1}
                      </Pagination.Item>
                    ))}
                    <Pagination.Next
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Pagination.Next>
                  </Pagination>
                  {/* </div> */}

                  {/* Sort By Section */}
                  <DropdownButton id="dropdown-basic-button" title="Sort by">
                    <Dropdown.Item href="#/action-1">
                      Price: Low to High
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Price: High to Low
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Popularity</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Rating</Dropdown.Item>
                  </DropdownButton>
                </div>
              </Row>

              {/* Question and answer section */}

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
                        <span className="font-weight-bold">
                          {item.question}
                        </span>
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
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TourPackageIndia;
