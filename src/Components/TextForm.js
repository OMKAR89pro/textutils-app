import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [findWord, setFindWord] = useState("");
  const [replaceWord, setReplaceWord] = useState("");

  const handleUpperCase = () => { setText(text.toUpperCase()); props.showAlert("Converted to UpperCase!", "success"); };
  const handleLowerCase = () => { setText(text.toLowerCase()); props.showAlert("Converted to LowerCase!", "success"); };
  const handleClearText = () => { setText(""); props.showAlert("Text Cleared!", "success"); };
  const handleCapitalizeWords = () => { setText(text.replace(/\b\w/g, (char) => char.toUpperCase())); props.showAlert("Capitalized!", "success"); };
  const handleRemoveExtraSpaces = () => { setText(text.replace(/\s+/g, " ").trim()); props.showAlert("Spaces Removed!", "success"); };
  const handleCopyText = () => { navigator.clipboard.writeText(text); props.showAlert("Copied to Clipboard!", "success"); };
  const handleFindReplace = () => { let regex = new RegExp(findWord, "gi"); setText(text.replace(regex, replaceWord)); props.showAlert(`Replaced "${findWord}" with "${replaceWord}"`, "success"); };
  const handleSentenceCase = () => { if (text.length > 0) { setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()); props.showAlert("Sentence Case Applied!", "success"); } };
  const handleSpeak = () => { window.speechSynthesis.cancel(); let speech = new SpeechSynthesisUtterance(text); window.speechSynthesis.speak(speech); props.showAlert("Speaking...", "success"); };
  const handleStopSpeak = () => { window.speechSynthesis.cancel(); props.showAlert("Speech Stopped!", "success"); };
  const handleOnChange = (event) => setText(event.target.value);

  const changeColor = (c) => {
    if (c === "dark" || c === "cyan" || c === "blue" || c === "green") {
      return "rgba(255,255,255,0.75)";
    } else if (c === "light") {
      return "rgba(0,0,0,0.75)";
    }
  };

  const cardStyle = {
    boxShadow:
      props.mode === "dark"
        ? "0 0 15px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.6)"
        : "0 4px 15px rgba(0,0,0,0.5), 0 6px 20px rgba(0,0,0,0.4)",
    borderRadius: "10px",
    backgroundColor:
      props.mode === "dark"
        ? "#1e1e1e"
        : props.mode === "blue"
        ? "#1f0091ff"
        : props.mode === "green"
        ? "#00a832ff"
        : props.mode === "cyan"
        ? "#00b9a1ff"
        : "white",
    color:
      props.mode === "light"
        ? "black"
        : "white",
  };

  const previewStyle = {
    height: "250px",
    overflowY: "auto",
    backgroundColor:
      props.mode === "dark"
        ? "#2a2a2a"
        : props.mode === "blue"
        ? "#dcd6ff"
        : props.mode === "green"
        ? "#caffcb"
        : props.mode === "cyan"
        ? "#d2fffa"
        : "#f8f9fa",
    color: props.mode === "dark" ? "#f1f1f1" : "#000",
    borderRadius: "5px",
    padding: "10px",
  };

  const wordCount = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="container my-4">
      <div className="row g-4">
        
        <div className="col-md-6">
          <div className="card shadow-sm h-100" style={cardStyle}>
            <div className="card-body">
              <h4 className="card-title mb-3">Enter Text</h4>
              <textarea
                className="form-control mb-3"
                id="myBox"
                onChange={handleOnChange}
                value={text}
                rows="5"
                placeholder="Enter Text Here..."
                style={{
                  backgroundColor: props.mode === "dark" ? "#2a2a2a" : "#fff",
                  color: props.mode === "dark" ? "#f1f1f1" : "#000",
                  border: "1px solid",
                  borderColor: props.mode === "dark" ? "#444" : "#ccc",
                }}
              ></textarea>

              <div className="d-flex flex-wrap gap-2">
                <button disabled={!text} className="btn btn-primary" onClick={handleUpperCase}>Uppercase</button>
                <button disabled={!text} className="btn btn-primary" onClick={handleLowerCase}>Lowercase</button>
                <button disabled={!text} className="btn btn-danger" onClick={handleClearText}>Clear</button>
                <button disabled={!text} className="btn btn-primary" onClick={handleCapitalizeWords}>Capitalize</button>
                <button disabled={!text} className="btn btn-primary" onClick={handleRemoveExtraSpaces}>Remove Spaces</button>
                <button disabled={!text} className="btn btn-primary" onClick={handleCopyText}>Copy</button>
                <button disabled={!text} className="btn btn-primary" onClick={handleSentenceCase}>Sentence Case</button>
                <button disabled={!text} className="btn btn-primary" onClick={handleSpeak}>Speak</button>
                <button disabled={!text} className="btn btn-danger" onClick={handleStopSpeak}>Stop</button>
              </div>



              <div className="mt-4">
                <h5>Find & Replace</h5>
                <input type="text" className="form-control my-2" placeholder="Find..." value={findWord} onChange={(e) => setFindWord(e.target.value)} />
                <input type="text" className="form-control my-2" placeholder="Replace with..." value={replaceWord} onChange={(e) => setReplaceWord(e.target.value)} />
                <button disabled={!text || !findWord} className="btn btn-success w-100" onClick={handleFindReplace}>Find & Replace</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm h-100" style={cardStyle}>
            <div className="card-body">
              <h4 className="card-title mb-3">Your Text Summary</h4>
              <p>
                <span className="badge bg-primary me-2">{wordCount} Words</span>
                <span className="badge bg-secondary">{text.length} Characters</span>
              </p>
              <p style={{ color: changeColor(props.mode) }}>
                {(0.008 * wordCount).toFixed(2)} Minutes read
              </p>



              <h5 className="mt-4">Preview</h5>
              <div style={previewStyle}>
                {text.length > 0 ? text : "Nothing to preview!"}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
