import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowLeft, FaCalendarAlt, FaUser, FaShare } from 'react-icons/fa';

const API_URL = 'https://ngowebsitebackend-4dkd.onrender.com/api';

const PostDetail = () => {
  useEffect(() => {
		AOS.init();
	}, []);

	useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${API_URL}/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        setError('Error fetching post');
        console.error('Error fetching post:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (error) return (
    <div className="postdetail-error">
      <div className="error-container">
        <h2>Oops! Something went wrong</h2>
        <p>{error}</p>
        <Link to="/" className="back-home-btn">
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    </div>
  );
  
  if (isLoading) return (
    <div className="postdetail-loading">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading amazing content...</p>
      </div>
    </div>
  );

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="postdetail-wrapper">
      <div className="postdetail-container">
        {/* Header with back button */}
        <div className="postdetail-header" data-aos="fade-down" data-aos-duration="600">
          <Link to="/" className="back-btn">
            <FaArrowLeft /> Back to Posts
          </Link>
          <button onClick={handleShare} className="share-btn">
            <FaShare /> Share
          </button>
        </div>

        {/* Article Content */}
        <article className="postdetail-article">
          {/* Title Section */}
          <header className="postdetail-title-section" data-aos="fade-up" data-aos-duration="800">
            <div className="title-badge">
              <span>Latest Update</span>
            </div>
            <h1 className="postdetail-title">{post.title}</h1>
            
            {/* Meta Information */}
            <div className="postdetail-meta">
              <div className="meta-item">
                <FaCalendarAlt className="meta-icon" />
                <span>{post.createdAt ? formatDate(post.createdAt) : 'Recently'}</span>
              </div>
              <div className="meta-item">
                <FaUser className="meta-icon" />
                <span>LIFE Foundation</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {post.imageUrl && (
            <div className="postdetail-image-container" data-aos="zoom-in" data-aos-duration="1000">
              <div className="image-wrapper">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="postdetail-image" 
                />
                <div className="image-overlay">
                  <div className="overlay-gradient"></div>
                </div>
              </div>
            </div>
          )}

          {/* Content */}
          <div className="postdetail-content" data-aos="fade-up" data-aos-duration="800">
            <div 
              className='postdetail-text' 
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </div>

          {/* Footer Actions */}
          <footer className="postdetail-footer" data-aos="fade-up" data-aos-duration="600">
            <div className="footer-actions">
              <Link to="/" className="footer-btn primary">
                Read More Posts
              </Link>
              <Link to="/donate" className="footer-btn secondary">
                Support Our Cause
              </Link>
            </div>
            
            <div className="footer-divider"></div>
            
            <div className="footer-cta">
              <h3>Make a Difference Today</h3>
              <p>Join thousands of supporters in creating positive change in communities worldwide.</p>
              <Link to="/joinus" className="cta-btn">
                Get Involved
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default PostDetail;
