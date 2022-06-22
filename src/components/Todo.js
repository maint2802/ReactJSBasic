
function Todo({ listName, title, deleteTodo }) {
    const handleDeleteClick = (name) => {
        deleteTodo(name)
    }
    return (
        <>
            <div className="listName">
                <div>{title}</div>
                {listName.map(name =>
                (<li key={name.id}> {name.name} 	&#160;
                    <span style={{ cursor: 'pointer' }} onClick={() => handleDeleteClick(name)}>x</span></li>))}
                <hr />
            </div>

        </>
    )
}

export default Todo