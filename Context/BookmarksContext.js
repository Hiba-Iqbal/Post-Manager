import React, { createContext, useContext, useState } from "react";

// Create a context for managing bookmarks
const BookmarksContext = createContext();

// Custom hook to use the bookmarks context
export const useBookmarksContext = () => {
	return useContext(BookmarksContext);
};

// Provider component for managing bookmarks state
export const BookmarksProvider = ({ children }) => {
	// State to store bookmarked posts
	const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

	// Function to add a bookmark
	const addBookmark = (post) => {
		setBookmarkedPosts([...bookmarkedPosts, post]);
	};

	// Function to remove a bookmark
	const removeBookmark = (postId) => {
		setBookmarkedPosts(bookmarkedPosts.filter((post) => post.id !== postId));
	};

	return (
		// Provide the context value to the children components
		<BookmarksContext.Provider
			value={{ bookmarkedPosts, addBookmark, removeBookmark }}>
			{children}
		</BookmarksContext.Provider>
	);
};
