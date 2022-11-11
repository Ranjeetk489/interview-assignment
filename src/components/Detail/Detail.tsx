import React from "react";
import BannerImage from "../BannerImage/BannerImage";
import { AiFillCaretDown, AiFillHeart } from "react-icons/ai";
import { BannerImageProps } from "../../common/interfaces/imageInterface";
import { Link } from "react-router-dom";


const Detail: React.FC = ({ alt, src }: BannerImageProps) => {
	return (
		<div>
			<div className="lfContainer">
				<div className="imgContainer">
					<BannerImage alt={alt} src={src} />
				</div>
				<div>
					<div>
						<button type="button">Add to List</button>
						<AiFillCaretDown size={20} />
					</div>
					<div>
						<AiFillHeart size={20} />
					</div>
				</div>
			</div>
            <div className="rhContainer">
                <span className="title">{}</span>
                <span className="description">{}</span>
                <span className="source">{}</span>
                <div>
                    <Link to={"/overview"}>Overview</Link>
                    <Link to={"/characters"}>Characters</Link>
                    <Link to={"/staff"}>Staff</Link>
                    <Link to={"/social"}>Social</Link>
                </div>
            </div>
		</div>
	);
};

export default Detail;

