import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import nanital from "../assets/nanital.png";
import { FaBed, FaShuttleVan, FaUserTie, FaAward } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import {
  fetchItineraryData,
  fetchPackData,
  fetchPackDataWithId,
} from "../models/pack";

const features = [
  { icon: <FaBed />, title: "Accommodations" },
  { icon: <FaShuttleVan />, title: "Seamless Transfers" },
  { icon: <FaUserTie />, title: "Impeccable Service" },
  { icon: <FaAward />, title: "Unmatched Expertise" },
];

const states = [
  "Andaman Tour Packages",
  "Arunachal Pradesh Tour Packages",
  "Chhattisgarh Tour Packages",
  "Leh Ladakh Tour Packages",
  "Lakshadweep Tour Packages",
  "Bihar Tour Packages",
  "Daman and Diu Tour Packages",
  "Manipur Tour Packages",
  "Mizoram Tour Packages",
  "Nagaland Tour Packages",
  "Punjab Tour Packages",
  "Sikkim Tour Packages",
  "Andhra Pradesh Tour Packages",
  "Pondicherry Tour Packages",
  "Tripura Tour Packages",
  "Telangana Tour Packages",
  "Orissa Tour Packages",
  "Meghalaya Tour Packages",
  "Tamil Nadu Tour Packages",
  "Karnataka Tour Packages",
  "Goa Tour Packages",
  "Uttar Pradesh Tour Packages",
  "Madhya Pradesh Tour Packages",
  "New Delhi Tour Packages",
  "Gujarat Tour Packages",
  "Assam Tour Packages",
  "Jammu and Kashmir Tour Packages",
  "Kerala Tour Packages",
  "Rajasthan Tour Packages",
  "Maharashtra Tour Packages",
];
const formatNameForUrl = (name) => {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

// eslint-disable-next-line no-unused-vars
const itineraryDetails = [
  [
    "The beautiful journey of your Uttarakhand starts as you arrive at the Dehradun airport/railway station. After that, you will be picked up from there to reach your pre-booked hotel in a comfortable and private car. On your arrival, you will check in your hotel and freshen up. After that, you will enjoy your Dehradun sightseeing tour and cover the famous tourist places.",
    "You will visit Tapkeshwar Temple and Mind Rolling Monastery. Next, you will explore Robber’s Cave, Malsi Deer Park, and Forest Research Institute. Later, you move towards shopping at the famous Paltan Bazar. After that, you will return to your hotel and have your mouth-watering dinner, then go to your bed for sleep.",
  ],
  [
    "Details for Day 2: You will travel from Dehradun to Mussoorie, enjoying the scenic views along the way. Upon arrival, you will check into your hotel and start your sightseeing tour, visiting popular attractions such as Kempty Falls and Mall Road.",
  ],
  [
    "Details for Day 3: The journey continues from Mussoorie to Nainital. You will enjoy the beautiful landscapes and visit Nainital Lake for boating and other activities.",
  ],
  [
    "Details for Day 4: You will explore Nainital's attractions, including Naina Devi Temple and Snow View Point, before your departure.",
  ],
];

const TourOfIndia = () => {
  const [showMore, setShowMore] = useState(false);
  const location = useLocation(); // Access location object
  const [tripDetails, setTripDetails] = useState(null);
  const [activeDay, setActiveDay] = useState(null);
  const [relatedPackageData, setRelatedPackageData] = useState(null);
  // Function to handle accordion toggle
  const handleToggle = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };
  // Extract tripId from location.state
  const tripId = location.state?.tripId;
  const subcategoryId = location.state?.subcategoryId;
  useEffect(() => {
    const fetchData = async () => {
      if (tripId) {
        console.log("subcategory", subcategoryId);
        console.log("Fetching data for tripId:", tripId);
        const packageData = await fetchPackDataWithId(tripId);
        const itineraryData = await fetchItineraryData(tripId);
        const relatedPackageData = await fetchPackData(subcategoryId);
        console.log("Fetched related Data:", relatedPackageData);
        console.log("Fetched Data:", packageData);
        console.log("packageData._id:", packageData._id);
        console.log("relatedPackage._id:", relatedPackageData[0]._id);

        // setTripDetails(data);
        const filteredRelatedPackageData = relatedPackageData.filter(
          (relatedPackage) => relatedPackage._id !== packageData._id
        );
        setRelatedPackageData(filteredRelatedPackageData);
        if (packageData && itineraryData) {
          setTripDetails({
            ...packageData,
            itinerary: itineraryData,
          });
          // console.log("abc", tripDetails.itinerary.days);
        }
      } else {
        console.log("No tripId provided, skipping fetch");
      }
    };

    fetchData();
  }, [tripId, subcategoryId]);

  useEffect(() => {
    if (tripDetails) {
      console.log("Updated tripDetails:", relatedPackageData); // Log tripDetails after it's updated
    }

    // Function to check if the tripDetails should be displayed
  }, [tripDetails, relatedPackageData]); // Run when either tripDetails or relatedPackageData changes
  // // This will run when tripDetails state changes

  if (!tripDetails) {
    return <p>Loading...</p>;
  }
  // Function to handle toggling of accordion items
  // const handleToggle = (eventKey) => {
  //   setExpanded(expanded === eventKey ? null : eventKey);
  // };
  return (
    <div>
      {/* <Header /> */}
      <div style={{ overflowX: "hidden" }}>
        {/* Breadcrumb Section */}
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
              {/* Dynamic Breadcrumb */}
              Home / {formatNameForUrl(tripDetails.subcategory.name)} /{" "}
              {tripDetails.name}
            </span>
          </Container>
        </div>

        {/* Image Section */}
        <div>
          <div
            style={{
              height: "400px",
              backgroundImage: `url(${tripDetails.image || nanital})`, // Using trip.image or fallback to nanital
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              color: "white",
              borderRadius: "8px",
              width: "100%", // Ensure the div doesn't overflow horizontally
              overflow: "hidden", // Prevent any overflow
            }}
          >
            <Row className="h-100">
              {/* Left Section */}
              <Col
                md={9}
                className="d-flex flex-column justify-content-end"
                style={{
                  background: "rgba(0, 0, 0, 0.5)", // Transparent overlay for better text visibility
                  padding: "25px 20px",
                  maxWidth: "100%", // Ensure this doesn't overflow
                }}
              >
                <div>
                  <span
                    style={{
                      backgroundColor: "brown",
                      color: "white",
                      padding: "7px 10px",
                      borderRadius: "5px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {tripDetails.duration} {/* Dynamic Duration */}
                  </span>
                </div>
                <h4 className="mt-2">{tripDetails.name}</h4>{" "}
                {/* Dynamic Trip Name */}
                <p className="mb-0">
                  <i className="bi bi-geo-alt"></i> {tripDetails.route}{" "}
                  {/* Dynamic   Route */}
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "yellow",
                  }}
                >
                  {tripDetails.price === "Price on Request"
                    ? "Price On Request"
                    : `₹${tripDetails.price}`}{" "}
                  {/* Dynamic Price */}
                </p>
              </Col>

              {/* Right Section - Form */}
              <Col
                md={3}
                className="d-flex align-items-center justify-content-center"
                style={{
                  color: "black",
                  // border: "2px solid green",
                  textAlign: "center",
                  borderRadius: "8px",
                  maxWidth: "100%",
                  height: "100%", // Ensure column takes up full height
                  // marginLeft: "1px",
                }}
              >
                <Form
                  style={{
                    width: "100%", // Ensure form takes up full width of the column
                    maxWidth: "400px", // Optional: limit form width for better visuals
                    marginRight: "11px",
                  }}
                  className="mr-13"
                >
                  <h5
                    className="text-center mb-3"
                    style={{
                      backgroundColor: "orange",
                      color: "white",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    Plan Your Dream Vacation
                  </h5>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Control type="text" placeholder="Type your name *" />
                  </Form.Group>
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Type your email address *"
                    />
                  </Form.Group>
                  <Form.Group controlId="formPhone" className="mb-3">
                    <div className="d-flex">
                      <Form.Select style={{ width: "25%", marginRight: "5px" }}>
                        <option>🇮🇳 +91</option>
                        <option>🇺🇸 +1</option>
                        <option>🇬🇧 +44</option>
                      </Form.Select>
                      <Form.Control type="text" placeholder="Mobile No. *" />
                    </div>
                  </Form.Group>
                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="formTravelDate">
                        <Form.Control type="date" placeholder="Travel Date" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formNumberOfPersons">
                        <Form.Control
                          type="number"
                          placeholder="No. of Person"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group controlId="formAdditionalInfo" className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder="Additional Information (Optional)"
                    />
                  </Form.Group>
                  <Button
                    variant="danger"
                    type="submit"
                    className="w-100"
                    style={{
                      backgroundColor: "orange",
                      borderColor: "orange",
                      fontWeight: "bold",
                    }}
                  >
                    SUBMIT NOW
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      {/* Overview grey headline */}
      <div style={{ height: "35px", backgroundColor: "#f0f0f0" }}>
        <div
          style={{
            height: "100%",
            padding: "0 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Center the items
          }}
        >
          <button
            style={{
              margin: "0 10px", // Margin between buttons
              padding: "5px 10px", // Padding inside buttons
              border: "none", // Remove default border
              borderRadius: "5px", // Rounded corners
              //   backgroundColor: "#007bff", // Button background color
              color: "black", // Text color
              cursor: "pointer", // Pointer cursor on hover
              transition: "background-color 0.3s", // Smooth transition for hover effect
            }}
          >
            Overview
          </button>
          <button
            style={{
              margin: "0 10px", // Margin between buttons
              padding: "5px 10px", // Padding inside buttons
              border: "none", // Remove default border
              borderRadius: "5px", // Rounded corners
              //   backgroundColor: "#007bff", // Button background color
              color: "black", // Text color
              cursor: "pointer", // Pointer cursor on hover
              transition: "background-color 0.3s", // Smooth transition for hover effect
            }}
          >
            Trip Highlights
          </button>
          <button
            style={{
              margin: "0 10px", // Margin between buttons
              padding: "5px 10px", // Padding inside buttons
              border: "none", // Remove default border
              borderRadius: "5px", // Rounded corners
              //   backgroundColor: "#007bff", // Button background color
              color: "black", // Text color
              cursor: "pointer", // Pointer cursor on hover
              transition: "background-color 0.3s", // Smooth transition for hover effect
            }}
          >
            Itinerary
          </button>
          <button
            style={{
              margin: "0 10px", // Margin between buttons
              padding: "5px 10px", // Padding inside buttons
              border: "none", // Remove default border
              borderRadius: "5px", // Rounded corners
              //   backgroundColor: "#007bff", // Button background color
              color: "black", // Text color
              cursor: "pointer", // Pointer cursor on hover
              transition: "background-color 0.3s", // Smooth transition for hover effect
              fontWeight: "bold", // Bold text for "Inquire Now"
            }}
          >
            Inquire Now
          </button>
        </div>
      </div>

      {/* Trip overview code */}
      <Container className="my-4">
        {/* Overview Section */}
        <Row className="mb-4">
          <Col>
            <h5>Overview</h5>
            <p
              style={{
                overflow: showMore ? "visible" : "hidden",
                display: "-webkit-box",
                WebkitLineClamp: showMore ? "none" : 3, // Show only 3 lines when collapsed
                WebkitBoxOrient: "vertical",
                textOverflow: "ellipsis",
              }}
            >
              {tripDetails.details}
            </p>
            <button
              onClick={() => setShowMore(!showMore)}
              style={{
                cursor: "pointer",
                color: "blue",
                textDecoration: "underline",
                background: "none",
                border: "none",
                padding: 0,
                font: "inherit",
              }}
            >
              {showMore ? "Read Less" : "Read More"}
            </button>

            <hr style={{ borderColor: "grey" }} />
          </Col>
        </Row>

        {/* Trip Highlights Section */}
        <Row className="mb-4">
          <Col>
            <h5
              style={{
                fontWeight: "bold",
                color: "#333",
                textTransform: "",
              }}
            >
              Trip Highlights
            </h5>
            <ul
              style={{
                listStyle: "none", // Remove default bullets
                paddingLeft: "0", // Reset padding for clean alignment
                lineHeight: "1.8",
                color: "#444", // Slightly darker text for readability
              }}
            >
              {tripDetails.highlights &&
                tripDetails.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center", // Align tick with text
                      marginBottom: "8px", // Add spacing between items
                      padding: "5px 0", // Add padding for a cleaner look
                      borderBottom:
                        index < tripDetails.highlights.length - 1
                          ? "1px dashed #ddd"
                          : "none", // Add subtle divider
                    }}
                  >
                    {/* Tick Icon from Font Awesome */}
                    <i
                      className="fa fa-check"
                      style={{
                        color: "#28a745", // Green color for the tick
                        marginRight: "10px",
                      }}
                    ></i>
                    <span style={{ fontSize: "0.95rem" }}>{highlight}</span>
                  </li>
                ))}
            </ul>
            <hr style={{ borderColor: "#ddd", marginTop: "20px" }} />
          </Col>
        </Row>

        {/* Itinerary Detail */}
        <div>
          <h5 className="mb-4">Itinerary Detail</h5>
          {/* <Accordion activeKey={expanded}>
            {itineraryDetails.map((details, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header
                  onClick={() => handleToggle(index.toString())}
                >
                  <strong className="ml-10">Day {index + 1}:</strong>
                  <span className="ml-2">{`Details for Day ${index + 1}`}</span>
                </Accordion.Header>
                <Accordion.Body>
                  {details.map((detail, detailIndex) => (
                    <p key={detailIndex}>{detail}</p>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion> */}

          <div
            style={{
              position: "relative",
              marginTop: "20px",
              padding: "20px",
            }}
          >
            {/* <h2 style={{ marginBottom: "20px" }}>Itinerary Detail</h2> */}

            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Vertical Line */}
              <div
                style={{
                  width: "4px",
                  backgroundColor: "#ff6f61",
                  position: "absolute",
                  height: "100%",
                  left: "0",
                  top: "0",
                  marginLeft: "15px",
                }}
              ></div>

              {/* Iterate through the itinerary */}
              {tripDetails &&
              tripDetails.itinerary &&
              tripDetails.itinerary.length > 0 ? (
                tripDetails.itinerary[0].days.map((dayItem) => (
                  <div key={dayItem._id}>
                    {" "}
                    {/* Using _id as key instead of day to avoid potential conflicts */}
                    {/* Day Heading */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "20px",
                        paddingLeft: "30px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleToggle(dayItem.day)}
                    >
                      <div
                        style={{
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                          color: "#ff6f61",
                          marginRight: "10px",
                          flexShrink: 0,
                        }}
                      >
                        Day {dayItem.day}
                      </div>
                      <div style={{ flex: 1 }}>
                        <span style={{ fontSize: "1rem", color: "#333" }}>
                          {dayItem.title}
                        </span>
                      </div>
                      <div
                        style={{
                          marginLeft: "auto",
                          fontSize: "1.2rem",
                          color: "#ff6f61",
                        }}
                      >
                        {activeDay === dayItem.day ? "▲" : "▼"}
                      </div>
                    </div>
                    {/* Day Details */}
                    {activeDay === dayItem.day && (
                      <div
                        style={{
                          marginLeft: "30px",
                          padding: "10px 20px",
                          borderLeft: "2px solid #ff6f61",
                          transition: "all 0.3s ease-in-out",
                        }}
                      >
                        <p>{dayItem.description}</p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p>No itinerary available</p> // In case there are no itinerary days
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* similar related places card component */}

      <div className="mt-5 my-4">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <h4
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                Related Tour Packages
              </h4>
              <hr
                style={{
                  width: "40%",
                  margin: "10px auto",
                  borderWidth: "2px",
                }}
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            {/* Iterate over filteredRelatedPackageData and create Card for each package */}
            <div className="mt-5 my-4">
              <h4
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                Related Tour Packages
              </h4>
              <hr
                style={{
                  width: "40%",
                  margin: "10px auto",
                  borderWidth: "2px",
                }}
              />
              <Row className="justify-content-center">
                {/* Iterate over relatedPackageData and create Card for each package */}
                {relatedPackageData.map((place, index) => (
                  <Col key={index} xs={12} sm={6} md={3} className="mb-4">
                    <Card
                      style={{
                        width: "100%",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        borderRadius: "0.25rem",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      }}
                      className="card-hover"
                    >
                      <Image
                        src={place.image || nanital} // Use placeholder if image is unavailable
                        alt={place.name}
                        fluid
                        style={{
                          objectFit: "cover",
                          height: "180px", // Adjust image height
                          zIndex: 1,
                        }}
                      />
                      {/* Title at the Bottom */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          width: "100%",
                          backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark transparent background
                          color: "#fff",
                          textAlign: "center",
                          padding: "10px",
                          zIndex: 2,
                          fontSize: "1rem",
                        }}
                      >
                        <h6 style={{ fontWeight: "bold" }}>{place.name}</h6>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Row>
        </Container>
      </div>

      {/* states part */}
      <Container>
        <h3 className="text-center mb-4">Explore Other States</h3>
        <Row>
          {states.map((state, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
              <Card
                className="text-center p-2 shadow-sm"
                style={{ backgroundColor: "grey", color: "white" }}
              >
                <Card.Text>{state}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* card component */}
      <Container className="my-3">
        <Row className="justify-content-center">
          {features.map((feature, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-4">
              <Card
                className="text-center p-3 shadow-sm"
                style={{
                  transition: "background-color 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ff6600";
                  e.currentTarget.style.color = "white"; // Optional
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.color = ""; // Optional
                }}
              >
                <div
                  className="mb-3"
                  style={{ fontSize: "2rem", color: "black" }}
                >
                  {feature.icon}
                </div>
                <Card.Text>{feature.title}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TourOfIndia;
