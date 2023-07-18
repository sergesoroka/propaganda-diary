import styles from "./MediaList.module.css";
import data from "../../../data/mediaLists.json";

function MediaList({
  country,
  media,
  setMedia,
}: {
  country: string;
  media: string;
  setMedia: (media: string) => {};
}) {
  const mediaList = data.map((item, i) => {
    if (item.country === country) {
      let mediaName = item.name;
      return (
        <div key={i} onClick={() => setMedia(mediaName)}>
          <p className={styles.listItem}>{item.name}</p>
        </div>
      );
    }
  });
  return (
    <div className={styles.MediaList}>
      <p className={styles.allMediaButton} onClick={() => setMedia("all")}>
        ALL MEDIA
      </p>
      {mediaList}
    </div>
  );
}

export default MediaList;