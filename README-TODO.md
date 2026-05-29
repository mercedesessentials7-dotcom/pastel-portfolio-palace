# To-Do List Application

A beautiful, fully-functional to-do list application with local storage functionality.

## Features

✨ **Core Features:**
- ➕ Add new tasks easily
- ✅ Mark tasks as completed
- 🗑️ Delete individual tasks
- 🔄 Clear all completed tasks at once
- 💾 **Persistent Storage** - Tasks saved in browser's local storage
- 📊 **Task Statistics** - View total tasks and completion count
- 🎯 **Filter Options** - View All, Active, or Completed tasks
- 📱 **Responsive Design** - Works on desktop and mobile
- 🎨 **Beautiful UI** - Pastel color scheme with smooth animations

## How to Use

1. **Open the Application**
   - Navigate to `todo.html` in your browser

2. **Add a Task**
   - Type your task in the input field
   - Click "+ Add Task" or press Enter

3. **Manage Tasks**
   - Click the checkbox to mark a task as complete
   - Click "Delete" to remove a task
   - Use filter buttons to view different task states

4. **Clear Completed**
   - Click "Clear Completed" to remove all finished tasks
   - Confirm the action when prompted

## Technical Details

### Files
- **todo.html** - Main HTML structure
- **todo-style.css** - Styling with pastel colors and animations
- **todo.js** - Application logic using vanilla JavaScript

### Local Storage
Tasks are automatically saved to your browser's local storage whenever you:
- Add a new task
- Complete/uncomplete a task
- Delete a task
- Clear completed tasks

**Note:** Data persists even after closing the browser tab!

### JavaScript Class Structure
```javascript
TodoApp
├── addTodo() - Add new task
├── toggleTodo(id) - Toggle completion status
├── deleteTodo(id) - Delete a task
├── clearCompleted() - Remove all completed tasks
├── getFilteredTodos() - Filter tasks by status
├── render() - Update UI
├── saveToStorage() - Save to localStorage
└── loadFromStorage() - Load from localStorage
```

## Browser Compatibility
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## Customization

### Change Colors
Edit the CSS variables in `todo-style.css`:
```css
:root {
    --pastel-pink: #FFB3D9;
    --pastel-purple: #D4A5D9;
    --pastel-blue: #A5D9FF;
    --pastel-green: #A5FFB3;
    --pastel-yellow: #FFFFA5;
}
```

### Add More Features
- Due dates
- Task categories
- Priority levels
- Drag and drop reordering
- Task notes/descriptions

## Tips
- Your tasks are saved automatically
- Clear your browser cache to reset tasks
- Use the filter buttons for better organization
- Press Enter to add tasks quickly

---

**Enjoy organizing your tasks with style!** 🎨✨