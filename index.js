
const defaultText =  `
# this is h1 
## this is h2
### this is h3

here is some \` <div> inline </div> \` code

\`\`\`
this is multi-line code:

const doSomthing = () => {
    while(!doingSomthing) {
        thingsToDo.forEach((item, index) => {
            if(!item.done){
                item.doYourThing()
                item.done = true
                return item
            }
        })
    }
}
\`\`\`

this is **bold** 
this is _italic_
this is **_both!_**

here is ~~crossed out~~
this is a [link](https://www.example.example)

 
> this is a Block Quote! 

this is a table:

 Header | Header | Header
 ------- | --------- | ------- 
 content | content | content 
 content | content | content 


 here is a bullet list
 
- li 1
    - li 2
        - li 3
            - li 4

and a numbered list

1. li 1
1. li 2
1. li 3
1. li 4

this is an embedded image:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`








// - And of course there are lists.
//   - Some are bulleted.
//      - With different indentation levels.
//         - That look like this.


// 1. And there are numbered lists too.
// 1. Use just 1s if you want!
// 1. And last but not least, let's not forget embedded images:

// ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)




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
    const [text, setText] = React.useState(defaultText)
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


