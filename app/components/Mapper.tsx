import Divider from './Divider';
import FadeUp from './FadeUp';
import HomeElement from './HomeElement';

export default function Mapper({
  array,
  styles,
}: {
  array: {
    id: number;
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
  }[];
  styles: {
    main: string;
    leftContainer: string;
    centerContainer: string;
    rightContainer: string;
  };
}) {
  return (
    <>
      {array.map((data, index) => (
        <div key={data.id}>
          <HomeElement
            containerStyle={data.containerStyle}
            mainImage={data.mainImage}
            icons={data.icons}
            descriptionText={data.descriptionText}
            coordinateStyles={data.coordinateStyles}
            styles={styles}
          />
          {/* FIXME: add divider if not last element */}
          {index !== array.length - 1 ? <Divider height={100} /> : null}
        </div>
      ))}
    </>
  );
}
