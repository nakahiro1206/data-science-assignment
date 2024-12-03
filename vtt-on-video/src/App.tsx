import ReactPlayer from "react-player";
import "./Caption.css"; // Import the CSS for subtitle styling

export const App = () => {
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <div>
      <ReactPlayer
        url={`${publicUrl}/sanbaka-sightseeing.mp4`}
        controls={true}
        width="100%"
        height="100%"
        playing={true}
        muted={true} //temporary fix since videos with audio don't autoplay on most browsers
        config={{
          file: {
            tracks: [
              {
                kind: "subtitles",
                src: `${publicUrl}/sanbaka-sightseeing-cnn-norm.vtt`,
                srcLang: "en",
                label: "English",
                default: true,
              },
            ],
          },
        }}
      />
    </div>
  );
};
