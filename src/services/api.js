import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000/api';
const ROOT_BASE = API_BASE.replace(/\/api\/?$/, '');

const api = axios.create({ baseURL: API_BASE });

const getAssetUrl = path => {
  if (!path) {
    return '';
  }
  return `${ROOT_BASE}${path}`;
};

const getPublicDomesticPackages = async () => {
  const response = await api.get('/public/domestic');
  return response.data || [];
};

const getPublicDomesticPackageBySlug = async slug => {
  const response = await api.get(`/public/domestic/${slug}`);
  return response.data || null;
};

const getPublicPackageCategories = async () => {
  const response = await api.get('/public/package-categories');
  return response.data || [];
};

const getPublicPackagesByCategory = async slug => {
  const response = await api.get(`/public/packages-by-category/${slug}`);
  return response.data || { category: null, packages: [] };
};

const getPublicPopularPackages = async () => {
  const response = await api.get('/public/popular-packages');
  return response.data || [];
};


const getPublicBlogs = async () => {
  const response = await api.get('/public/blogs');
  return response.data || [];
};

const getPublicBlogBySlug = async slug => {
  const response = await api.get(`/public/blogs/${slug}`);
  return response.data || null;
};

const getPublicNews = async () => {
  const response = await api.get('/public/news');
  return response.data || [];
};

const getPublicGallery = async () => {
  const response = await api.get('/public/gallery');
  return response.data || [];
};

const getPublicReviews = async () => {
  const response = await api.get('/public/reviews');
  return response.data || [];
};

const getPublicCms = async () => {
  const response = await api.get('/public/cms');
  return response.data || {};
};

const getPublicDestinations = async () => {
  const response = await api.get('/public/destinations');
  return response.data || [];
};

const getPublicDestinationBySlug = async slug => {
  const response = await api.get(`/public/destinations/${slug}`);
  return response.data || null;
};

const getPublicCustomPackageCategories = async () => {
  const response = await api.get('/public/custom-packages/categories');
  return response.data || [];
};

const getPublicCustomPackages = async category => {
  const query = category ? `?category=${encodeURIComponent(category)}` : '';
  const response = await api.get(`/public/custom-packages${query}`);
  return response.data || [];
};

const submitEnquiry = async payload => {
  const response = await api.post('/enquiry', payload);
  return response.data;
};

const submitContact = async payload => {
  const response = await api.post('/contact', payload);
  return response.data;
};

export {
  API_BASE,
  getAssetUrl,
  getPublicDomesticPackages,
  getPublicDomesticPackageBySlug,
  getPublicPackageCategories,
  getPublicPackagesByCategory,
  getPublicPopularPackages,
  getPublicBlogs,
  getPublicBlogBySlug,
  getPublicNews,
  getPublicGallery,
  getPublicReviews,
  getPublicCms,
  getPublicDestinations,
  getPublicDestinationBySlug,
  getPublicCustomPackageCategories,
  getPublicCustomPackages,
  submitEnquiry,
  submitContact
};
