import React from "react";
import QSSU2 from "./components/addingInteractivity/queueingSeriesStateUpdates/QSSU2";
import UOS1 from "./components/addingInteractivity/updateObjectsState/UOS1";
import UOS2 from "./components/addingInteractivity/updateObjectsState/UOS2";
import UOS3 from "./components/addingInteractivity/updateObjectsState/UOS3";
import UAS1 from "./components/addingInteractivity/updatingArraysState/UAS1";
import UAS2 from "./components/addingInteractivity/updatingArraysState/UAS2";
import UAS3 from "./components/addingInteractivity/updatingArraysState/UAS3";

const App: React.FC = () => {
  return (
    <div className="App">
      <UAS3 />
    </div>
  );
};

export default App;