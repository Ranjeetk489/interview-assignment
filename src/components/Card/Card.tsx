import React from "react";
import cardStyles from "./Card.module.css";
type CardData = {
	title: string;
	bannerImage?: string;
	genres?: string[];
	averageScore?: string;
	description?: string;
};

const Card: React.FC<CardData> = ({
	title,
	bannerImage,
	genres,
	averageScore,
	description,
}: CardData) => {
	return (
		<div>
			<img src={bannerImage} alt="anime-image" />
			<div className="card-body">
				<div className="card-title">{title}</div>
				{genres?.map((genre: string, idx: number) => {
						return <CardGenre genre={genre} key={idx} />;
					})}
				<div className="card-desc">{description}</div>
				<div className="card-score">{averageScore}</div>
			</div>
		</div>
	);
};

export default Card;

type CardGenreData = {
	genre: string;
	key: number;
};

const CardGenre: React.FC<CardGenreData> = ({ genre, key }: CardGenreData) => {
	return (
		<div className="genre-body" key={key}>
			<span className="genre-title">{genre}</span>
		</div>
	);
};
