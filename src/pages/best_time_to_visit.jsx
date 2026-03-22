import React, { useState } from "react";
import Header from "../helpers/components/header";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import thailand from "../assets/thailand.png";
import { ChevronDown } from "react-bootstrap-icons";

const tableData = [
  {
    id: 1,
    package: "Winter Wonderland",
    nightsDays: "3 Nights / 4 Days",
    price: 20000,
  },
  {
    id: 2,
    package: "Snowy Adventure",
    nightsDays: "5 Nights / 6 Days",
    price: 35000,
  },
  {
    id: 3,
    package: "Mountain Escape",
    nightsDays: "4 Nights / 5 Days",
    price: 28000,
  },
  {
    id: 4,
    package: "Frozen Peaks",
    nightsDays: "6 Nights / 7 Days",
    price: 45000,
  },
  {
    id: 5,
    package: "Ice Festival",
    nightsDays: "2 Nights / 3 Days",
    price: 15000,
  },
  {
    id: 6,
    package: "Alpine Adventure",
    nightsDays: "7 Nights / 8 Days",
    price: 55000,
  },
  {
    id: 7,
    package: "Snowstorm Getaway",
    nightsDays: "4 Nights / 5 Days",
    price: 30000,
  },
  {
    id: 8,
    package: "Chilly Retreat",
    nightsDays: "3 Nights / 4 Days",
    price: 22000,
  },
];

const blogCards = [
  {
    image: { thailand }, // Replace with actual image paths
    title: "Experience Thailand",
    text: "Discover the beauty of Thailand with amazing experiences.",
  },
  {
    image: "path/to/image2.jpg", // Replace with actual image paths
    title: "Holiday Packages",
    text: "Explore travel packages for your dream vacation in Thailand.",
  },
  {
    image: "path/to/image4.jpg", // Replace with actual image paths
    title: "Adventure Awaits",
    text: "Embark on thrilling adventures in Thailand's hidden gems.",
  },
];

const cardData = [
  {
    id: 1,
    title: "Manali",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    description:
      "Owing to unparalleled beauty, Manali is India’s honeymoon capital. It offers endless adventure activities like skiing & paragliding and has an abundant natural charm.",
  },
  {
    id: 2,
    title: "Goa",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    description:
      "Goa is known for its beautiful beaches, vibrant nightlife, and Portuguese architecture. A perfect destination for those seeking a mix of relaxation and adventure.",
  },
  {
    id: 3,
    title: "Rishikesh",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    description:
      "Rishikesh, known as the Yoga Capital of the World, offers spiritual experiences along the Ganges River. It's also famous for white-water rafting and adventure sports.",
  },
  {
    id: 4,
    title: "Leh Ladakh",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    description:
      "Leh Ladakh is a paradise for adventure enthusiasts and nature lovers. Surrounded by high mountain ranges, it offers mesmerizing landscapes and trekking routes.",
  },
  {
    id: 5,
    title: "Kerala",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    description:
      "Kerala, also known as ‘God’s Own Country’, is famous for its serene backwaters, rich cultural heritage, and lush green landscapes, making it an ideal place for a relaxing getaway.",
  },
  {
    id: 6,
    title: "Darjeeling",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    description:
      "Darjeeling, known for its tea gardens and the iconic toy train, offers a view of the snow-capped Kanchenjunga. A perfect place for a serene and scenic escape.",
  },
  {
    id: 7,
    title: "Udaipur",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    description:
      "Udaipur, known as the 'City of Lakes', is famous for its beautiful lakes, royal palaces, and temples, making it one of the most romantic destinations in India.",
  },
  {
    id: 8,
    title: "Jaipur",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    description:
      "Jaipur, the capital city of Rajasthan, is known for its rich history, palaces, forts, and vibrant culture. It offers a perfect blend of tradition and modernity.",
  },
];

const touristDestinations = [
  {
    name: "Goa - The Fun Capital of India",
    description:
      "Enjoy sunbathing, beach parties, seafood, and Bollywood shows. Visit the flea markets and dance at the open stage.",
    // attractions: "Christmas and New Year beach parties, Flea Markets",
  },
  {
    name: "Rajasthan - The Land of Royals",
    description:
      "Explore majestic palaces and forts, enjoy folk music, Rajasthani cuisine, and desert safaris.",
    attractions: "Forts and palaces, Folk music, Desert safari",
  },
  {
    name: "Udaipur - The City of Lakes",
    description:
      "Experience the beauty of lakes and palaces with a boat ride on Lake Pichola.",
    attractions: "City Palace, Jag Mandir, Lake Pichola",
  },
  {
    name: "Jaipur - The Heritage City",
    description: "Discover palaces, forts, and rich culture.",
    attractions: "Hawa Mahal, Amer Fort, Jal Mahal, City Palace",
  },
  {
    name: "Delhi - The City of Friendly People",
    description:
      "Explore historical monuments, heritage sites, and shopping hubs.",
    attractions: "Qutub Minar, Red Fort, Humayun’s Tomb",
  },
  {
    name: "Kerala - God's Own Land",
    description: "Enjoy serene backwaters, houseboat tours, and Ayurveda spas.",
    attractions: "Houseboat, Backwaters, Tea Gardens",
  },
  {
    name: "Alleppey - The Backwater Paradise",
    description: "Cruise on serene backwaters and enjoy authentic Ayurveda.",
    attractions: "Houseboat, Vembanad Lake, Alappuzha Beach",
  },
  {
    name: "Tamil Nadu - Gateway to the Dravidian Culture",
    description: "Explore heritage temples, hills, and wildlife.",
    attractions: "Temples, Beaches, Hill Stations",
  },
  {
    name: "Hampi - The City of Ruins",
    description:
      "Celebrate Hampi Mahotsav with puppet shows, temple parades, and music.",
    attractions: "Virupaksha Temple, Vitthala Temple",
  },
  {
    name: "Jaisalmer - The Golden City",
    description:
      "Explore the Jaisalmer Fort and other havelis, and enjoy the desert festival.",
    attractions: "Jaisalmer Fort, Sam Sand Dunes",
  },
  {
    name: "Shimla - The Queen of Hills",
    description: "Enjoy scenic views, trekking, and adventure sports.",
    attractions: "Scenic Views, Trekking",
  },
  {
    name: "Rishikesh - The Yoga Capital",
    description:
      "Experience yoga and adventure activities like river rafting and bungee jumping.",
    attractions: "Bungee jumping, River rafting",
  },
  {
    name: "Auli - The Skiing Capital",
    description: "Enjoy skiing on snow-clad mountains.",
    attractions: "Snow, Skiing, Cable Car",
  },
  {
    name: "Nainital - The Lake Paradise",
    description: "Boating on Nainital Lake and trekking to Naini Peak.",
    attractions: "Nainital Lake, Naini Peak",
  },
  {
    name: "Darjeeling - The Face of Khangchendzonga",
    description: "Ride the toy train and visit tea gardens.",
    attractions: "Toy Train, Tea Gardens, Views of Khangchendzonga",
  },
];

const BestTimeToVisit = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Honeymoon");
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const handleViewDetails = (id) => {
    // Handle the logic for viewing the details of the specific package
    alert(`Viewing details for package ID: ${id}`);
  };

  const destinations = {
    Honeymoon: [
      { name: "Maldives", image: thailand },
      { name: "Paris", image: thailand },
      { name: "Bali", image: thailand },
      { name: "Santorini", image: thailand },
    ],
    Family: [
      { name: "Disneyland", image: thailand },
      { name: "Singapore", image: thailand },
      { name: "Dubai", image: thailand },
      { name: "Australia", image: thailand },
    ],
    Wildlife: [
      { name: "Masai Mara", image: thailand },
      { name: "Amazon Rainforest", image: thailand },
      { name: "Ranthambore", image: thailand },
      { name: "Yellowstone", image: thailand },
    ],
    "Snow & Ski": [
      { name: "Aspen", image: thailand },
      { name: "Whistler", image: thailand },
      { name: "Zermatt", image: thailand },
      { name: "Gulmarg", image: thailand },
    ],
    Beach: [
      { name: "Phuket", image: thailand },
      { name: "Bora Bora", image: thailand },
      { name: "Malibu", image: thailand },
      { name: "Bahamas", image: thailand },
    ],
  };

  return (
    <div>
      <Header />
      <Container fluid className="p2-4 my-2" style={{ backgroundColor: "" }}>
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="text-center">
            <h3 style={{ fontWeight: "bold", color: "black" }}>
              Winter Holiday Destinations In India
            </h3>
            <hr
              style={{
                width: "40%",
                margin: "10px auto",
                // borderColor: "#FF5722",
                borderWidth: "2px",
              }}
            />
          </Col>
        </Row>
      </Container>
      {/* Image and form */}
      <Container>
        <Row>
          <Col
            xs={12}
            md={9}
            style={{
              //   border: "2px solid #FF5722",
              padding: 0,
              display: "flex", // Enable Flexbox
              flexDirection: "column", // Stack content vertically
            }}
          >
            {/* Content for the left column */}
            <img
              src={thailand}
              alt="Thailand"
              style={{
                width: "100%", // Make the image fill the column width
                height: "100%", // Make the image fill the column height
                objectFit: "cover", // Cover the area without stretching
              }}
            />
          </Col>

          {/* Right part */}
          <Col
            xs={12}
            md={3}
            style={{
              //   border: "2px solid #FF5722",
              padding: "0px",
              display: "flex", // Enable Flexbox
              flexDirection: "column", // Stack content vertically
            }}
          >
            {/* FORM */}
            <div
              style={{
                flex: 1, // Ensure the form stretches to take up available space
                maxWidth: "400px",
                padding: "0px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column", // Stack form content vertically
              }}
            >
              <h5
                style={{
                  textAlign: "center",
                  color: "white",
                  backgroundColor: "#e94500", // Set the background color
                  height: "40px", // Increased height
                  width: "100%",
                  borderTopLeftRadius: "8px", // Rounded top left corner
                  borderTopRightRadius: "8px", // Rounded top right corner
                  borderBottomLeftRadius: "0", // No rounding on bottom left corner
                  borderBottomRightRadius: "0", // No rounding on bottom right corner
                  lineHeight: "40px", // Center text vertically
                  margin: "0px",
                }}
              >
                Plan Your Dream Vacation
              </h5>

              <Form style={{ backgroundColor: "#e0dcec" }} className="p-1">
                {/* Name Input */}
                <Form.Group controlId="formName" className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder="Type your name *"
                    required
                    style={{ height: "30px" }}
                  />
                </Form.Group>

                {/* Email Input */}
                <Form.Group controlId="formEmail" className="mb-2">
                  <Form.Control
                    type="email"
                    placeholder="Type your email address *"
                    required
                    style={{ height: "30px" }}
                  />
                </Form.Group>

                {/* Mobile Input */}
                <Form.Group controlId="formMobile" className="mb-2">
                  <Row>
                    <Col xs={3}>
                      <Form.Control
                        as="select"
                        defaultValue="India"
                        style={{ height: "35px" }}
                      >
                        <option value="India">🇮🇳 +91</option>
                        <option value="USA">🇺🇸 +1</option>
                      </Form.Control>
                    </Col>
                    <Col xs={9}>
                      <Form.Control
                        type="text"
                        placeholder="Mobile No. *"
                        required
                        style={{ height: "30px" }}
                      />
                    </Col>
                  </Row>
                </Form.Group>

                {/* Travel Date */}
                <Form.Group controlId="formDate" className="mb-2">
                  <Form.Control
                    type="date"
                    required
                    style={{ height: "30px" }}
                  />
                </Form.Group>

                {/* Number of Persons */}
                <Form.Group controlId="formPersons" className="mb-2">
                  <Row>
                    <Col>
                      <Form.Control
                        as="select"
                        required
                        style={{ height: "35px", paddingRight: "20px" }}
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5+">5+</option>
                      </Form.Control>
                    </Col>
                    <Col xs="auto" className="d-flex align-items-center">
                      <ChevronDown
                        style={{
                          color: "black",
                          marginLeft: "-40px",
                          cursor: "pointer",
                        }}
                      />
                    </Col>
                  </Row>
                </Form.Group>

                {/* Additional Information */}
                <Form.Group controlId="formAdditionalInfo" className="mb-2">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Additional Information (Optional)"
                    style={{ height: "30px" }}
                  />
                </Form.Group>

                {/* Submit Button */}
                <Button
                  variant="warning"
                  type="submit"
                  style={{ width: "100%" }}
                >
                  Submit Now
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Text part */}
      <Container style={{ padding: "20px", textAlign: "justify" }}>
        <p>
          As the cool breeze kisses your cheeks you start looking for the best
          places to visit in India in winter. The vast topography of India
          offers a variety of options to travelers. Sometimes it becomes
          difficult to decide the best destination for a winter holiday. For
          your convenience here is a list of the top winter holiday destinations
          in India.
        </p>
      </Container>
      {/* table  */}
      <Container
        style={{ backgroundColor: "#e7edf4", padding: "10px" }}
        className="my-2"
      >
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <h2
              style={{
                textAlign: "center",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Top Selling Winter Holiday Packages in India
            </h2>
            <hr
              style={{
                width: "40%",
                margin: "10px auto",
                // borderColor: "#FF5722",
                borderWidth: "2px",
              }}
            />
          </Col>
        </Row>
        {/* table content */}
        <div style={{ maxWidth: "900px", margin: "auto" }} className="mb-2">
          <Table
            striped
            bordered
            hover
            responsive
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              marginTop: "20px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              width: "100%", // Make sure the table takes full available width
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    backgroundColor: "#f8f9fa",
                    color: "#495057",
                    borderBottom: "2px solid #dee2e6",
                  }}
                >
                  Winter Package
                </th>
                <th
                  style={{
                    backgroundColor: "#f8f9fa",
                    color: "#495057",
                    borderBottom: "2px solid #dee2e6",
                  }}
                >
                  No of Nights/Days
                </th>
                <th
                  style={{
                    backgroundColor: "#f8f9fa",
                    color: "#495057",
                    borderBottom: "2px solid #dee2e6",
                  }}
                >
                  Price INR
                </th>
                <th
                  style={{
                    backgroundColor: "#f8f9fa",
                    color: "#495057",
                    borderBottom: "2px solid #dee2e6",
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Map through the array and display each row */}
              {tableData.map((row) => (
                <tr key={row.id} style={{ backgroundColor: "#ffffff" }}>
                  <td>{row.package}</td>
                  <td>{row.nightsDays}</td>
                  <td>₹ {row.price}</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="info"
                      onClick={() => handleViewDetails(row.id)}
                      style={{
                        borderRadius: "20px",
                        padding: "8px 20px",
                        backgroundColor: "#17a2b8",
                        borderColor: "#17a2b8",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#138496")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#17a2b8")
                      }
                    >
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* Button View All packages */}
          <div style={{ textAlign: "center", marginTop: "5px" }}>
            <Button
              variant="warning"
              //   onClick={}
              style={{
                padding: "10px 20px",
                transition: "background-color 0.3s",
                borderRadius: "20px",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#FF7F32")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#FF9F40")}
            >
              View All Packages
            </Button>
          </div>
        </div>
      </Container>
      {/* Best Places to visite in india in winter */}
      <div className="mt-5 my-4">
        <Container className="">
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <h4
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                Best Places to Visit in Winter in India
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
          {/* text with read more */}
          <Container className="mt-4">
            <Row>
              <Col md={10} className="mx-auto">
                {/* Center the column with equal margins */}
                <p style={{ textAlign: "justify", lineHeight: "1.6" }}>
                  Winter in India comes with lots of enjoyment. Get sun kissed
                  on the beaches, enjoy skiing on the icy slopes of mountains,
                  treat your eyes to the snowfall or just relax in the warmth of
                  the fireplace in a remote hill station. Winter is also the
                  best time to explore the famous heritage sites spotted across
                  India. So basically the travelers keep their bags ready and
                  wait for the snowy breeze to start blowing from the lap of
                  Himalaya. The beaches of the west coast and south, be it Goa
                  or Kovalam, offers ideal setting for sunbathing and leisure
                  activities. Up north, it’s the time for winter snow treks in
                  Himalayas for the adventure enthusiast. And last but not the
                  least winter is also the wedding season in India. The hills –
                  be it north or south – becomes the cocoon of romance for
                  newlyweds looking for places to go for honeymoon in winter in
                  India. For families, it is anywhere in entire country when it
                  comes to winter holidays in India but Maharashtra, Himachal,
                  Kerala and Goa remains favorite. For the elderly, Gujarat with
                  its numerous temples and places for pilgrimage becomes one of
                  the top places to visit in India.
                </p>
                <p style={{ textAlign: "justify", lineHeight: "1.6" }}>
                  {showMore
                    ? `You can opt for a Thailand trip package for a memorable vacation that combines relaxation and adventure.
           Scroll down for more information and discover all the delights of this tropical nation.`
                    : `You can opt for a Thailand trip package for a memorable vacation that combines relaxation and adventure...`}
                  <span
                    onClick={toggleShowMore}
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    {showMore ? "" : " Read More"}
                  </span>
                </p>
                {showMore && (
                  <div className="mt-4">
                    {touristDestinations.map((destination, index) => (
                      <div key={index} className="mt-3 text-left">
                        <h4>{destination.name}</h4>
                        <p style={{ textAlign: "justify", lineHeight: "1.6" }}>
                          {destination.description}
                        </p>
                        {destination.attractions && (
                          <p>
                            <strong>Major Attractions:</strong>{" "}
                            {destination.attractions}
                          </p>
                        )}
                      </div>
                    ))}
                    <div className="mt-3 text-right">
                      <span
                        onClick={toggleShowMore}
                        style={{
                          color: "blue",
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        Read Less
                      </span>
                    </div>
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
      {/* best places to visit in india card componenet */}
      <div style={{ marginTop: "10px", marginBottom: "20px" }}>
        <Container
          style={{
            backgroundColor: "#e7edf4",
            padding: "15px",
            marginBottom: "20px",
          }}
          className="my-3"
        >
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <h4
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "15px",
                }}
              >
                Best Places to Visit in North India in Winter
              </h4>
              <hr
                style={{
                  width: "40%",
                  margin: "10px auto",
                  // borderColor: "#FF5722",
                  marginBottom: "20px",
                  borderWidth: "2px",
                }}
              />
            </Col>
          </Row>
          {/* Card component */}
          <Row>
            {cardData.map((card) => (
              <Col md={3} key={card.id} className="mb-4">
                <Card
                  className="shadow-sm d-flex flex-column"
                  style={{
                    height: "100%", // Ensure the card fills the column height
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Upper Part: Image */}
                  <div
                    style={{
                      height: "150px", // Fixed height for the image
                      overflow: "hidden",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={thailand} // Use the image URL from the data
                      alt={card.title}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>

                  {/* Lower Part: White Background with Data */}
                  <Card.Body
                    style={{
                      backgroundColor: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between", // Add spacing between title, description, and button
                      flex: 1, // Allow the body to take the remaining space
                      padding: "0.5rem", // Reduced padding
                      overflow: "hidden", // Prevent overflowing content
                    }}
                  >
                    <Card.Title
                      className="text-center"
                      style={{
                        fontSize: "1.1rem", // Reduced font size
                        marginBottom: "0.25rem", // Reduced margin
                      }}
                    >
                      {card.title}
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontSize: "0.85rem", // Smaller font size for description
                        marginBottom: "0.5rem", // Reduced margin
                        textAlign: "justify", // Justified text
                      }}
                    >
                      {card.description}
                    </Card.Text>

                    {/* Button: View Packages */}
                    <div className="d-flex justify-content-center">
                      <button
                        style={{
                          backgroundColor: "#007bff",
                          color: "#fff",
                          border: "none",
                          padding: "6px 12px", // Reduced padding
                          fontSize: "0.85rem", // Smaller font size
                          cursor: "pointer",
                          borderRadius: "30px",
                        }}
                      >
                        View Packages
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      {/* Best places to visit in india in winter */}
      <div style={{ marginTop: "10px", marginBottom: "20px" }}>
        <Container
          style={{
            // backgroundColor: "#e7edf4",
            padding: "15px",
            marginBottom: "20px",
          }}
          className="my-3"
        >
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <h4
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "15px",
                }}
              >
                Best Places to Visit in South India in Winter
              </h4>
              <hr
                style={{
                  width: "40%",
                  margin: "10px auto",
                  // borderColor: "#FF5722",
                  marginBottom: "20px",
                  borderWidth: "2px",
                }}
              />
            </Col>
          </Row>
          {/* Card component */}
          <Row>
            {cardData.map((card) => (
              <Col md={3} key={card.id} className="mb-4">
                <Card
                  className="shadow-sm d-flex flex-column"
                  style={{
                    height: "100%", // Ensure the card fills the column height
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Upper Part: Image */}
                  <div
                    style={{
                      height: "150px", // Fixed height for the image
                      overflow: "hidden",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={thailand} // Use the image URL from the data
                      alt={card.title}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>

                  {/* Lower Part: White Background with Data */}
                  <Card.Body
                    style={{
                      backgroundColor: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between", // Add spacing between title, description, and button
                      flex: 1, // Allow the body to take the remaining space
                      padding: "0.5rem", // Reduced padding
                      overflow: "hidden", // Prevent overflowing content
                    }}
                  >
                    <Card.Title
                      className="text-center"
                      style={{
                        fontSize: "1.1rem", // Reduced font size
                        marginBottom: "0.25rem", // Reduced margin
                      }}
                    >
                      {card.title}
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontSize: "0.85rem", // Smaller font size for description
                        marginBottom: "0.5rem", // Reduced margin
                        textAlign: "justify", // Justified text
                      }}
                    >
                      {card.description}
                    </Card.Text>

                    {/* Button: View Packages */}
                    <div className="d-flex justify-content-center">
                      <button
                        style={{
                          backgroundColor: "#007bff",
                          color: "#fff",
                          border: "none",
                          padding: "6px 12px", // Reduced padding
                          fontSize: "0.85rem", // Smaller font size
                          cursor: "pointer",
                          borderRadius: "30px",
                        }}
                      >
                        View Packages
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Explore part along with the  image  */}
      <div
        style={{
          marginTop: "10px",
          marginBottom: "20px",
        }}
      >
        <Container
          style={{
            // backgroundColor: "#e7edf4",
            padding: "15px",
            marginBottom: "20px",
            height: "500px",
            backgroundImage: `url(${thailand})`,
            backgroundSize: "cover", // Cover the entire div
            backgroundPosition: "center",
          }}
          className="my-3"
        >
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <h4
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "15px",
                  color: "red",
                }}
              >
                Explore Winter Destinations in India by Theme
              </h4>
              <hr
                style={{
                  width: "40%",
                  margin: "10px auto",
                  // borderColor: "#FF5722",
                  color: "white",
                  marginBottom: "20px",
                  borderWidth: "2px",
                }}
              />
            </Col>
            {/* with multiple options  */}
            <Col xs={8} md={8}>
              <div
                className="container mt-5 p-4"
                style={{ backgroundColor: "white", borderRadius: "8px" }}
              >
                {/* Tabs */}
                <ul className="nav nav-tabs" role="tablist">
                  {Object.keys(destinations).map((tab, index) => (
                    <li className="nav-item" role="presentation" key={index}>
                      <button
                        className={`nav-link ${
                          selectedTab === tab ? "active" : ""
                        }`}
                        onClick={() => setSelectedTab(tab)} // Update the selected tab when clicked
                        type="button"
                        style={{
                          backgroundColor:
                            selectedTab === tab ? "orange" : "lightgray",
                          color: selectedTab === tab ? "white" : "black",
                          borderRadius: "8px 8px 0 0",
                          border: "none",
                          marginRight: "5px",
                        }}
                      >
                        {tab}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Content */}
                <div className="mt-0">
                  <div className="row">
                    {destinations[selectedTab].map((destination, idx) => (
                      <div className="col-md-3 mb-2" key={idx}>
                        <div
                          className="card"
                          style={{
                            border: "none",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <img
                            src={destination.image}
                            className="card-img-top"
                            alt={destination.name}
                            style={{
                              borderRadius: "8px 8px 0 0",
                              height: "120px",
                              objectFit: "cover",
                            }}
                          />
                          <div className="card-body d-flex justify-content-center text-center">
                            <h6 className="card-title">{destination.name}</h6>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Best Places to vist in the south  */}
      <div style={{ marginTop: "10px", marginBottom: "20px" }}>
        {/* heading */}
        <div className="mt-5 my-4">
          <Container className="">
            <Row className="justify-content-center">
              <Col xs={12} md={8}>
                <h4
                  style={{
                    textAlign: "center",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  Best Places to Visit in Winter in India
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
          </Container>
        </div>
        {/* Image and the card component */}
        <Container className="">
          <Row>
            {/* Thailand Image - Occupies 80% of the height */}

            {/* Bottom White Section - Cards */}
            <Container>
              <Row noGutters>
                {blogCards.map((item, index) => (
                  <Col md={3} key={index} className="mb-4">
                    {" "}
                    {/* Add margin for spacing */}
                    <Card
                      style={{
                        border: "none",
                        borderRadius: "10px", // Rounded corners for the cards
                        overflow: "hidden", // Ensures no content spills out of the card
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
                        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
                      }}
                      className="card-hover"
                    >
                      {/* Image Section */}
                      <div
                        style={{
                          backgroundImage: `url(${thailand})`, // Set card image dynamically
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          height: "200px",
                          borderRadius: "10px 10px 0 0", // Rounded top corners for the image
                        }}
                      ></div>

                      {/* Card Body */}
                      <Card.Body
                        style={{
                          padding: "1.25rem", // Add padding to body for spacing
                          backgroundColor: "#fff",
                        }}
                      >
                        <Card.Title
                          style={{
                            fontSize: "1.25rem", // Larger title font
                            fontWeight: "bold", // Make title bold
                            color: "#333", // Slightly darker title color
                            marginBottom: "0.75rem", // Space between title and text
                          }}
                        >
                          {item.title}
                        </Card.Title>
                        <Card.Text
                          style={{
                            color: "#666", // Lighter color for text
                            fontSize: "1rem", // Slightly bigger font size for better readability
                            lineHeight: "1.5", // Increase line height for better text spacing
                          }}
                        >
                          {item.text}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </Row>
        </Container>
      </div>
      {/* why to choose us */}
      <div className="mt-5 my-4">
        <Container className="">
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <h4
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                Why Choose us?
              </h4>
              <hr
                style={{
                  width: "40%",
                  margin: "10px auto",
                  borderWidth: "2px",
                }}
              />
              {/* text why choose us  */}
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "100vh" }}
              >
                <div className="text-center">
                  At Indian Holiday, we offer customized tours curated to suit
                  your tastes. So, why wait? Inspire your next holiday and bring
                  your travel vision to life!
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BestTimeToVisit;
