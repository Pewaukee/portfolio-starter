import FadeUp from "./FadeUp";

function VerticalLine({height}: {height: number}) {
    return ( 
        <FadeUp className={`w-px h-px-${height} bg-white bg-opacity-50`}>
            <div></div>
        </FadeUp>
    );
}

export default VerticalLine;