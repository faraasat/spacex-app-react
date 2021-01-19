import { CircularProgress } from "@material-ui/core";
import { useMissionDetailsQuery } from "../../generated/graphql";
import "./mission-details.styles.css";

interface IMissionDetails {
  id: any;
}

const MissionDetails: React.FC<IMissionDetails> = ({ id }) => {
  const { loading, error, data } = useMissionDetailsQuery({
    variables: { id: id },
  });
  if (loading) {
    return (
      <div className="mission-details__loading">
        <CircularProgress style={{ width: "19.5vw", height: "19.5vw" }} />
      </div>
    );
  }
  if (error)
    return (
      <div className="mission-details__error">
        Oops!&nbsp;&nbsp;<p>An Unexpected Error Occured.</p>
      </div>
    );

  const flickr_images: string[] = data!
    .launch!.links!.flickr_images!.toLocaleString()
    .split(",");

  return (
    <div className="mission-details__alignment">
      <div className="mission-details__basic">
        <h1>Launch Mission Basics:</h1>
        <div>
          <span>ID: #{data!.launch?.mission_id}</span>
          <span>NAME: {data!.launch?.mission_name}</span>
          <span>
            DATE (LOCAL): {data!.launch?.launch_date_local.split("T")[0]}
          </span>
          <span>LAUNCH YEAR: {data!.launch?.launch_year}</span>
        </div>
      </div>
      <div className="mission-details__details">
        <h1>Mission Site Details:</h1>
        <div>
          <span>SITE ID: {data!.launch?.launch_site?.site_id}</span>
          <span>SHORT NAME: {data!.launch?.launch_site?.site_name}</span>
          <span>FULL NAME: {data!.launch?.launch_site?.site_name_long}</span>
        </div>
      </div>
      <div className="mission-details__details">
        <h1>Mission Rocket Details:</h1>
        {data!.launch?.rocket?.rocket_name &&
        data!.launch?.rocket?.rocket_type ? (
          <div>
            <span>
              ROCKET NAME:{" "}
              {data!.launch?.rocket?.rocket_name
                ? data!.launch?.rocket?.rocket_name
                : "N/A"}
            </span>
            <span>
              ROCKET TYPE:{" "}
              {data!.launch?.rocket?.rocket_type
                ? data!.launch?.rocket?.rocket_type
                : "N/A"}
            </span>
          </div>
        ) : (
          <span>N/A</span>
        )}
      </div>
      <div className="mission-details__images">
        <h1>Mission Details Links:</h1>
        <div>
          <span>
            ARTICLE LINK:{" "}
            {data!.launch?.links?.article_link ? (
              <a
                href={data!.launch!.links!.article_link!}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data!.launch!.links?.article_link}
              </a>
            ) : (
              "N/A"
            )}
          </span>
          <span>
            VIDEO LINK:{" "}
            {data!.launch?.links?.video_link ? (
              <a
                href={data!.launch!.links!.video_link!}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data!.launch?.links?.video_link}
              </a>
            ) : (
              "N/A"
            )}
          </span>
          <span>
            WIKIPEDIA LINK:{" "}
            {data!.launch?.links?.wikipedia ? (
              <a
                href={data!.launch!.links!.wikipedia!}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data!.launch?.links?.wikipedia}
              </a>
            ) : (
              "N/A"
            )}
          </span>
          <div>
            {flickr_images.map((fli_img) => {
              return <img src={fli_img!} alt={data!.launch?.mission_name!} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionDetails;
