



marked.setOptions({
    breaks: true
})

const renderer = new marked.Renderer();

const Editor = (props) => {
    return (
        <div>
            <label id="editor-label" htmlFor="editor">editor</label>
            <textarea 
                name="editor" 
                id="editor" 
                cols="30" 
                rows="10"
                value={props.text}
                onChange={(e) => props.handleChange(e.target.value)}
            ></textarea>
        </div>
    )
}

const App = () => {
    const [text, setText] = React.useState('')
    return (
        <div className="App">
            <div className="App-container">
                
                    <Editor text={text} handleChange={text => setText(text)}/>
                    <h1>outPut</h1>
                    <Preview markdown={text} />
                                 
            </div>
        </div>
      )
  }

  function Preview({ markdown }) {
    return (
        <div id='preview-containeer'>
            <label id="preview-label" htmlFor="preview">preview</label>
            <div 
            dangerouslySetInnerHTML={{
                __html: marked(markdown, {renderer: renderer})
            }}
            id="preview"
            ></div>
        </div>
    );
}

   

ReactDOM.render(
<App />, 
document.getElementById('root'))


