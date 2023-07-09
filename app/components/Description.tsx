// rendering the description text
import TypingEffect from "./TextAnimation";

interface DescriptionProps {
    title: string[];
    text: string;
}

function Description({descriptionText}: {descriptionText: DescriptionProps}) {
    return ( 
        <>
            {descriptionText.title.map((t) => {
                return (
                    <div key={t}>
                        <h1>{t}</h1>
                        <br/>
                    </div>
                )
            })}
            <TypingEffect text={descriptionText.text} speed={0.02}/>
        </>
    );
}

export default Description;