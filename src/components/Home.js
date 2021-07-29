import Hero from "./Hero";

function Home() {
  return (
    <>
      <Hero text="Welcome" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
