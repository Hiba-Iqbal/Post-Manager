import Link from "next/link";
import { useBookmarksContext } from "./../Context/BookmarksContext";
import styles from "../styles/bookMark.module.css";
import { IoIosBookmark } from "react-icons/io";

const BookmarksPage = () => {
	// Get all bookmarked posts from the context
	const { bookmarkedPosts, removeBookmark } = useBookmarksContext();

	return (
		<div className={styles.bookmarksContainer}>
			{/* Link to navigate back to the posts page */}
			<Link href='/'>
				<div className={styles.goBackLink}>Go back to posts</div>
			</Link>

			{/* Heading for bookmarked posts */}
			<h1>Your Bookmarks</h1>

			{/* Check if there are any bookmarked posts */}
			{bookmarkedPosts.length > 0 ? (
				// If there are bookmarked posts, map through and display each
				bookmarkedPosts.map((post) => (
					<div key={post.id} className={styles.bookmarkItem}>
						{/* Bookmark icon */}
						<IoIosBookmark
							color='red'
							className={styles.bookmarkIcon}
							onClick={() => removeBookmark(post.id)}
						/>
						{/* Title and content of the bookmarked post */}
						<h2 className={styles.bookmarkTitle}>{post.title}</h2>
						<p className={styles.bookmarkContent}>{post.body}</p>
					</div>
				))
			) : (
				// If there are no bookmarks, display a message
				<p className={styles.noBookmarks}>No bookmarks yet.</p>
			)}
		</div>
	);
};

export default BookmarksPage;
