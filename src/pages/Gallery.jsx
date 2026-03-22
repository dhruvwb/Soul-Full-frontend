import React, { useEffect, useMemo, useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import Seo from "../helpers/components/Seo";
import homeContent from "../models/homeContent";

const Gallery = () => {
  const items = useMemo(
    () => homeContent.gallery.filter(item => item.status === "active"),
    []
  );
  const [activeIndex, setActiveIndex] = useState(-1);
  const [page, setPage] = useState(1);
  const pageSize = 12;

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pagedItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, currentPage]);

  const seoImage = items.find(item => item.mediaType !== "video")?.mediaUrl || "";

  const activeItem = useMemo(() => pagedItems[activeIndex] || null, [pagedItems, activeIndex]);

  const handleOpen = index => {
    setActiveIndex(index);
  };

  const handleClose = () => {
    setActiveIndex(-1);
  };

  const handlePrev = () => {
    setActiveIndex(prev => (prev <= 0 ? pagedItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % pagedItems.length);
  };

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  return (
    <Container className="py-5">
      <Seo
        title="Gallery"
        description="Explore travel moments and curated experiences across India."
        image={seoImage}
      />
      <h2 className="text-center mb-4">Gallery</h2>
      {items.length === 0 && <p className="text-center">No gallery items yet.</p>}
      <div className="gallery-grid">
        {pagedItems.map((item, index) => (
          <div className="gallery-item" key={item._id} onClick={() => handleOpen(index)}>
            {item.mediaType === "video" ? (
              <video className="gallery-media" controls playsInline>
                <source src={item.mediaUrl} />
              </video>
            ) : (
              <img
                className="gallery-media"
                src={item.mediaUrl}
                alt={item.title || "Gallery item"}
                loading="lazy"
              />
            )}
            {(item.title || item.description) && (
              <div className="gallery-meta">
                {item.title && <h5>{item.title}</h5>}
                {item.description && <p>{item.description}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
      {items.length > pageSize && (
        <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
          <Button
            variant="outline-secondary"
            disabled={currentPage === 1}
            onClick={() => setPage(prev => Math.max(1, prev - 1))}
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={`page-${index + 1}`}
              variant={currentPage === index + 1 ? "primary" : "outline-secondary"}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            variant="outline-secondary"
            disabled={currentPage === totalPages}
            onClick={() => setPage(prev => Math.min(totalPages, prev + 1))}
          >
            Next
          </Button>
        </div>
      )}
      <Modal show={activeIndex >= 0} onHide={handleClose} size="lg" centered>
        <Modal.Body>
          {activeItem && (
            <div className="gallery-lightbox">
              {activeItem.mediaType === "video" ? (
                <video className="gallery-lightbox-media" controls playsInline>
                  <source src={activeItem.mediaUrl} />
                </video>
              ) : (
                <img
                  className="gallery-lightbox-media"
                  src={activeItem.mediaUrl}
                  alt={activeItem.title || "Gallery item"}
                />
              )}
              {(activeItem.title || activeItem.description) && (
                <div className="gallery-lightbox-meta">
                  {activeItem.title && <h5>{activeItem.title}</h5>}
                  {activeItem.description && <p>{activeItem.description}</p>}
                </div>
              )}
            </div>
          )}
        </Modal.Body>
        {pagedItems.length > 1 && (
          <Modal.Footer className="justify-content-between">
            <Button variant="outline-secondary" onClick={handlePrev}>Previous</Button>
            <Button variant="outline-secondary" onClick={handleNext}>Next</Button>
          </Modal.Footer>
        )}
      </Modal>
    </Container>
  );
};

export default Gallery;
