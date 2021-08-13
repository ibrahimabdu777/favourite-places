import MainBody from "./components/MainBody";
import { greet } from "./utils/greet";
import Footer from "./components/Footer";
import header from "./components/Header";
import Header from "./components/Header";
function App(): JSX.Element {
  return (
    <>
      <Header />
      <MainBody />
      <Footer />
    </>
  );
}

export default App;
