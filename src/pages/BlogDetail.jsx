import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Badge, Form, Button, Alert } from "react-bootstrap";
import Seo from "../helpers/components/Seo";
import RichContent from "../helpers/components/RichContent";
import Footer from "../helpers/components/Footer";
import { getPublicBlogBySlug, getPublicBlogs, getAssetUrl, submitEnquiry } from "../services/api";
import homeContent from "../models/homeContent";

const buildExcerpt = (text, maxLength = 160) => {
  if (!text) return "";
  const stripped = String(text).replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
  if (stripped.length <= maxLength) return stripped;
  return `${stripped.slice(0, maxLength - 3)}...`;
};

const formatDate = dateStr => {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
  } catch {
    return dateStr;
  }
};

const timeSince = dateStr => {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    const now = new Date();
    const diff = Math.floor((now - d) / 1000);
    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    if (diff < 2592000) return `${Math.floor(diff / 86400)} days ago`;
    if (diff < 31536000) return `${Math.floor(diff / 2592000)} months ago`;
    return `${Math.floor(diff / 31536000)} years ago`;
  } catch {
    return "";
  }
};

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [latestBlogs, setLatestBlogs] = useState([]);

  const [bookForm, setBookForm] = useState({ name: "", mobile: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = homeContent.footer?.contact || {};

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getPublicBlogBySlug(slug)
      .then(data => { if (!cancelled) setBlog(data); })
      .catch(() => { if (!cancelled) setBlog(null); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [slug]);

  useEffect(() => {
    getPublicBlogs()
      .then(items => setLatestBlogs((items || []).slice(0, 5)))
      .catch(() => setLatestBlogs([]));
  }, []);

  const handleBookChange = e => {
    const { name, value } = e.target;
    setBookForm(prev => ({ ...prev, [name]: value }));
  };

  const handleBookSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);
    try {
      await submitEnquiry({
        name: bookForm.name,
        mobile: bookForm.mobile,
        email: bookForm.email,
        message: bookForm.message || `Enquiry from blog: ${blog?.title || ""}`
      });
      setSubmitStatus({ type: "success", text: "Thanks! We will contact you shortly." });
      setBookForm({ name: "", mobile: "", email: "", message: "" });
    } catch {
      setSubmitStatus({ type: "danger", text: "Failed to send. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const coverImage = blog?.coverImage ? getAssetUrl(blog.coverImage) : "";

  if (loading) {
    return (
      <div className="blog-detail">
        <Container className="py-5 text-center">
          <p>Loading...</p>
        </Container>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="blog-detail">
        <Seo title="Blog not found" description="The requested blog could not be found." noindex />
        <Container className="py-5">
          <p>Blog not available.</p>
        </Container>
        <Footer />
      </div>
    );
  }

  const seoDescription = blog.metaDescription || blog.description || buildExcerpt(blog.content);

  return (
    <div className="blog-detail">
      <Seo
        title={blog.metaTitle || blog.title}
        description={seoDescription}
        image={coverImage}
        type="article"
      />

      {/* Blog Body */}
      <Container className="blog-detail__wrapper py-4">
        <div className="blog-detail__grid">
          {/* ─── Left Column: Blog content ─── */}
          <article className="blog-detail__content">
            <h1 className="blog-detail__title">{blog.title}</h1>

            <div className="blog-detail__meta">
              {blog.date && (
                <span className="blog-detail__meta-item">
                  <i className="bi bi-calendar3"></i> {formatDate(blog.date)}
                </span>
              )}
              {blog.author && (
                <span className="blog-detail__meta-item">
                  <i className="bi bi-person"></i> {blog.author}
                </span>
              )}
              {blog.location && (
                <span className="blog-detail__meta-item">
                  <i className="bi bi-geo-alt"></i> {blog.location}
                </span>
              )}
            </div>

            {coverImage && (
              <div className="blog-detail__cover">
                <img src={coverImage} alt={blog.title} />
              </div>
            )}

            {blog.description && (
              <p className="blog-detail__excerpt">{blog.description}</p>
            )}

            <div className="blog-detail__body-content">
              {/<[a-z][\s\S]*>/i.test(blog.content || "") ? (
                <RichContent html={blog.content} />
              ) : (
                <p>{blog.content || ""}</p>
              )}
            </div>

            {/* Social share / views row */}
            <div className="blog-detail__share">
              <span className="blog-detail__views">
                <i className="bi bi-eye"></i> {blog.views || 0} views
              </span>
            </div>
          </article>

          {/* ─── Right Column: Sidebar ─── */}
          <aside className="blog-detail__sidebar">
            {/* Latest Posts */}
            <div className="blog-sidebar-card">
              <h3 className="blog-sidebar-card__title">Latest Posts</h3>
              <div className="blog-sidebar-card__posts">
                {latestBlogs
                  .filter(b => b.slug !== slug)
                  .slice(0, 4)
                  .map(post => (
                    <Link
                      key={post._id || post.slug}
                      to={`/blogs/${post.slug}`}
                      className="blog-sidebar-post"
                    >
                      {post.coverImage && (
                        <img
                          src={getAssetUrl(post.coverImage)}
                          alt={post.title}
                          className="blog-sidebar-post__img"
                        />
                      )}
                      <div className="blog-sidebar-post__info">
                        <p className="blog-sidebar-post__title">{post.title}</p>
                        {post.date && (
                          <span className="blog-sidebar-post__date">{timeSince(post.date)}</span>
                        )}
                      </div>
                    </Link>
                  ))}
                {latestBlogs.length === 0 && <p>No posts yet.</p>}
              </div>
            </div>

            {/* Book Now */}
            <div className="blog-sidebar-card blog-sidebar-card--book">
              <h3 className="blog-sidebar-card__title blog-sidebar-card__title--book">Book Now</h3>
              <Form onSubmit={handleBookSubmit}>
                {submitStatus && (
                  <Alert variant={submitStatus.type} className="py-2 mb-2">
                    {submitStatus.text}
                  </Alert>
                )}
                <Form.Group className="mb-2">
                  <Form.Label className="blog-form-label">NAME*</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={bookForm.name}
                    onChange={handleBookChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label className="blog-form-label">MOBILE*</Form.Label>
                  <Form.Control
                    type="tel"
                    name="mobile"
                    value={bookForm.mobile}
                    onChange={handleBookChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label className="blog-form-label">EMAIL*</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={bookForm.email}
                    onChange={handleBookChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="blog-form-label">MESSAGE</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={bookForm.message}
                    onChange={handleBookChange}
                  />
                </Form.Group>
                <Button type="submit" className="blog-sidebar-submit w-100" disabled={submitting}>
                  {submitting ? "Sending..." : "Submit"}
                </Button>
              </Form>
            </div>
          </aside>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default BlogDetail;
