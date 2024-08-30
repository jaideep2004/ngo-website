import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${API_URL}/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        setError('Error fetching post');
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!post) return <p style={{color:"white"}}>Loading...</p>;

  return (
    <div className="postdetail">
      <h1>{post.title}</h1>
      <img src={post.imageUrl} alt={post.title} className="postdetailimage" />
      <div className='posttext' dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default PostDetail;
