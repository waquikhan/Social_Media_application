import "./LeftBar.scss";
import Friends from "../../assets/1.png"
import Groups from "../../assets/2.png"
import Market from "../../assets/3.png"
import Watch from "../../assets/4.png"
import Memories from "../../assets/5.png"
import Events from "../../assets/6.png"
import Gaming from "../../assets/7.png"
import Gallery from "../../assets/8.png"
import Videos from "../../assets/9.png"
import Massages from "../../assets/10.png"
import Tutuorial from "../../assets/12.png"
import Courses from "../../assets/13.png"
import Fund from "../../assets/11.png"

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/296114/pexels-photo-296114.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <span>Waqui Khan.</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends.</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups.</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>MarketPlace.</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch.</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories.</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events.</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming.</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery.</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos.</span>
          </div>
          <div className="item">
            <img src={Massages} alt="" />
            <span>Massages.</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fundraiser.</span>
          </div>
          <div className="item">
            <img src={Tutuorial} alt="" />
            <span>Tutorials.</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
