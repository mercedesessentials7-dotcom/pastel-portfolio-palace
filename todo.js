// To-Do List Application with Local Storage

class TodoApp {
    constructor() {
        this.todos = [];
        this.currentFilter = 'all';
        this.initializeElements();
        this.loadFromStorage();
        this.attachEventListeners();
        this.render();
    }

    initializeElements() {
        this.todoInput = document.getElementById('todoInput');
        this.addBtn = document.getElementById('addBtn');
        this.todoList = document.getElementById('todoList');
        this.clearBtn = document.getElementById('clearBtn');
        this.statsText = document.getElementById('stats');
        this.filterBtns = document.querySelectorAll('.filter-btn');
    }

    attachEventListeners() {
        // Add task on button click
        this.addBtn.addEventListener('click', () => this.addTodo());

        // Add task on Enter key
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });

        // Filter buttons
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.filter;
                this.render();
            });
        });

        // Clear completed button
        this.clearBtn.addEventListener('click', () => this.clearCompleted());
    }

    addTodo() {
        const text = this.todoInput.value.trim();

        if (text === '') {
            alert('Please enter a task!');
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toLocaleString()
        };

        this.todos.push(newTodo);
        this.todoInput.value = '';
        this.todoInput.focus();
        this.saveToStorage();
        this.render();
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveToStorage();
            this.render();
        }
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.saveToStorage();
        this.render();
    }

    clearCompleted() {
        const completedCount = this.todos.filter(t => t.completed).length;
        if (completedCount === 0) {
            alert('No completed tasks to clear!');
            return;
        }

        if (confirm(`Delete ${completedCount} completed task(s)?`)) {
            this.todos = this.todos.filter(t => !t.completed);
            this.saveToStorage();
            this.render();
        }
    }

    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'active':
                return this.todos.filter(t => !t.completed);
            case 'completed':
                return this.todos.filter(t => t.completed);
            default:
                return this.todos;
        }
    }

    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        this.statsText.textContent = `${total} tasks • ${completed} completed`;

        // Enable/disable clear button
        this.clearBtn.disabled = completed === 0;
    }

    render() {
        const filteredTodos = this.getFilteredTodos();

        // Clear the list
        this.todoList.innerHTML = '';

        if (filteredTodos.length === 0) {
            this.todoList.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-emoji">📝</div>
                    <p>${this.currentFilter === 'all' ? 'No tasks yet. Add one to get started!' : 'No ' + this.currentFilter + ' tasks.'}</p>
                </div>
            `;
        } else {
            filteredTodos.forEach(todo => {
                const todoItem = document.createElement('li');
                todoItem.className = `todo-item ${todo.completed ? 'completed' : ''}`;
                todoItem.innerHTML = `
                    <input 
                        type="checkbox" 
                        class="checkbox" 
                        ${todo.completed ? 'checked' : ''}
                        onchange="app.toggleTodo(${todo.id})"
                    >
                    <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                    <button class="delete-btn" onclick="app.deleteTodo(${todo.id})">Delete</button>
                `;
                this.todoList.appendChild(todoItem);
            });
        }

        this.updateStats();
    }

    saveToStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    loadFromStorage() {
        const stored = localStorage.getItem('todos');
        if (stored) {
            this.todos = JSON.parse(stored);
        }
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }
}

// Initialize the app when DOM is loaded
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new TodoApp();
});