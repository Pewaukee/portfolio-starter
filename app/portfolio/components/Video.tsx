export default function Video({ src }: { src: string }) {
  return (
    <div>
      <video
        controls
        disablePictureInPicture
        controlsList="nodownload nofullscreen"
      >
        <source src={src} type="video/mp4" />
        Your Browser does not support this video.
      </video>
    </div>
  );
}
