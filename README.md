## React Todo Task
    
**Task Requirements:**
  
  * Create a Todo App which have All CRUD Functionalities

      - Create Todo Task with task name , Description & status.

      - By default status needs to added as not completed for created todo.

      - There should be two buttons in the name of edit and Delete which used to perform update and delete created todos.

      - By onclick on status it should show a dropdown for completed and not completed by that we can change the status of todo.
      
      - All todos should be displayed in Card.
      
      - There should be filter to display status completed, not completed and both statuses.

**Code Description**
   
   * In the index.html file, I added a Bootstrap  Icons stylesheet and bundle hosted on a CDN.
 
   * To access the file, you can reach [index.html](./index.html) or you can use this path`(./index.html)`.
  
   * In [App.jsx](./src/App.jsx) file:
        
     - Imports: `TodoTask` component from `./components/TodoApp`. CSS styles from `./App.css`.

     - App Component: The `App` function component returns a `div` containing: An `h2` element with a class name `align` and text "My Todo". The `TodoTask` component.

     - Styling: The `h2` element uses a CSS class `align` to style the title.
   
   * In [App.css](./src/App.jsx) file: 
  
     - Styling: Ensure your `App.css` file includes the styles for the `align` class to properly style your title.
   
   * In [TodoApp.jsx](./src/components/TodoApp.jsx) file:
      
     - State Management: Uses `useState` to manage the current task (`task`), the list of todos (`todos`), editing status (`isEditing`), and the ID of the todo being edited (`currentTodoId`).

     - Handling Input Changes: `handleChange` function updates the `task` state when the user types in the input fields.

     - Form Submission: `handleSubmit` function handles adding a new todo or updating an existing one based on the `isEditing` state. It resets the form fields after submission.
    
     - Updating Todo Status: `updateStatus` function updates the status of a todo (e.g., to 'Completed' or 'Not Completed') based on its ID.
     
     - Editing and Deleting Todos: `editTodo` function populates the form with the selected todo's details for editing. `deleteTodo` function removes a todo from the list based on its ID.
     - Filtering and Displaying Todos: Todos are filtered based on the selected status filter (`task.StatusFilter`), and the filtered list is passed to the `MyTodos` component for display.

   * In [TodoApp.css](./src/components/TodoApp.css) file:
  
     - Form Layout and Input Styling: The form is styled to be flexible with `flex-direction: row` and centrally aligned with padding and margin adjustments. Inputs (`input-field`) and the submit button (`submit-button`) have consistent styles with borders, padding, and colors to maintain a uniform appearance. Media queries adjust the form layout and input widths for different screen sizes, ensuring a responsive design.
    
     - Status Filter and Miscellaneous Styles: The status filter container is positioned with appropriate margins and widths, and specific classes (`status-completed`, `status-not-completed`) change the color scheme of completed and not completed tasks. Additional styles for `textarea` elements and general container alignment enhance the overall UI consistency and accessibility.
   
   * In [MyTodos.jsx](./src/components/MyTodos.jsx) file:
     
     - Props and Functionality: Receives `todos`, `updateStatus`, `editTodo`, and `deleteTodo` as props. `handleStatusChange` function updates the status of a todo when the user changes the status in the dropdown.
     
     - Conditional Rendering:Displays a message "No todos available" if there are no todos.Otherwise, renders a list of todos with their details.
     - Todo Item Structure:Each todo item is displayed in a `li` element with a unique key.Includes todo name, description, status dropdown, and action buttons for editing and deleting.
     
     - Styling and Classes:Applies CSS classes for styling the todo container, list, individual cards, status dropdown, and action buttons.Conditional classes are applied to the status dropdown based on whether the todo is completed or not.

   * In [MyTodos.css](./src/components/MyTodos.css) file:
     - Layout and Card Styling: The `.todos-container` and `.todo-list` are designed for a flexible and responsive layout, using flexbox properties to center the todo cards and allow wrapping. Each todo card (`.todo-card`) has a consistent background color, border, padding, and rounded corners to ensure a uniform look, with dimensions set to fit within the container.
    
     - Status and Action Styling: Status dropdowns (`.status-select`) are styled for easy readability, with distinct background colors for completed (`.status-completed`) and not completed (`.status-not-completed`) states. Action buttons within `.todo-actions` are styled with specific colors, padding, and hover effects to enhance usability, ensuring that edit and delete buttons are easily distinguishable and responsive to user interactions.