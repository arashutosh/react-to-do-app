const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://arashutosh01:P2ygBNywWC7blLEn@reacttodoapp.oy0s1.mongodb.net/?retryWrites=true&w=majority&appName=reactTodoApp");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    isCompleted: Boolean
})

const todos = mongoose.model('todos', todoSchema);

module.exports = {
    todos
}