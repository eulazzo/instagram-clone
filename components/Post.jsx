 
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { format } from "timeago.js";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "@firebase/firestore";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { db } from "../firebase";

export const Post = ({ id, username, user_img, img, caption }) => {
  const { data: session } = useSession();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) => {
        setLikes(snapshot.docs);
      }),
    [db, id]
  );

  //5horas e 12 min

  const likePostHandler = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  };

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user.uid) !== -1
      ),
    [likes]
  );

  const commentHandler = async (event) => {
    event.preventDefault();

    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          src={user_img}
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      <img src={img} className="object-cover w-full" alt="" />

      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex items-center space-x-4">
            {hasLiked ? (
              <HeartIconFilled
                onClick={likePostHandler}
                className="text-red-500 btnIcons"
              />
            ) : (
              <HeartIcon onClick={likePostHandler} className="btnIcons" />
            )}
            <ChatIcon className="btnIcons" />
            <PaperAirplaneIcon className="btnIcons" />
          </div>
          <BookmarkIcon className="btnIcons" />
        </div>
      )}

      {/* caption */}
      <p className="p-5 truncate">
        {
          likes.length >0 && (
            <p className='font-bold mb-1 '>{likes.length} likes</p>
          )
        }
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>

      {comments.length > 0 && (
        <div className="ml-10 h-15 overflow-y-scroll scrollbar-thumb-black  scrollbar-thin">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-2">
              <img
                className="h-7 rounded-full"
                src={comment.data().userImage}
                alt=""
              />
              <p className="text-sm flex-1">
                <span className="font-bold">{comment.data().username} </span>
                {comment.data().comment}
              </p>

              {
                <p className="pr-5 text-xs">
                  {format(comment.data().timestamp?.toDate())}
                </p>
              }
            </div>
          ))}
        </div>
      )}

      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="btnIcons" />
          <input
            type="text"
            className="border-none flex-1 focus:ring-0"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={commentHandler}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};
