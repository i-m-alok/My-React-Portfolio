import React, { useEffect, useState } from "react";

const CHANNEL_ID = "UCSos_jXdo44fiCBf_plqyLA";
const BASE_URL = `https://www.googleapis.com/youtube/v3/playlists?part=snippet%2Cplayer&channelId=${CHANNEL_ID}&maxResults=50&access_token=${process.env.REACT_APP_API_KEY}&key=${process.env.REACT_APP_API_KEY}`;

function Playlist() {
  const [fetchData, setData] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((result) => result.json())
      .then((fetchedData) => {
        // console.log(fetchedData);
        setData(fetchedData.items);
      });
  }, []);

  return (
    <ul className="list-group d-flex flex-row flex-wrap justify-content-center">
      {/* {console.log(fetchData)} */}
      {fetchData
        ? fetchData.map((item) => {
            const { id, snippet = {} } = item;
            const { title, thumbnails = {} } = snippet;
            const { medium = {} } = thumbnails;
            return (
              <li
                className="card card-width border border-primary shadow list-group-item m-3"
                key={id}
              >
                <a href={`https://www.youtube.com/playlist?list=${id}`}>
                  <img
                    className="card-img-top"
                    src={medium.url}
                    alt="Card image cap"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  {/* <p className="card-text description">{description}</p> */}
                </div>
              </li>
            );
          })
        : null}
    </ul>
  );
}
export default Playlist;
