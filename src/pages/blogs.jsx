import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Seo from "../helpers/components/Seo";
import { getPublicBlogs, getAssetUrl } from "../services/api";

const stripHtml = text =>
	String(text || "")
		.replace(/<[^>]*>/g, "")
		.replace(/&nbsp;/g, " ")
		.replace(/\s+/g, " ")
		.trim();

const excerpt = (text, max = 120) => {
	const plain = stripHtml(text);
	if (plain.length <= max) return plain;
	return `${plain.slice(0, max - 3)}...`;
};

const Blogs = () => {
	const [page, setPage] = useState(1);
	const [allBlogs, setAllBlogs] = useState([]);
	const [loading, setLoading] = useState(true);
	const pageSize = 12;

	useEffect(() => {
		setLoading(true);
		getPublicBlogs()
			.then(items => setAllBlogs(items || []))
			.catch(() => setAllBlogs([]))
			.finally(() => setLoading(false));
	}, []);

	const blogs = useMemo(
		() => [...allBlogs].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)),
		[allBlogs]
	);

	const totalPages = Math.max(1, Math.ceil(blogs.length / pageSize));
	const currentPage = Math.min(page, totalPages);
	const seoImage = blogs[0]?.coverImage ? getAssetUrl(blogs[0].coverImage) : "";
	const pagedBlogs = useMemo(() => {
		const start = (currentPage - 1) * pageSize;
		return blogs.slice(start, start + pageSize);
	}, [blogs, currentPage]);

	useEffect(() => {
		if (page > totalPages) {
			setPage(totalPages);
		}
	}, [page, totalPages]);

	return (
		<Container className="py-5">
			<Seo
				title="Blogs"
				description="Read travel stories, tips, and destination guides from Soulful India Tours."
				image={seoImage}
			/>
			<h2 className="text-center mb-4">Travel Blog</h2>

			{loading && <p className="text-center">Loading blogs...</p>}

			<Row>
				{pagedBlogs.map(blog => (
					<Col key={blog._id || blog.slug} md={4} className="mb-4">
						<Card style={{ border: "none", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
							{blog.coverImage && (
								<Card.Img
									variant="top"
									src={getAssetUrl(blog.coverImage)}
									style={{ height: "200px", objectFit: "cover" }}
								/>
							)}
							<Card.Body>
								<Card.Title style={{ fontWeight: "bold" }}>{blog.title}</Card.Title>
								<Card.Text>{blog.description || excerpt(blog.content)}</Card.Text>
								<Card.Text style={{ color: "#666", fontSize: "0.9rem" }}>
									{blog.date || ""}
								</Card.Text>
								<Button
									variant="outline-primary"
									as={Link}
									to={`/blogs/${blog.slug}`}
								>
									Read More
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
				{!loading && blogs.length === 0 && (
					<Col>
						<p className="text-center">No blogs available yet.</p>
					</Col>
				)}
			</Row>
			{blogs.length > pageSize && (
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
		</Container>
	);
};

export default Blogs;
