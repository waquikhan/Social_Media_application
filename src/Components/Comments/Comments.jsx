import "./Comments.scss";

const Comments = () => {
  const comments = [
    {
      id: 1,
      desc: "Lorem ispojf jfkdasieru Lorem ispojf jfkdasieru nkfjaue n vxckkhie nhsjhf Lorem ispojf jfkdasieru nkfjaue n vxckkhie nhsjhf Lorem ispojf jfkdasieru nkfjaue n vxckkhie nhsjhf Lorem ispojf jfkdasieru nkfjaue n vxckkhie nhsjhf Lorem ispojf jfkdasieru nkfjaue n vxckkhie nhsjhf  nkfjaue n vxckkhie nhsjhf",
      username: "kanir singh",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/19315251/pexels-photo-19315251/free-photo-of-elderly-person-gazing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load ",
    },
    {
      id: 2,
      desc: "Lorem ispojf jfkdasieru nkfjaue n vxckkhie nhsjhf Lorem ispojf jfkdasieru nkfjaue n vxckkhie nhsjhf Lorem ispojf jfkdasieru nkfjaue n vxckkhie nhsjhf Lorem ispojf jfkdasieru nkfjaue n vxckkhie nhsjhf Lorem ispojf jfkdasieru nkfjaue n vxckkhie nhsjhf",
      username: "isha malviya",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/12088002/pexels-photo-12088002.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src="https://images.pexels.com/photos/296114/pexels-photo-296114.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <input type="text" placeholder="Write a comment .." />
        <button>Post</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.username}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
