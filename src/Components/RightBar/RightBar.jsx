import "./RightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      {/* This is the full container for left side */}
      <div className="container">
        {/* This is the first item in the left container ... */}
        <div className="item">
          <span>Suggestions for You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1611042553365-9b101441c135?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww"
                alt=""
              />
              <span>angle priya</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Remove</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1618721405821-80ebc4b63d26?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"
                alt=""
              />
              <span>papa-ki-pari</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Remove</button>
            </div>
          </div>
        </div>

        {/* This is the second item in the left container ... */}
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=360&w=712"
                alt=""
              />
              <p>
                <span>waqui khan</span> changed their cover picture
              </p>
            </div>
            <span> 1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/19315251/pexels-photo-19315251/free-photo-of-elderly-person-gazing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <p>
                <span>kabir singh</span> tagged you
              </p>
            </div>
            <span> 9 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/12088002/pexels-photo-12088002.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <p>
                <span>isha malviya</span> comment on post
              </p>
            </div>
            <span> 19 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/18221948/pexels-photo-18221948/free-photo-of-beautiful-brunette-woman-in-white-off-the-shoulder-dress-standing-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <p>
                <span>namrata_singh</span> changed dp
              </p>
            </div>
            <span> 35 min ago</span>
          </div>
        </div>

        {/* This is the third item in the left container ... */}
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/18221948/pexels-photo-18221948/free-photo-of-beautiful-brunette-woman-in-white-off-the-shoulder-dress-standing-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>namrata_singh</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/12088002/pexels-photo-12088002.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <div className="online" />
              <span>isha malviya</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/19315251/pexels-photo-19315251/free-photo-of-elderly-person-gazing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <div className="online" />
              <span>kabir singh</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/19416910/pexels-photo-19416910/free-photo-of-a-couple-walking-down-the-street-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <div className="online" />
              <span>abuzar salman</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=360&w=712"
                alt=""
              />
              <div className="online" />
              <span>waqui khan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
