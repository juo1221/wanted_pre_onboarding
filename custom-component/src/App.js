import React from "react";
import "./App.css";
import Toggle from "./component/Toggle";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import ClickToEdit from "./component/ClickToEdit";
import AutoComplete from "./component/AutoComplete";
import GlobalStyle from "./component/common/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <AutoComplete />
      <ClickToEdit />
    </div>
  );
}

export default App;
