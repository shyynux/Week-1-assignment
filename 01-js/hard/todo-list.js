/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {

  // we will create an array here, index is array's index

  constructor(todo){
    this.todoList = [];
  }

  add(todo){
    this.todoList.push(todo);
  }

  remove(indexofTodo){
    this.todoList.splice(indexofTodo, 1);
    // console.log("Modified array", this.todoList, "Element removed at -", indexofTodo);
  }

  update(index, updatedTodo){
    // console.log("see the whole list", this.todoList);
    // console.log("the index to be updated", index);
    if(index < this.todoList.length)
      this.todoList[index] = updatedTodo;
    // console.log("the array after", this.todoList);
    
  }

  getAll(){
    return this.todoList;
  }

  get(indexofTodo){
   // console.log("its : get at index", this.todoList[indexofTodo]);
    if(indexofTodo < this.todoList.length)
      return this.todoList[indexofTodo];
    else
      return null;
  }

  clear(){
    this.todoList = [];
  }

}

module.exports = Todo;
