import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { usePosts } from "./PostContext"; // Adjust the path as necessary

const API_URL = "https://ngowebsitebackend-4dkd.onrender.com/api";

const PostList = () => {
	const { posts, setPosts, setError } = usePosts(); // Use context for posts and error

	useEffect(() => {
		const loadPosts = async () => {
			try {
				const response = await axios.get(`${API_URL}/posts`);
				setPosts(response.data); // Use context to set posts
			} catch (error) {
				setError("Error fetching posts");
				console.error("Error fetching posts:", error);
			}
		};

		loadPosts();
	}, [setPosts, setError]); // Add dependencies

	return (
		<div className='post-list'>
			<h2>Latest Posts</h2>
			<div className='card-container'>
				{posts.length === 0 ? (
					<p>No posts available</p>
				) : (
					posts.map((post) => (
						<div key={post._id} className='post-card'>
							{post.imageUrl && (
								<img
									src={post.imageUrl}
									alt={post.title}
									className='post-image'
								/>
							)}
							<h3>{post.title}</h3>
							<div
								dangerouslySetInnerHTML={{
									__html: post.content.substring(0, 100) + "...",
								}}
							/>
							<Link to={`/posts/${post._id}`} className='readmore'>
								Read More
							</Link>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default PostList;
