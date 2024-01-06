import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

const Pagination = ({ pageCount, onPageChange }) => {
	return (
		<div>
			<ReactPaginate
				breakClassName={styles.paginationDots}
				previousLabel={"Previous"}
				nextLabel={"Next"}
				pageCount={pageCount}
				onPageChange={onPageChange}
				containerClassName={styles.pagination}
				pageLinkClassName={styles.pageNum}
				previousLinkClassName={styles.pageNum}
				nextLinkClassName={styles.pageNum}
				activeClassName={styles.active}
				disabledClassName={styles.paginationDisabled}
			/>
		</div>
	);
};

export default Pagination;
