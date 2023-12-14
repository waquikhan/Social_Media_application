import "./Profile.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../Components/Posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/18306540/pexels-photo-18306540/free-photo-of-a-woman-walking-alone-on-the-heydar-aliyev-centre-in-baku-azerbaijan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/19414563/pexels-photo-19414563/free-photo-of-a-woman-in-a-leather-jacket-sitting-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookIcon fontSize="large" />
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="">
              <a href="http://linkedin.com">
                <LinkedInIcon fontSize="large" />
              </a>
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="https://in.pinterest.com/">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Waqui Khan</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>India</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>English</span>
              </div>
            </div>
            <button className="button">follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <div className="posts">
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
