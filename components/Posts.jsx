import { useEffect, useState } from "react";
import { Post } from "./Post";
import {
  onSnapshot,
  collection,
  query,
  orderBy,
  serverTimestamp,
} from "@firebase/firestore";
import { db } from "../firebase";
const posts = [
  {
    id: "1",
    username: "eulazzo",
    user_img: "https://thispersondoesnotexist.com/image",
    img: "https://thispersondoesnotexist.com/image",
    caption: "This is D.O.P.E!",
  },
  {
    id: "2",
    username: "eulazzo",
    user_img: "https://thispersondoesnotexist.com/image",
    img: "https://thispersondoesnotexist.com/image",
    caption: "This is D.O.P.E!",
  },
];

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),

    [db]
  );
 console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          user_img={post.data().profileImg}
          img={post.data().image }
          caption={post.data().caption}
        />
      ))}
    </div>
  );
};

export default Posts;
