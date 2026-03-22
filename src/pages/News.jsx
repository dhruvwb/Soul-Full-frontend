import React, { useMemo } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import homeContent from "../models/homeContent";

const News = () => {
  const navigate = useNavigate();
  const items = useMemo(() => {
    return [...homeContent.news]
      .filter(item => item.status === "active")
      .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  }, []);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">News</h2>
      <div className="news-list">
        {items.map(item => (
          <Card key={item.id} className="news-card" style={{ border: "none" }}>
            {item.image && (
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: "220px", objectFit: "cover" }}
              />
            )}
            <Card.Body>
              <Card.Title style={{ fontWeight: 700 }}>{item.title}</Card.Title>
              {item.date && (
                <Card.Subtitle className="mb-2 text-muted">
                  {item.date}
                </Card.Subtitle>
              )}
              {item.excerpt && <Card.Text>{item.excerpt}</Card.Text>}
              <Button variant="outline-dark" onClick={() => navigate(`/news/${item.slug}`)}>
                Read More
              </Button>
            </Card.Body>
          </Card>
        ))}
        {items.length === 0 && <p className="text-center">No news updates available yet.</p>}
      </div>
    </Container>
  );
};

export default News;
