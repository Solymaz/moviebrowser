import Hero from "./Hero";

function Home() {
  return (
    <>
      <Hero text="from home" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">lala</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
