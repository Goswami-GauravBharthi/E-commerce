import "./services.css";
export const Services = () => {
  return (
    <section className="services-section">
      <div className="container service card-container ">

        <div className="card">
          <img src="./images/s1.png" alt="" />
          <h3>Super fast delivery</h3>
        </div>

        <div className="card">
          <img src="./images/s2.png" alt="" />
          <h3>money-back guaranteed</h3>
        </div>

        <div className="card">
        <img src="./images/s3.png" alt="" />
          <h3> secure payment system</h3>
        </div>
      </div>
    </section>
  );
};
