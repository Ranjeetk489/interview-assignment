import React from "react";
import {BsSearch} from "react-icons/bs";
import styles from "./Header.module.scss"

const Header: React.FC = () => {
	return <div className={styles.hrContainer}>
		<h1 className="title">Animelist</h1>
		<form className={styles.inputForm}>
			<input type="text" placeholder="Search..."/>
			<button type="submit"><BsSearch size={20} /></button>
		</form>
	</div>;
};

export default Header;
