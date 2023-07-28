// rendering the description text
import { textShadow } from "../../data/TextShadow";
import TypingEffect from "./TextAnimation";

interface DescriptionProps {
    title: string[];
    text: string;
}

function Description({descriptionText}: {descriptionText: DescriptionProps}) {
    return ( 
        <div style={textShadow}>
            {descriptionText.title.map((t) => {
                return (
                    <div key={t}>
                        <h1>{t}</h1>
                        <br/>
                    </div>
                )
            })}
            <TypingEffect text={descriptionText.text} speed={0.02}/>
        </div>
    );
}

export default Description;