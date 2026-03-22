import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Seo from "../helpers/components/Seo";
import { getAssetUrl, getPublicCustomPackageCategories } from "../services/api";

const PackagesOverview = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchCategories = async () => {
      try {
        const data = await getPublicCustomPackageCategories();
        if (isMounted) {
          setCategories(data || []);
        }
      } catch (error) {
        console.error("Failed to load custom categories", error);
      }
    };
    fetchCategories();
    return () => {
      isMounted = false;
    };
  }, []);

  const resolveImage = (value) => {
    if (!value) return "";
    if (value.startsWith("http")) return value;
    return getAssetUrl(value);
  };

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return categories;
    return categories.filter(item =>
      String(item.label || '').toLowerCase().includes(term)
    );
  }, [categories, query]);

  return (
    <Container className="py-5">
      <Seo
        title="Tour Packages"
        description="Browse customized tour package categories and curated travel experiences."
      />
      <h2 className="text-center mb-3">Customized Tour Packages</h2>
      <p className="text-center text-muted mb-4">
        Browse categories and explore curated experiences.
      </p>
      <div className="d-flex justify-content-center mb-4">
        <Form.Control
          type="text"
          placeholder="Search categories"
          value={query}
          onChange={event => setQuery(event.target.value)}
          style={{ maxWidth: 360 }}
        />
      </div>
      <Row>
        {filtered.map(category => (
          <Col key={category.key} md={3} sm={6} className="mb-4">
            <Card style={{ border: "none", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
              {category.imageUrl && (
                <Card.Img
                  variant="top"
                  src={resolveImage(category.imageUrl)}
                  style={{ height: "180px", objectFit: "cover" }}
                />
              )}
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>{category.label}</Card.Title>
                <Button
                  variant="outline-success"
                  onClick={() => navigate(`/packages/${category.key}`)}
                >
                  Explore Packages
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {filtered.length === 0 && (
          <Col>
            <p className="text-center">No categories found.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default PackagesOverview;
