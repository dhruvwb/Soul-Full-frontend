import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Container, Badge } from "react-bootstrap";
import RichContent from "../helpers/components/RichContent";
import homeContent from "../models/homeContent";

const NewsDetail = () => {
  const { slug } = useParams();

  const item = useMemo(
    () => homeContent.news.find(entry => entry.slug === slug),
    [slug]
  );

  if (!item) {
    return (
      <Container className="py-5">
        <p>News item not available.</p>
      </Container>
    );
  }

  return (
    <div>
      {item.image && (
        <div
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "320px",
            position: "relative"
          }}
        >
          <div
            style={{
              background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)",
              minHeight: "320px",
              display: "flex",
              alignItems: "flex-end"
            }}
          >
            <Container className="pb-4" style={{ color: "#fff" }}>
              <h1 style={{ fontWeight: 700 }}>{item.title}</h1>
              {item.date && <Badge bg="light" text="dark">{item.date}</Badge>}
            </Container>
          </div>
        </div>
      )}

      <Container className="py-5">
        {!item.image && (
          <>
            <h1 style={{ fontWeight: 700 }}>{item.title}</h1>
            {item.date && (
              <Badge bg="light" text="dark" className="mb-3">
                {item.date}
              </Badge>
            )}
          </>
        )}
        {item.excerpt && <p style={{ fontSize: "1.1rem" }}>{item.excerpt}</p>}
        {/<[a-z][\s\S]*>/i.test(item.content || '') ? (
          <RichContent html={item.content} style={{ lineHeight: 1.8 }} />
        ) : (
          <p style={{ lineHeight: 1.8 }}>{item.content}</p>
        )}
      </Container>
    </div>
  );
};

export default NewsDetail;
