import { InkeepSearchBar } from './components/InkeepSearchBar';
import { InkeepChatButton } from './components/InkeepChatButton';

function App() {
  return (
    <div className="App">
      <div className="searchBar">
        <InkeepSearchBar />
      </div>
      <div className="chatButton">
        <InkeepChatButton />
      </div>
    </div>
  );
}

export default App;
