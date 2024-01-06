import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/posts.module.css";
import Link from "next/link";
import Pagination from "../component/Pagination/Pagination";
import Search from "../component/Search/Search";
import { IoIosBookmark } from "react-icons/io";
import { MdBookmarkAdd } from "react-icons/md";
import { useBookmarksContext } from "./../Context/BookmarksContext";

const PostsPage = () => {
	// Context for managing bookmarks
	const { bookmarkedPosts, addBookmark, removeBookmark } =
		useBookmarksContext();

	// State for posts data, current page, and search query
	const [posts, setPosts] = useState([]);
	const [pageNumber, setPageNumber] = useState(0);
	const [searchQuery, setSearchQuery] = useState("");
	const postsPerPage = 10;

	// Fetch posts data from the API
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://jsonplaceholder.typicode.com/posts"
				);
				setPosts(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	// Calculate the range of posts to display based on the current page
	const pagesVisited = pageNumber * postsPerPage;

	// Filter posts based on the search query
	const filteredPosts = posts.filter((post) =>
		post.title.toLowerCase().includes(searchQuery.toLowerCase())
	);

	// Display the paginated and filtered posts
	const displayPosts = filteredPosts.slice(
		pagesVisited,
		pagesVisited + postsPerPage
	);

	// Calculate the total number of pages
	const pageCount = Math.ceil(filteredPosts.length / postsPerPage);

	// Function to handle page change
	const handlePageChange = ({ selected }) => {
		setPageNumber(selected);
	};

	// Function to handle search
	const handleSearch = (event) => {
		setSearchQuery(event.target.value);
		setPageNumber(0);
	};

	// Function to handle bookmark click
	const handleBookmarkClick = (post) => {
		const isAlreadyBookmarked = bookmarkedPosts.some((p) => p.id === post.id);

		if (isAlreadyBookmarked) {
			// Remove post from bookmarks using context method
			removeBookmark(post.id);
		} else {
			// Add post to bookmarks using context method
			addBookmark(post);
		}
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>POST MANAGER</h1>

			<Link href={"/bookmarks"} style={{ textDecoration: "none" }}>
				<div className={styles.bookmarksLink}>
					<IoIosBookmark className={styles.bookmarkIcon} />
					Bookmarks
				</div>
			</Link>

			<Search handleSearch={handleSearch} />

			{displayPosts.length > 0 ? (
				displayPosts.map((post) => (
					<div key={post.id} className={styles.post}>
						<div
							className={styles.postBookmark}
							onClick={() => handleBookmarkClick(post)}>
							{bookmarkedPosts.some((p) => p.id === post.id) ? (
								<IoIosBookmark color='red' />
							) : (
								<MdBookmarkAdd color='#4c566a' />
							)}
						</div>

						<h2 className={styles.heading}>{post.title}</h2>
						<p className={styles.description}>{post.body.slice(0, 40)}...</p>

						<Link href={`/${post.id}`}>
							<div className={styles.read_more_btn}>Read More</div>
						</Link>
					</div>
				))
			) : (
				<p className={styles.noPosts}>No posts found.</p>
			)}

			{posts.length > 0 && (
				<Pagination pageCount={pageCount} onPageChange={handlePageChange} />
			)}
		</div>
	);
};

export default PostsPage;
