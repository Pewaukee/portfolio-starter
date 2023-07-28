import Divider from './Divider';
import FadeUp from './FadeUp';
import HomeElement from './HomeElement';

export default function Mapper({
  array,
  styles,
  type,
}: {
  array: {
    id: number;
    containerStyle: string;
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
  }[];
  styles: {
    main: string;
    leftContainer: string;
    centerContainer: string;
    rightContainer: string;
  };
  type: 'picture' | 'video';
}) {
  return (
    <>
      {array.map((data, index) => (
        <div key={data.id}>
          <FadeUp className={styles.main}>
            <HomeElement
              mainImage={data.mainImage}
              icons={data.icons}
              descriptionText={data.descriptionText}
              styles={styles}
              type={type}
            />
          </FadeUp>

          {/* FIXME: add divider if not last element */}
          {index !== array.length - 1 ? <Divider /> : null}
        </div>
      ))}
    </>
  );
}
