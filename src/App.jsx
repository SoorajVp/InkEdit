import DocEditor from "./components/CKEditor";

function App() {
  return (
    <>
      {/* <div class="container">
        <h2>Enter a Document URL</h2>
        <form>
          <label for="website-url">( PDF || DOCX || PPT )</label>
          <br />
          <input
            type="url"
            id="website-url"
            name="website-url"
            placeholder="https://example.com"
          />
          <button type="submit">Submit</button>
        </form>
      </div> */}

      <DocEditor /> 
    </>
  );
}

export default App;
