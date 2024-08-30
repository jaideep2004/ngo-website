import React, { createContext, useState, useContext } from "react";

// Create the context
const PostContext = createContext();

// Create the provider component
export const PostProvider = ({ children }) => {
	const [posts, setPosts] = useState([]); // State to hold the list of posts
	const [error, setError] = useState(""); // State to hold any errors
	const [loading, setLoading] = useState(false); // State to track loading status

	// Function to add a new post
	const addPost = (newPost) => {
		setPosts((prevPosts) => [...prevPosts, newPost]);
	};

	// Function to remove a post by ID
	const removePost = (postId) => {
		setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
	};

	// Function to clear the error
	const clearError = () => {
		setError("");
	};

	return (
		<PostContext.Provider
			value={{
				posts,
				setPosts,
				addPost,
				removePost,
				error,
				setError,
				clearError,
				loading,
				setLoading,
			}}>
			{children}
		</PostContext.Provider>
	);
};

// Custom hook to use the PostContext
export const usePosts = () => {
	const context = useContext(PostContext);
	if (!context) {
		throw new Error("usePosts must be used within a PostProvider");
	}
	return context;
};
