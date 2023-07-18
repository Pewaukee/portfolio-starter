function VerticalLine({ height }: { height: number }) {
  return <div className={`w-px h-px-${height} bg-white bg-opacity-50`}></div>;
}

export default VerticalLine;
