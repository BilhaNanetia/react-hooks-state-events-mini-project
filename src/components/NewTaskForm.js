import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("All");

  const newItem = {
    text: text,
    category: category

  }
   //function to handle form submission
  function handleSubmit(event) {
    event.preventDefault()
    if(text.trim() === "") {

      //prevent form submission if text is empty
      return "Add new Item"
    } else {
      //create new task object with text and category
      onTaskFormSubmit(newItem);
    setText("");
    setCategory("");

    }

    
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      {/*input field for task details */}
      <label>
        Details
        <input
         type="text"
          name="text"
          value={text} 
          onChange={(event) => setText(event.target.value)}
          />
      </label>
      {/* dropdown for task category */}
      <label>
        Category
        <select 
        name="category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        >
          {/*render options for each category */}
          {categories.map(category => <option key={category} name={category}>{category}</option>)}

        </select>
      </label>
      {/*submit button*/}
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
