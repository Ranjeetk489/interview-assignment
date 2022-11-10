import React from "react";
import styles from "./Card.module.scss";
import CardGenre from "./CardGenre/CardGenre";

export type CardData = {
	title: { _typename: string; english: string };
	bannerImage?: string;
	genres?: string[];
	averageScore?: string;
	description?: string;
};

type CardDataParam = {
	cardData: CardData;
};

const Card: React.FC<CardDataParam> = ({ cardData }: CardDataParam) => {
	const { title, bannerImage, genres, averageScore, description } = cardData;

	return (
		<div className={styles.cardContainer}>
			<img src={bannerImage} alt="anime-image" />
			<div className="card-body">
				<div className="card-title">{title?.english}</div>
				<div className={styles.genreContainer}>
					{genres?.map((genre: string, idx: number) => {
						return (
							<div key={idx}>
								<CardGenre genre={genre} key={idx} />
							</div>
						);
					})}
				</div>
				{/* <div className="card-desc">{description}</div> */}
				<div className="card-score">Average Score- {averageScore}</div>
			</div>
		</div>
	);
};

export default Card;
