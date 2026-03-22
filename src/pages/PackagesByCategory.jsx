import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { getAssetUrl, getPublicCustomPackageCategories, getPublicCustomPackages } from "../services/api";

const PackagesByCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [packages, setPackages] = useState([]);

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

  useEffect(() => {
    let isMounted = true;
    const fetchPackages = async () => {
      try {
        const data = await getPublicCustomPackages(category);
        if (isMounted) {
          setPackages(data || []);
        }
      } catch (error) {
        console.error("Failed to load custom packages", error);
      }
    };
    fetchPackages();
    return () => {
      isMounted = false;
    };
  }, [category]);

  const resolveImage = (value) => {
    if (!value) return "";
    if (value.startsWith("http")) return value;
    return getAssetUrl(value);
  };

  const categoryInfo = useMemo(
    () => categories.find(item => item.key === category) || null,
    [categories, category]
  );

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">{categoryInfo?.label || "Packages"}</h2>
      <div className="text-center mb-3">
        <Button variant="outline-secondary" onClick={() => navigate('/packages')}>
          View All Categories
        </Button>
      </div>
      {categoryInfo?.label && (
        <p className="text-center text-muted mb-4">Explore curated {categoryInfo.label.toLowerCase()}.</p>
      )}
      <Row>
        {packages.map(pkg => (
          <Col key={pkg._id} md={4} className="mb-4">
            <Card style={{ border: "none", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
              {pkg.imageUrl && (
                <Card.Img
                  variant="top"
                  src={resolveImage(pkg.imageUrl)}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>{pkg.title}</Card.Title>
                <Card.Text>{pkg.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {packages.length === 0 && (
          <Col>
            <p className="text-center">No packages available yet.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default PackagesByCategory;
