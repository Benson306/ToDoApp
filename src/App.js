import Ribbon from "./components/Ribbon";
import Tasks from "./components/Tasks";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App bg-[url('./assets/mount2.jpg')] bg-cover  min-h-screen">
      <ToastContainer />
      <Ribbon />
      <Tasks />
    </div>
  );
}

export default App;
