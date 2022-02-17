import Post from "./Post";
const Posts = ({ data }) => {
  return (
    <ul className="posts">
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default Posts;
