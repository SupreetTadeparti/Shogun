import React from "react";
import sampleVideo from "../assets/videos/sample.mp4";
import "../assets/css/WatchRoute.css";

const WatchRoute = (): React.ReactElement => {
  return (
    <div className="watch-route-container">
      <div className="video-container">
        <video className="video" src={sampleVideo} controls></video>
      </div>
      <div className="course-info">
        <div className="page-heading">Martial Arts Foo Course</div>
        <div className="heading">About This Course</div>
        <div className="about">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            reiciendis ab fugit dolore? Consequuntur sit consectetur totam.
            Illum qui hic asperiores necessitatibus accusantium incidunt,
            aperiam velit atque, deleniti, rerum non id itaque! Accusantium
            explicabo sint deleniti tempore! Similique illum animi perspiciatis
            mollitia fuga est aspernatur veritatis molestiae corporis vitae
            sequi quos eveniet quod suscipit exercitationem quia, dolore
            delectus, assumenda quam explicabo necessitatibus enim ipsam fugiat
            error. Nisi pariatur labore animi sequi harum suscipit ipsa nam
            alias laborum! Eveniet numquam commodi exercitationem natus, non
            culpa possimus labore minima veritatis perferendis nam iusto, autem
            accusantium, architecto accusamus at amet voluptatem. Alias, modi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magni
            reprehenderit molestiae, eaque aut vero id reiciendis ab
            dignissimos, sequi deserunt expedita porro odio veritatis quaerat
            officia. Est aut quasi possimus eaque, provident fuga qui voluptate
            inventore voluptatibus perspiciatis quia quis pariatur nobis neque!
            Iusto beatae porro quo dignissimos. Corrupti.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            nobis voluptates facilis officiis! Velit doloribus odio ad ea
            quaerat nobis quis recusandae cumque sunt officia quia eius earum
            cupiditate, praesentium corporis possimus aliquid maiores sed
            similique, consectetur sapiente neque, quo facilis reprehenderit.
            Omnis nisi aliquam ex, quis deserunt neque perferendis. Cupiditate
            accusantium, eaque illum nulla impedit architecto officia ducimus
            ipsam. Dolor tempora facilis voluptas eum perferendis nulla nisi,
            ducimus placeat asperiores architecto neque perspiciatis assumenda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WatchRoute;
