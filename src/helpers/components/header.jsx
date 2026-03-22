import React, { useState, useEffect, useRef, useCallback } from "react";
import { Navbar, Nav, Container, Dropdown, Offcanvas, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { getCategories } from "../../models/category_header";
import { getDestinations } from "../../models/subcategories";
import { FaPhone, FaWhatsapp, FaCaretDown } from "react-icons/fa";
import { Box } from "@mui/material";
import { useEnquiryModal } from "./EnquiryModalContext";

const indiaTourPackages = {
  column1: [
    "Agra Tour Packages",
    "Taj Mahal Tour Packages",
    "Amritsar Tour Packages",
    "Andaman Tour Packages",
    "Bangalore Tour Packages",
    "Chennai Tour Packages",
    "Cultural Tour Packages",
    "Delhi Tour Packages",
    "Festival Tours in India",
    "Golden Triangle Tour Packages"
  ],
  column2: [
    "Gujarat Tour Packages",
    "Himachal Pradesh Tour Packages",
    "Hyderabad Tour Packages",
    "Jaipur Tour Packages",
    "Kailash Mansarovar Yatra",
    "Kashmir Tour Packages",
    "Kerala Tour Packages",
    "Leh Ladakh Tour Packages",
    "Madhya Pradesh Tour Packages",
    "Maharashtra Tour Packages"
  ],
  column3: [
    "North East Tour Packages",
    "North India Tour Packages",
    "Orissa Tour Packages",
    "Perfect Family Getaways Across India",
    "Pilgrimage Tours in India",
    "Punjab Tour Packages",
    "Rajasthan Tour Packages",
    "Sightseeing Tour Packages",
    "South India Tour Packages",
    "Summer Tour Packages"
  ],
  column4: [
    "Thrilling Adventure Trip",
    "Travel Packages in India",
    "Uttarakhand Tour Packages",
    "Wildlife Tour Packages",
    "Winter Tour Packages"
  ]
};

const destinations = [
  "Delhi",
  "Agra",
  "Jaipur",
  "Amritsar",
  "Shimla",
  "Manali",
  "Kashmir",
  "Leh Ladakh",
  "Rishikesh",
  "Haridwar",
  "Puri",
  "Kerala",
  "Tamil Nadu",
  "Karnataka",
  "Andhra Pradesh",
  "Telangana",
  "Coorg",
  "Ooty",
  "Hampi",
  "Pondicherry",
  "Rajasthan",
  "Gujarat",
  "Maharashtra",
  "Goa",
  "Udaipur",
  "Jaisalmer",
  "Mount Abu",
  "West Bengal",
  "Odisha",
  "Bihar",
  "Konark",
  "Darjeeling",
  "Sikkim",
  "Meghalaya",
  "Assam",
  "Arunachal Pradesh",
  "Nagaland",
  "Manipur",
  "Mizoram",
  "Tripura"
];

const Header = ({ setSubcategoryId }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState({});
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);
  const location = useLocation();
  const megaRef = useRef(null);
  const destinationsRef = useRef(null);
  const { openModal } = useEnquiryModal();

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch subcategories for a specific category
  const fetchSubcategories = useCallback(async (categoryId) => {
    if (!subcategories[categoryId]) {
      try {
        const data = await getDestinations();
        const filteredSubcategories = data.filter(
          (subcategory) => subcategory.category._id === categoryId
        );
        setSubcategories((prev) => ({
          ...prev,
          [categoryId]: filteredSubcategories,
        }));
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    }
  }, [subcategories]);

  // Determine the active category and fetch subcategories based on the current route
  useEffect(() => {
    if (categories.length > 0) {
      const pathParts = location.pathname.split("/").filter(Boolean); // Extract parts of the path
      const currentSlug = pathParts[0]; // Get the first part as the category slug
      const activeCategory = categories.find(
        (category) => category.slug === currentSlug
      );

      if (activeCategory) {
        if (!subcategories[activeCategory._id]) {
          fetchSubcategories(activeCategory._id);
        }
      }
    }
  }, [location, categories, fetchSubcategories, subcategories]);

  // Handle outside click and ESC for mega dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaRef.current && !megaRef.current.contains(event.target)) {
        setIsMegaOpen(false);
      }
      if (destinationsRef.current && !destinationsRef.current.contains(event.target)) {
        setIsDestinationsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMegaOpen(false);
        setIsDestinationsOpen(false);
      }
    };

    if (isMegaOpen || isDestinationsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMegaOpen, isDestinationsOpen]);

  return (
    <>
      <style>
        {`
          .voice-dropdown-toggle::after {
            display: none !important;
          }
        `}
      </style>
      <Navbar bg="white" variant="light" sticky="top" expand="lg" className="px-3 shadow-sm" style={{ height: '80px' }}>
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center me-5">
          <div>
            <h4
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: "bold",
                color: "#C9A24D",
                margin: 0,
              }}
            >
              Soulful India Tours
            </h4>
          </div>
        </Navbar.Brand>

        {/* Center Navigation */}
        <Navbar.Collapse id="navbarNav" className="justify-content-center">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="mx-3" style={{ fontWeight: '500', color: '#333' }}>Home</Nav.Link>
            <div className="mx-3 position-relative">
              <Nav.Link 
                onClick={() => setIsMegaOpen(!isMegaOpen)} 
                style={{ fontWeight: '500', color: '#333', cursor: 'pointer' }}
                aria-expanded={isMegaOpen}
                aria-haspopup="true"
              >
                India Tours <FaCaretDown style={{ marginLeft: '5px' }} />
              </Nav.Link>
            </div>
            <div className="mx-3 position-relative">
              <Nav.Link 
                onClick={() => setIsDestinationsOpen(!isDestinationsOpen)} 
                style={{ fontWeight: '500', color: '#333', cursor: 'pointer' }}
                aria-expanded={isDestinationsOpen}
                aria-haspopup="true"
              >
                Destinations <FaCaretDown style={{ marginLeft: '5px' }} />
              </Nav.Link>
            </div>
            <Nav.Link as={Link} to="/blogs" className="mx-3" style={{ fontWeight: '500', color: '#333' }}>Blogs</Nav.Link>
            <Nav.Link as={Link} to="/news" className="mx-3" style={{ fontWeight: '500', color: '#333' }}>News</Nav.Link>
            <Dropdown
              className="mx-3"
              show={isVoiceOpen}
              onMouseEnter={() => setIsVoiceOpen(true)}
              onMouseLeave={() => setIsVoiceOpen(false)}
              onToggle={(nextShow) => setIsVoiceOpen(nextShow)}
            >
              <Dropdown.Toggle
                as={Nav.Link}
                className="voice-dropdown-toggle"
                style={{ fontWeight: '500', color: '#333', cursor: 'pointer' }}
                aria-expanded={isVoiceOpen}
              >
                Voice of Customer <FaCaretDown style={{ marginLeft: '5px' }} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/voice-of-customer/photos">
                  Photos
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/voice-of-customer/videos">
                  Videos
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link as={Link} to="/contact" className="mx-3" style={{ fontWeight: '500', color: '#333' }}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Mega Dropdown */}
        {isMegaOpen && (
          <Box
            ref={megaRef}
            sx={{
              position: 'absolute',
              top: '80px',
              left: 0,
              right: 0,
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              zIndex: 1000,
              borderTop: '1px solid #e0e0e0',
              animation: 'fadeInDown 0.3s ease-in-out',
              '@keyframes fadeInDown': {
                from: { opacity: 0, transform: 'translateY(-10px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <Container>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
                  gap: 3,
                  py: 4,
                }}
              >
                <Box>
                  {indiaTourPackages.column1.map((item, index) => (
                    <Link
                      key={index}
                      to={`/india-tours/${item.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                      style={{ textDecoration: 'none', color: '#333' }}
                      onClick={() => setIsMegaOpen(false)}
                    >
                      <Box
                        sx={{
                          py: 1,
                          borderBottom: index < indiaTourPackages.column1.length - 1 ? '1px solid #f0f0f0' : 'none',
                          '&:hover': { color: '#2e7d32' },
                        }}
                      >
                        {item}
                      </Box>
                    </Link>
                  ))}
                </Box>
                <Box>
                  {indiaTourPackages.column2.map((item, index) => (
                    <Link
                      key={index}
                      to={`/india-tours/${item.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                      style={{ textDecoration: 'none', color: '#333' }}
                      onClick={() => setIsMegaOpen(false)}
                    >
                      <Box
                        sx={{
                          py: 1,
                          borderBottom: index < indiaTourPackages.column2.length - 1 ? '1px solid #f0f0f0' : 'none',
                          '&:hover': { color: '#2e7d32' },
                        }}
                      >
                        {item}
                      </Box>
                    </Link>
                  ))}
                </Box>
                <Box>
                  {indiaTourPackages.column3.map((item, index) => (
                    <Link
                      key={index}
                      to={`/india-tours/${item.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                      style={{ textDecoration: 'none', color: '#333' }}
                      onClick={() => setIsMegaOpen(false)}
                    >
                      <Box
                        sx={{
                          py: 1,
                          borderBottom: index < indiaTourPackages.column3.length - 1 ? '1px solid #f0f0f0' : 'none',
                          '&:hover': { color: '#2e7d32' },
                        }}
                      >
                        {item}
                      </Box>
                    </Link>
                  ))}
                </Box>
                <Box>
                  {indiaTourPackages.column4.map((item, index) => (
                    <Link
                      key={index}
                      to={`/india-tours/${item.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                      style={{ textDecoration: 'none', color: '#333' }}
                      onClick={() => setIsMegaOpen(false)}
                    >
                      <Box
                        sx={{
                          py: 1,
                          borderBottom: index < indiaTourPackages.column4.length - 1 ? '1px solid #f0f0f0' : 'none',
                          '&:hover': { color: '#2e7d32' },
                        }}
                      >
                        {item}
                      </Box>
                    </Link>
                  ))}
                </Box>
              </Box>
            </Container>
          </Box>
        )}

        {/* Destinations Mega Dropdown */}
        {isDestinationsOpen && (
          <Box
            ref={destinationsRef}
            sx={{
              position: 'absolute',
              top: '80px',
              left: 0,
              right: 0,
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              zIndex: 1000,
              borderTop: '1px solid #e0e0e0',
              animation: 'fadeInDown 0.3s ease-in-out',
              '@keyframes fadeInDown': {
                from: { opacity: 0, transform: 'translateY(-10px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <Container>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
                  gap: 3,
                  py: 4,
                }}
              >
                {Array.from({ length: 4 }, (_, colIndex) => {
                  const itemsPerColumn = Math.ceil(destinations.length / 4);
                  const start = colIndex * itemsPerColumn;
                  const end = start + itemsPerColumn;
                  const columnItems = destinations.slice(start, end);
                  return (
                    <Box key={colIndex}>
                      {columnItems.map((item, index) => (
                        <Link
                          key={index}
                          to={`/destinations/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          style={{ textDecoration: 'none', color: '#333' }}
                          onClick={() => setIsDestinationsOpen(false)}
                        >
                          <Box
                            sx={{
                              py: 1,
                              borderBottom: index < columnItems.length - 1 ? '1px solid #f0f0f0' : 'none',
                              '&:hover': { color: '#2e7d32' },
                            }}
                          >
                            {item}
                          </Box>
                        </Link>
                      ))}
                    </Box>
                  );
                })}
              </Box>
            </Container>
          </Box>
        )}

        {/* Right-side CTA Buttons */}
        <div className="d-flex align-items-center ms-auto">
          <Button as="a" href="tel:+919876543210" variant="outline-success" className="me-2" style={{ borderRadius: '20px' }}>
            <FaPhone className="me-1" /> Call Now
          </Button>
          <Button as="a" href="https://wa.me/919876543210?text=Hello%20Soulful%20India%20Tours%2C%20I%20want%20to%20enquire%20about%20a%20trip." variant="success" className="me-2" style={{ borderRadius: '20px' }}>
            <FaWhatsapp className="me-1" /> WhatsApp
          </Button>
          <Button onClick={openModal} variant="primary" style={{ borderRadius: '20px' }}>
            Enquire Now
          </Button>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={() => setDrawerOpen(true)}
            className="ms-2 d-lg-none"
          />
        </div>

        {/* Mobile Offcanvas Menu */}
        <Offcanvas
          show={drawerOpen}
          onHide={() => setDrawerOpen(false)}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{ fontFamily: "'Playfair Display', serif", fontWeight: "bold", color: "#C9A24D" }}>Soulful India Tours</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" onClick={() => setDrawerOpen(false)}>Home</Nav.Link>
              <Dropdown>
                <Dropdown.Toggle as={Nav.Link} style={{ background: 'none', border: 'none' }}>
                  India Tours
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {categories.filter(cat => cat.name.toLowerCase().includes('india')).map((category) => (
                    <Dropdown.Item key={category._id} as={Link} to={`/${category.slug}`} onClick={() => setDrawerOpen(false)}>
                      {category.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link as={Link} to="/places-to-visit" onClick={() => setDrawerOpen(false)}>Destinations</Nav.Link>
              <Nav.Link as={Link} to="/blogs" onClick={() => setDrawerOpen(false)}>Blogs</Nav.Link>
              <Nav.Link as={Link} to="/news" onClick={() => setDrawerOpen(false)}>News</Nav.Link>
              <Dropdown>
                <Dropdown.Toggle as={Nav.Link} style={{ background: 'none', border: 'none' }}>
                  Voice of Customer
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    as={Link}
                    to="/voice-of-customer/photos"
                    onClick={() => setDrawerOpen(false)}
                  >
                    Photos
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={Link}
                    to="/voice-of-customer/videos"
                    onClick={() => setDrawerOpen(false)}
                  >
                    Videos
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link as={Link} to="/contact" onClick={() => setDrawerOpen(false)}>Contact Us</Nav.Link>
              <div className="mt-3">
                <Button as="a" href="tel:+919876543210" variant="outline-success" className="w-100 mb-2">
                  <FaPhone className="me-1" /> Call Now
                </Button>
                <Button as="a" href="https://wa.me/919876543210?text=Hello%20Soulful%20India%20Tours%2C%20I%20want%20to%20enquire%20about%20a%20trip." variant="success" className="w-100 mb-2">
                  <FaWhatsapp className="me-1" /> WhatsApp
                </Button>
                <Button
                  onClick={() => {
                    openModal();
                    setDrawerOpen(false);
                  }}
                  variant="primary"
                  className="w-100"
                >
                  Enquire Now
                </Button>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
      </Navbar>
    </>
  );
};

export default Header;
