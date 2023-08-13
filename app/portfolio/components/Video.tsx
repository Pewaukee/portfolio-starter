export default function Video({ src }: { src: string }) {
  return (
    <video
      controls
      disablePictureInPicture
      controlsList="nodownload"
      className="border-4 rounded-2xl"
    >
      <source src={src} type="video/mp4" />
      Your Browser does not support this video.
    </video>
  );
}
