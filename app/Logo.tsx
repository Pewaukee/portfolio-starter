// more general component for logos
// takes in a logo image and a link to the logo's website
import Image from 'next/image';
import styles from '../styles/Logo.module.css';

type LogoProps = {
    url: string;
    src: string;
    alt: string;
    width: number;
    height: number;
};

const Logo: React.FC<LogoProps> = ({ url, src, alt, width, height }) => {
    return (
        <div className={styles.logoContainer}>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <Image
                    src={src}
                    alt={alt}
                    className={styles.logo}
                    width={width}
                    height={height}
                />
            </a>
        </div>
        
    )
};

export default Logo;