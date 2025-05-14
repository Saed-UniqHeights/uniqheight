// App.tsx
import Navbar from "../src/components/nav";
import Footer from "../src/components/footer";
import Routes from "../src/config/routes";

const App = () => {
  return (
    <>
      <main
        className="min-h-screen  ">
        <Navbar />
        
          <Routes  />

        <Footer />
      </main>
    </>
  );
};

export default App;
