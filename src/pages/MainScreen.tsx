import { useState, useEffect } from "react";

function MainScreen() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    useEffect(() => {
        if (title.length >= 3 && content.length >= 3) {
          toggleButton(true)
        } else {
          toggleButton(false)
        }
      })
  
      function toggleButton(on: boolean) {
        if (on) {
          document.querySelector(".button-container button")?.classList.add("button-active")
        } else {
          document.querySelector(".button-container button")?.classList.remove("button-active")
        }
      }

      function submitPost() {
        if (title.length >= 3 && content.length >= 3) {
          console.log("Post submitted: " + title + " - " + content)
          // fazer POST para o backend
        }
      }

    return <div className="MainScreen">
            <header>
                <h1>CodeLeap Network</h1>
            </header>
            <section className="new-post">
                <h2>What's on your mind?</h2>
                <label>Title 
                    <input type="text" name="title" id="title" placeholder="Hello world" onChange={(e) => setTitle(e.target.value)}/>
                </label>
                <label>Content
                    <textarea name="content" id="content" placeholder="Content here." onChange={(e) => setContent(e.target.value)}></textarea>
                </label>
                <div className="button-container"><button onClick={submitPost}>Create</button></div>
            </section>
        </div>
}

export default MainScreen;