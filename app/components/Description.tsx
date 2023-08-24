// rendering the description text
import { textShadow } from '../../data/TextShadow';
import TypingEffect from './TextAnimation';

function Description({
  title,
  text,
}: {
  title: string[] | string;
  text: string;
}) {
  return (
    <div style={textShadow} className="text-white">
      {typeof title === 'string' ? (
        <>
          <h1>{title}</h1>
          <br />
        </>
      ) : (
        title.map((t) => {
          return (
            <div key={t}>
              <h1>{t}</h1>
              <br />
            </div>
          );
        })
      )}
      <TypingEffect text={text} speed={0.02} />
    </div>
  );
}

export default Description;
