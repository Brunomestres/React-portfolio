import "./style.css";
import Award from "../../img/award.png";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3118214/pexels-photo-3118214.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          provident illo reiciendis.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non a
          laboriosam nesciunt delectus at perspiciatis nemo vel sunt, nulla
          inventore perferendis modi. Magni enim voluptatem repudiandae
          quibusdam aperiam nostrum earum.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International design</h4>
            <p className="a-award-desc">
              Magni enim voluptatem repudiandae quibusdam aperiam nostrum earum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { About };
