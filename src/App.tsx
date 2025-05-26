// App.tsx
import Navbar from "../src/components/nav";
import Footer from "../src/components/footer";
import Routes from "../src/config/routes";

const App = () => {
  return (
    <>
      <main className="min-h-screen  ">
        <Navbar />
        <div className="raltive">
        <div className="absolute inset-0">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
          </div>
          <Routes />
        </div>

        <Footer />
      </main>
    </>
  );
};

export default App;
