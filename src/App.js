import SearchPanel from "./components/search-panel/search-panel.js";
import ButtonSignInUp from "./components/sign-in/sign-in.js";
import DateToday from "./components/date/date.js";
import BlurBg from "./components/blur-bg/blur-bg.js";
import Background from "./components/bg/bg.js";
import "./App.css";
import SecondBlurBg from "./components/second-blur-bg/second-blur-bg.js";

const API_KEY = "ee030783f13a128def7893203d283bc6";

function App() {
  return (
    <div className="App">
      <Background />
      <BlurBg />
      <SecondBlurBg />
      <DateToday />
      <ButtonSignInUp />
      <SearchPanel />
    </div>
  );
}

export default App;
