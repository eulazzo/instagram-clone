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
