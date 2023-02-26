import './styles.css';
import Search from './search';

function App() {
  const handleOnSearchChange = () => {
    console.log();
  };
  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
