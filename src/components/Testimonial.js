import React from "react";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <section class="testimonial">
      <div class="container">
        <h1>Testimonial</h1>
        <div class="row">
          <div class="col-md-4 text-center">
            <div class="profile">
              <img
                src="https://i.ibb.co/SPHQk2y/img1.png"
                class="user"
                alt="shit"
              />
              <blockquote>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Assumenda fugiat numquam amet debitis, atque maxime labore,
                placeat fuga ipsam, delectus libero! Quidem culpa atque, ea
                ratione veniam vitae! Obcaecati, explicabo.
              </blockquote>
              <h3>Liza Soberano</h3>
              <p>
                Manager at <span>XYZ</span>
              </p>
            </div>
          </div>

          <div class="col-md-4 text-center">
            <div class="profile">
              <img src="https://i.ibb.co/4FhtBVc/img2.png" class="user" />
              <blockquote>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Assumenda fugiat numquam amet debitis, atque maxime labore,
                placeat fuga ipsam, delectus libero! Quidem culpa atque, ea
                ratione veniam vitae! Obcaecati, explicabo.
              </blockquote>
              <h3>Kim Seoul-hyun</h3>
              <p>
                Co-Founder at <span>ABC</span>
              </p>
            </div>
          </div>

          <div class="col-md-4 text-center">
            <div class="profile">
              <img src="https://i.ibb.co/s6PNvrN/img3.png" class="user" />
              <blockquote>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Assumenda fugiat numquam amet debitis, atque maxime labore,
                placeat fuga ipsam, delectus libero! Quidem culpa atque, ea
                ratione veniam vitae! Obcaecati, explicabo.
              </blockquote>
              <h3>Hande Ercel</h3>
              <p>
                CEO at <span>WYZ</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
