import { useEffect, useState } from "react";

const Post = () => {
  const [albums, setAlbums] = useState([]);

  const getAlbums = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await res.json();
    setAlbums(data);
  };

  useEffect(() => {
    getAlbums();
  }, []);
  console.log(albums);

  return (
    <div>
      {albums.map((alb) => {
        return <p key={alb.id}>{alb.title}</p>;
      })}
    </div>
  );
};
export default Post;
