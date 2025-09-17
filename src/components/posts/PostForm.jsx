import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { usePosts } from "./PostContext";
import PostList from "./PostList";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
	FaPlus, 
	FaImage, 
	FaTrash, 
	FaEye, 
	FaCalendarAlt,
	FaSave,
	FaSpinner
} from 'react-icons/fa';

const API_URL = "https://ngowebsitebackend-4dkd.onrender.com/api";

const PostForm = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [image, setImage] = useState(null);
	const [imagePreview, setImagePreview] = useState(null);
	const [loading, setLoading] = useState(false);
	const [dragActive, setDragActive] = useState(false);
	const { posts, addPost, removePost, setError } = usePosts();

	useEffect(() => {
		AOS.init();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true); // Start loading indicator

		const formData = new FormData();
		formData.append("title", title);
		formData.append("content", content);
		if (image) {
			formData.append("image", image);
		}

		try {
			const response = await axios.post(`${API_URL}/posts`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			addPost(response.data); // Use context to add post
			setTitle("");
			setContent("");
			setImage(null);
			setImagePreview(null); // Clear image preview after upload
			toast.success("Post created successfully"); // Show success toast
			console.log("Post created successfully");
		} catch (error) {
			setError("Error creating post");
			toast.error("Error creating post"); // Show error toast
			console.error("Error creating post:", error);
		} finally {
			setLoading(false); // Stop loading indicator
		}
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		processImageFile(file);
	};

	const processImageFile = (file) => {
		if (file && file.type.startsWith('image/')) {
			setImage(file);
			setImagePreview(URL.createObjectURL(file));
		} else {
			toast.error("Please select a valid image file");
		}
	};

	const handleDrag = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === "dragenter" || e.type === "dragover") {
			setDragActive(true);
		} else if (e.type === "dragleave") {
			setDragActive(false);
		}
	};

	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			processImageFile(e.dataTransfer.files[0]);
		}
	};

	const removeImage = () => {
		setImage(null);
		setImagePreview(null);
	};

	const formatDate = (dateString) => {
		const options = { year: 'numeric', month: 'short', day: 'numeric' };
		return new Date(dateString).toLocaleDateString(undefined, options);
	};

	const deletePost = async (postId) => {
		try {
			await axios.delete(`${API_URL}/posts/${postId}`);
			removePost(postId); // Use context to remove post
			toast.success("Post deleted successfully"); // Show success toast
			console.log("Post deleted successfully");
		} catch (error) {
			setError("Error deleting post");
			toast.error("Error deleting post"); // Show error toast
			console.error("Error deleting post:", error);
		}
	};

	return (
		<div className='admin-dashboard-wrapper'>
			<div className='admin-container'>
				{/* Header Section */}
				<header className='admin-header' data-aos="fade-down" data-aos-duration="600">
					<div className='header-content'>
						<div className='header-badge'>
							<FaPlus className='badge-icon' />
							<span>Content Management</span>
						</div>
						<h1 className='admin-title'>Create New Post</h1>
						<p className='admin-subtitle'>Share your NGO's latest updates and stories with the world</p>
					</div>
				</header>

				{/* Create Post Form */}
				<section className='create-post-section' data-aos="fade-up" data-aos-duration="800">
					<div className='form-container'>
						<form onSubmit={handleSubmit} className='modern-post-form'>
							{/* Title Input */}
							<div className='form-group'>
								<label className='form-label'>Post Title</label>
								<div className='input-wrapper'>
									<input
										type='text'
										value={title}
										onChange={(e) => setTitle(e.target.value)}
										required
										placeholder='Enter an engaging title for your post...'
										className='modern-input'
									/>
									<div className='input-focus-border'></div>
								</div>
							</div>

							{/* Content Editor */}
							<div className='form-group'>
								<label className='form-label'>Post Content</label>
								<div className='editor-wrapper'>
									<ReactQuill
										value={content}
										onChange={setContent}
										className='modern-editor'
										placeholder='Write your post content here...'
										modules={{
											toolbar: [
												[{ 'header': [1, 2, 3, false] }],
												['bold', 'italic', 'underline', 'strike'],
												[{ 'list': 'ordered'}, { 'list': 'bullet' }],
												['link'],
												['clean']
											]
										}}
									/>
								</div>
							</div>

							{/* Image Upload */}
							<div className='form-group'>
								<label className='form-label'>Featured Image</label>
								<div 
									className={`image-upload-area ${
										dragActive ? 'drag-active' : ''
									} ${imagePreview ? 'has-image' : ''}`}
									onDragEnter={handleDrag}
									onDragLeave={handleDrag}
									onDragOver={handleDrag}
									onDrop={handleDrop}
								>
									{!imagePreview ? (
										<div className='upload-content'>
											<FaImage className='upload-icon' />
											<h3>Drop your image here</h3>
											<p>or click to browse files</p>
											<input
												type='file'
												onChange={handleImageChange}
												accept='image/*'
												className='file-input'
											/>
										</div>
									) : (
										<div className='image-preview'>
											<img src={imagePreview} alt='Preview' className='preview-image' />
											<div className='image-overlay'>
												<button type='button' onClick={removeImage} className='remove-image-btn'>
													<FaTrash /> Remove
												</button>
											</div>
										</div>
									)}
								</div>
							</div>

							{/* Submit Button */}
							<div className='form-actions'>
								<button 
									type='submit' 
									disabled={loading || !title.trim() || !content.trim()}
									className='submit-btn'
								>
									{loading ? (
										<>
											<FaSpinner className='spinner' /> Publishing...
										</>
									) : (
										<>
											<FaSave /> Publish Post
										</>
									)}
								</button>
							</div>
						</form>
					</div>
				</section>

				{/* Existing Posts Section */}
				<section className='existing-posts-section' data-aos="fade-up" data-aos-duration="800">
					<div className='section-header'>
						<h2 className='section-title'>
							<FaEye className='section-icon' />
							Existing Posts
						</h2>
						<div className='posts-count'>
							{posts.length} {posts.length === 1 ? 'Post' : 'Posts'}
						</div>
					</div>

					<div className='posts-grid'>
						{posts.length === 0 ? (
							<div className='no-posts'>
								<FaImage className='no-posts-icon' />
								<h3>No posts yet</h3>
								<p>Create your first post to get started!</p>
							</div>
						) : (
							posts.map((post) => (
								<div key={post._id} className='admin-post-card'>
									{post.imageUrl && (
										<div className='card-image-container'>
											<img
												src={post.imageUrl}
												alt={post.title}
												className='card-image'
											/>
											<div className='card-overlay'>
												<button
													onClick={() => deletePost(post._id)}
													className='delete-btn'
													title='Delete Post'
												>
													<FaTrash />
												</button>
											</div>
										</div>
									)}
									<div className='card-content'>
										<h3 className='card-title'>{post.title}</h3>
										<div className='card-meta'>
											<FaCalendarAlt className='meta-icon' />
											<span>{post.createdAt ? formatDate(post.createdAt) : 'Recently'}</span>
										</div>
										<div 
											className='card-excerpt'
											dangerouslySetInnerHTML={{
												__html: post.content.substring(0, 120) + "...",
											}}
										/>
									</div>
								</div>
							))
						)}
					</div>
				</section>

				{/* Toast Container */}
				<ToastContainer 
					position="top-right"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
				/>

				{/* Public Posts List */}
				<div className="public-posts-container">
					<PostList />
				</div>
			</div>
		</div>
	);
};

export default PostForm;
