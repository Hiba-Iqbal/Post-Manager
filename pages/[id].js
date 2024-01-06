import { useRouter } from "next/router";
import styles from "../styles/postDetail.module.css";
import Link from "next/link";

const PostDetail = ({ post }) => {
	// Get the current router instance
	const router = useRouter();
	// Extract the 'id' parameter from the router query
	const { id } = router.query;

	return (
		<div className={styles.container}>
			{post && (
				<>
					{/* Link to navigate back to the posts page */}
					<Link href='/'>
						<div className={styles.goBackLink}>Go back to posts</div>
					</Link>

					{/* Post details section */}
					<h1 className={styles.title}>Post Details</h1>
					<h2 className={styles.postTitle}>{post.title}</h2>
					<p className={styles.postBody}>{post.body}</p>
				</>
			)}
		</div>
	);
};

export default PostDetail;

export async function getServerSideProps(context) {
	// Destructure the 'params' object from the context
	const { params } = context;
	// Extract the 'id' parameter from the 'params'
	const { id } = params;

	try {
		// Fetch post details based on the 'id'
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
		const post = await res.json();

		return {
			// Pass fetched post details as props
			props: {
				post,
			},
		};
	} catch (error) {
		// Log an error if fetching post details fails
		console.error("Error fetching post details:", error.message);

		return {
			// Return an empty props object in case of an error
			props: {},
		};
	}
}
