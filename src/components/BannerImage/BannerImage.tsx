import React from 'react'
import { BannerImageProps } from '../../common/interfaces/imageInterface';
import styles from "./BannerImage.module.scss";


const BannerImage: React.FC<BannerImageProps> = ({alt,src}: BannerImageProps ) => {
    return (
    <>
        <img src={src} alt={alt} className={styles.bannerImg}/>
    </>
    )
}

export default BannerImage