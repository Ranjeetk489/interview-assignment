import React from 'react';
import styles from "./CardGenre.module.scss";

type CardGenreData = {
	genre: string;
};

const CardGenre: React.FC<CardGenreData> = ({ genre }: CardGenreData) => {
	return (
		<div className={styles.genreBody}>
			<span className="genre-title">{genre}</span>
		</div>
	);
};

export default CardGenre;