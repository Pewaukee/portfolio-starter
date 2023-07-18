// refactor of Home page of the Element, container, and corner logo images
import Image from 'next/image';
import ThreeComponent from './ThreeComponent';
import VerticalLine from './VerticalLine';
import Icon from './Icon';
import Description from './Description';
import FadeUp from './FadeUp';
import Picture from './Picture';
import Video from '../portfolio/components/Video';

type HomeElementProps = {
  containerStyle: string;
  mainImage: {
    style: string;
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  icons: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  descriptionText: {
    title: string[];
    text: string;
  };
  coordinateStyles: string[]; // of length 4 also fix or (using tailwind)
  styles: {
    main: string;
    leftContainer: string;
    centerContainer: string;
    rightContainer: string;
  };
  type: 'picture' | 'video';
};

const HomeElement: React.FC<HomeElementProps> = ({
  containerStyle,
  mainImage,
  icons,
  descriptionText,
  coordinateStyles,
  styles,
  type,
}) => {
  return (
    <ThreeComponent
      left={
        <FadeUp className={containerStyle}>
          <Icon icons={icons} coordinateStyles={coordinateStyles} />

          {/** picture/video for left component */}
          {type === 'picture' ? (
            <Picture mainImage={mainImage} />
          ) : (
            <Video src={mainImage.src} />
          )}
        </FadeUp>
      }
      /** vertical line for center component */
      center={
        <FadeUp>
          <VerticalLine height={100} />
        </FadeUp>
      }
      right={
        <FadeUp>
          <Description descriptionText={descriptionText} />
        </FadeUp>
      }
      styles={styles}
    />
  );
};

export default HomeElement;
