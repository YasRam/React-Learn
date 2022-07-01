import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmission = (e) => {
    e.preventDefault();
    addTodo({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h3 name="text-muted mb-4">Add a TODO</h3>

      <form onSubmit={handleSubmission}>
        <input
          className="form-control"
          type="text"
          placeholder="Enter your title here…"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          className="form-control form-control-lg"
          type="text"
          placeholder="Enter your Content !!"
          name="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button name="my-4 btn btn-primary btn-sm px-4" type="submit">
          Add Todo
        </button>
      </form>
      <br /> <br />
    </div>
  );
};

export default TodoForm;