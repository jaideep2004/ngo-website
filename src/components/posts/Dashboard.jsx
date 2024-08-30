import React from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";
import "./post.css";

const Dashboard = () => {
	return (
		<div className='dashContain'>
			<div className="adminhead">
			
				<h1>Admin Dashboard</h1>
			</div>

			<PostForm />
			{/* <PostList/> */}
		</div>
	);
};

export default Dashboard;
