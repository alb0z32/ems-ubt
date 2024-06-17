import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard'
function App() {
  return (
    <div className="flex flex-col box-border w-full m-0 min-h-screen bg-slate-200 main-container">
      <Navbar/>
      <div className="w-full flex box-border">
      <Sidebar/>
      <Dashboard/>
      </div>
    </div>
  );
}

export default App;
