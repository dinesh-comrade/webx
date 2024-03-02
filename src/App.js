import { Navigation } from "./Components/Navigation";
import { Hero } from "./Components/Hero";
import { About } from "./Components/About";
import { Buy } from "./Components/Buy";
import { Sell } from "./Components/Sell";
import { Pets } from "./Components/Pets";
import { Adopt } from "./Components/Adopt";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Buy />
      <Sell />
      <Adopt />

      <Pets />
    </>
  );
}

export default App;
