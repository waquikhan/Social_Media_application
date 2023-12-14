import Post from "../../Components/post/Post";
import "./Posts.scss";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "namrata_singh",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/18221948/pexels-photo-18221948/free-photo-of-beautiful-brunette-woman-in-white-off-the-shoulder-dress-standing-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Beuty of nature",
      image:
        "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "isha malviya",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/12088002/pexels-photo-12088002.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: " It's a good morning in the maldive",
      image:
        "https://images.pexels.com/photos/904117/pexels-photo-904117.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "abuzar salman",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/19416910/pexels-photo-19416910/free-photo-of-a-couple-walking-down-the-street-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "the nature always looks beautifull",
      image:
        "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "abuzar salman",
      userId: 4,
      profilePic:
        "https://images.pexels.com/photos/19416910/pexels-photo-19416910/free-photo-of-a-couple-walking-down-the-street-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "the nature always looks beautifull",
      image:
        "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      name: "abuzar salman",
      userId: 5,
      profilePic:
        "https://images.pexels.com/photos/19416910/pexels-photo-19416910/free-photo-of-a-couple-walking-down-the-street-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "the nature always looks beautifull",
      image:
        "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      name: "abuzar salman",
      userId: 6,
      profilePic:
        "https://images.pexels.com/photos/19416910/pexels-photo-19416910/free-photo-of-a-couple-walking-down-the-street-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "the nature always looks beautifull",
      image:
        "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      name: "abuzar salman",
      userId: 7,
      profilePic:
        "https://images.pexels.com/photos/19416910/pexels-photo-19416910/free-photo-of-a-couple-walking-down-the-street-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "the nature always looks beautifull",
      image:
        "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 8,
      name: "abuzar salman",
      userId: 8,
      profilePic:
        "https://images.pexels.com/photos/19416910/pexels-photo-19416910/free-photo-of-a-couple-walking-down-the-street-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "the nature always looks beautifull",
      image:
        "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 9,
      name: "abuzar salman",
      userId: 9,
      profilePic:
        "https://images.pexels.com/photos/19416910/pexels-photo-19416910/free-photo-of-a-couple-walking-down-the-street-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "the nature always looks beautifull",
      image:
        "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 10,
      name: "abuzar salman",
      userId: 10,
      profilePic:
        "https://images.pexels.com/photos/19416910/pexels-photo-19416910/free-photo-of-a-couple-walking-down-the-street-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "the nature always looks beautifull",
      image:
        "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 11,
      name: "abuzar salman",
      userId: 11,
      profilePic:
        "https://images.pexels.com/photos/19416910/pexels-photo-19416910/free-photo-of-a-couple-walking-down-the-street-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "the nature always looks beautifull",
      image:
        "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 12,
      name: "abuzar salman",
      userId: 12,
      profilePic:
        "https://images.pexels.com/photos/19416910/pexels-photo-19416910/free-photo-of-a-couple-walking-down-the-street-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "the nature always looks beautifull",
      image:
        "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 13,
      name: "abuzar salman",
      userId: 12,
      profilePic:
        "https://images.pexels.com/photos/19416910/pexels-photo-19416910/free-photo-of-a-couple-walking-down-the-street-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "the nature always looks beautifull",
      image:
        "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 14,
      name: "abuzar salman",
      userId: 14,
      profilePic:
        "https://images.pexels.com/photos/19416910/pexels-photo-19416910/free-photo-of-a-couple-walking-down-the-street-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "the nature always looks beautifull",
      image:
        "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 15,
      name: "abuzar salman",
      userId: 15,
      profilePic:
        "https://images.pexels.com/photos/19416910/pexels-photo-19416910/free-photo-of-a-couple-walking-down-the-street-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "the nature always looks beautifull",
      image:
        "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 16,
      name: "abuzar salman",
      userId: 16,
      profilePic:
        "https://images.pexels.com/photos/19416910/pexels-photo-19416910/free-photo-of-a-couple-walking-down-the-street-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "the nature always looks beautifull",
      image:
        "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 17,
      name: "abuzar salman",
      userId: 17,
      profilePic:
        "https://images.pexels.com/photos/19416910/pexels-photo-19416910/free-photo-of-a-couple-walking-down-the-street-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "the nature always looks beautifull",
      image:
        "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
          <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
