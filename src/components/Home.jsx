import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="w-screen h-96 bg-black flex justify-center p-4">
        <Navbar />
        <div className="absolute m-44">
          <span className="text-lime-100 font-semibold font-mono text-2xl p-2">
            "If men liked shopping, they'd call it research."
          </span>
        </div>
      </div>
      <Body />
      <Footer />
    </>
  );
};

export default Home;
