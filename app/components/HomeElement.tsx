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
  mainImage: {
    className: string;
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
  styles: {
    main: string;
    leftContainer: string;
    centerContainer: string;
    rightContainer: string;
  };
  type: 'picture' | 'video';
};

const HomeElement: React.FC<HomeElementProps> = ({
  mainImage,
  icons,
  descriptionText,
  styles,
  type,
}) => {
  // TODO: get rid of 3-component? Too restricting
  return (
    <ThreeComponent
      left={
        <div className="flex justify-center items-center">
          <div className="relative w-[70%] h-[70%]">
            {/** icons for left component */}
            <Icon icons={icons} />
            {/** picture/video for left component */}
            {type === 'picture' ? (
              <Picture mainImage={mainImage} />
            ) : (
              <Video videoProps={mainImage} />
            )}
          </div>
        </div>
      }
      /** vertical line for center component */
      center={<></>}
      /** description text for the right component */
      right={<Description descriptionText={descriptionText} />}
      styles={styles}
    />
  );
};

export default HomeElement;
