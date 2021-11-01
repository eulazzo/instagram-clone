import { Post } from "./Post";

const posts =  [
  {
    id:'1',
    username:'eulazzo',
    user_img:'https://thispersondoesnotexist.com/image',
    img:'https://thispersondoesnotexist.com/image',
    caption:'This is D.O.P.E!'
  },
  {
    id:'2',
    username:'eulazzo',
    user_img:'https://thispersondoesnotexist.com/image',
    img:'https://thispersondoesnotexist.com/image',
    caption:'This is D.O.P.E!'
  },
]
   

const Posts = () => {
  return (
    <div>
      {posts.map(({id,username,user_img,caption, img}) => (
        <Post key={id}
          id={id}
          username={username}
          user_img={user_img}
          caption={caption}
          img={img}
        />
      ))}
    </div>
  );
};

export default Posts  