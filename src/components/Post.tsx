
function Post(props: any) {

    const checkEdit = () => {
        // não sei se a lógica ta ok
        // primeiro preciso pegar o username do usuário logado no redux
        if (username === props.username) {
        return <div className="edit-icons">
            <i className="fas fa-trash"></i>
            <i className="fas fa-edit"></i>
        </div>
        }   
    }

    return <div className="Post">
            <header>
                <h2>{props.title}</h2>
                {checkEdit()}
            </header>
            <div className="subtitle">
                <p>@{props.username}</p>
                <p></p>
            </div>
        </div>
}

export default Post;