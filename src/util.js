import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      id: uuidv4(),
      title: "Embers",
      artist: "Molly McPhaul, Enluv ",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/01/d7c0bd347f56540babd9dd85454b93a89df84a15-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30135",
      color: ["#183A4D", "#E48966"],
      active: false,
    },
    {
      id: uuidv4(),
      title: "Green Tea",
      artist: "Aves",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/02/601932bb9d6e204a256293df2ae5b1993951d6c4-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30308",
      color: ["#DCCFB5", "#CD2246"],
      active: false,
    },
    {
      id: uuidv4(),
      title: "Tropical Midnight",
      artist: "C Y G N",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/02/7c943e75ba2e1017052e03444366c79445b43195-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=31516",
      color: ["#021221", "#A09030"],
      active: false,
    },
  ];
}
export default chillHop;
