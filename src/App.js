import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '60vw', marginBottom: '2em' }}>
        <BarChart />
      </div>
      <div style={{ width: '60vw', marginBottom: '2em' }}>
        <LineChart />
      </div>
      <div style={{ width: '700px', marginBottom: '2em' }}>
        <PieChart />
      </div>
    </div>
  );
}

export default App;
