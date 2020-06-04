import React, { Component } from 'react';
import DataTabs from './components/Tabs/Tab';
import './App.css';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };
class App extends Component {
  render() {
    return (
      <div>
        <DataTabs />
      </div>
    );
  }
}

export default App;
