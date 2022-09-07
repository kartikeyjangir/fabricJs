import React, { useState } from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import "./Home.css";

const Home = () => {
  const { selectedObjects, editor, onReady } = useFabricJSEditor({
    defaultStrokeColor: "red",
  });
  const [text, setText] = useState("");
  const [strokeColor, setStrokeColor] = useState("");
  const [fillColor, setFillColor] = useState("");

  const onAddCircle = () => {
    editor?.addCircle();
  };
  const onAddRectangle = () => {
    editor?.addRectangle();
  };
  const onAddLine = () => {
    editor?.addLine();
  };
  const onAddText = () => {
    if (selectedObjects?.length) {
      return editor?.updateText(text);
    }
    editor?.addText(text);
  };
  const onSetStrokeColor = () => {
    editor?.setStrokeColor(strokeColor);
  };
  const onSetFillColor = () => {
    editor?.setFillColor(fillColor);
  };
  const onDeleteAll = () => {
    editor?.deleteAll();
  };
  const onDeleteSelected = () => {
    editor?.deleteSelected();
  };
  const onZoomIn = () => {
    editor?.zoomIn();
  };
  const onZoomOut = () => {
    editor?.zoomOut();
  };
  return (
    <div className="Container">
      <div>
        <FabricJSCanvas className="sample-canvas" onReady={onReady} />

        <div className="buttonSet">
          <button onClick={onZoomIn} className="buttonCommon">
            +
          </button>
          <button onClick={onZoomOut} className="buttonCommon">
            -
          </button>
          <button onClick={onAddCircle} className="buttonCommon">
            Add circle
          </button>
          <button onClick={onAddRectangle} className="buttonCommon">
            Add Rectangle
          </button>
          <button onClick={onAddLine} className="buttonCommon">
            Add Line
          </button>
          <button onClick={onDeleteAll} className="buttonCommon deleteAll">
            Delete All
          </button>
          <button
            onClick={onDeleteSelected}
            className="buttonCommon deleteSelected"
          >
            Delete Selected
          </button>
        </div>

        <div className="buttonSet">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="inputField"
          />
          <button onClick={onAddText} className="buttonCommon">
            Add Text
          </button>
        </div>

        <div className="buttonSet">
          <input
            className="inputField"
            type="text"
            value={strokeColor || editor?.strokeColor}
            onChange={(e) => setStrokeColor(e.target.value)}
          />
          <button onClick={onSetStrokeColor} className="buttonCommon">
            Set Stroke Color
          </button>
        </div>

        <div className="buttonSet">
          <input
            className="inputField"
            type="text"
            value={fillColor || editor?.fillColor}
            onChange={(e) => setFillColor(e.target.value)}
          />
          <button onClick={onSetFillColor} className="buttonCommon">
            Set Fill Color
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
