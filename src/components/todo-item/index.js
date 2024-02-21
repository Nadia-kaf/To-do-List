function TodoItem({index, todo}) {
    return (
        <li className="list-group-item " key={index}>
            <input
                className="form-check-input me-1"
                type="checkbox" value="" id={index} />
            <label
                className="form-check-label"
                for={index}
            >{todo}</label>
             {/*Take home assignment: Implement single delete */}
             <button className="btn btn-danger">remove</button>
    
        </li>
    );
}

export default TodoItem;
