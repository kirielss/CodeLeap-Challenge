
function MainScreen() {

    return <div className="MainScreen">
            <header>
                <h1>CodeLeap Network</h1>
            </header>
            <section className="new-post">
                <h2>What's on your mind?</h2>
                <label>Title 
                    <input type="text" name="title" id="title" placeholder="Hello world" />
                </label>
                <label>Content
                    <textarea name="content" id="content" placeholder="Content here."></textarea>
                </label>
            </section>
        </div>
}

export default MainScreen;