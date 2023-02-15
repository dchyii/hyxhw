import Navbar from "./components/Navbar";
import Post from "./components/Post";

function App() {
  return (
    <div className="App bg-slate-100 w-screen h-screen">
      <Navbar />
      <Post />
      <Post />
    </div>
  );
}

export default App;
