import React from "react";
import { useLoaderData } from "react-router-dom";
import Card, { CardData } from "../../components/Card/Card";
import { useGetAnimes } from "../../hooks/animes/useGetAnimes";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
	const data = useGetAnimes()
	return <div className={styles.cardsContainer}>
		{data?.map((item: CardData,idx:number) => {
			return <div key={idx}>
			<Card cardData = {item} />
			</div>
		})}
	</div>;
};

export default Home;

