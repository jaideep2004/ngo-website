import React, { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { usePosts } from "./PostContext"; // Adjust the path as necessary
import PostList from "./PostList";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const API_URL = "https://ngowebsitebackend-4dkd.onrender.com/api";

const PostForm = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [image, setImage] = useState(null);
	const [imagePreview, setImagePreview] = useState(null); // State for image preview
	const [loading, setLoading] = useState(false); // State for loading indicator
	const { posts, addPost, removePost, setError } = usePosts(); // Use context

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
		if (file) {
			setImage(file);
			setImagePreview(URL.createObjectURL(file)); // Create image preview URL
		}
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
		<div className='postFormcontain'>
			<div className='adminhead'>
				{" "}
				<h2>Create Post</h2>
			</div>

			<form onSubmit={handleSubmit} className='postForm'>
				<div className='formdiv'>
					<label>Title:</label>
					<input
						type='text'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
						placeholder='Title'
					/>
				</div>
				<div className='formdiv'>
					<label>Content:</label>
					<ReactQuill
						value={content}
						onChange={setContent}
						className='quillcontain'
						style={{ border: "none" }}
					/>
				</div>
				<div className='formdiv' id='adminImg'>
					<label>Image:</label>

					<input type='file' onChange={handleImageChange} />
					{imagePreview && (
						<div className='imgPre'>
							<img
								src={imagePreview}
								alt='Image Preview'
								style={{
									maxWidth: "150px",
									maxHeight: "150px",
									objectFit: "cover",
								}}
							/>
						</div>
					)}
				</div>
				<div className='formdiv'>
					<label htmlFor=''></label>
					<button type='submit' disabled={loading} id='adminBtn'>
						{loading ? "Creating..." : "Create Post"}
					</button>
					{setError && <p>{setError}</p>}
				</div>
			</form>
			<h2 className='existPostHead'>Existing Posts</h2>
			<div className='existPosts'>
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
							<button
								onClick={() => deletePost(post._id)}
								className='postDelete'>
								Delete
							</button>
						</div>
					))
				)}
			</div>
			<ToastContainer />
			<div className="compContain">
			<PostList />
			</div>
      
		</div>
	);
};

export default PostForm;
