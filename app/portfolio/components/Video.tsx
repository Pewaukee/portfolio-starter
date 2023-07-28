export default function Video({
  videoProps,
}: {
  videoProps: {
    className: string;
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}) {
  return (
    <video
      controls
      disablePictureInPicture
      controlsList="nodownload"
      className={videoProps.className}
    >
      <source src={videoProps.src} type="video/mp4" />
      Your Browser does not support this video.
    </video>
  );
}
