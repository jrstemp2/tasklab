import { Component } from '@angular/core';
import { Task } from './interfaces/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'johnsapp';

  taskArray:Task[] = [
    {taskName: "Feed Nellie", taskDescription: "Use the open bag of food", daysToComplete: 0, completed: false},
    {taskName: "Fix Drywall", taskDescription: "Need to get the tools out as well.", daysToComplete: 30, completed: false},
    {taskName: "Grocery Shop", taskDescription: "List is on the table", daysToComplete: 3, completed: false},
    
  ]

  

  //This is all the code for the task section
  newTask:string = "";
  newTaskDesc:string = "";
  newDaysToComplete:number = 0;
  newCompleted = false;

  addTask = function(ev:Event){
    this.taskArray.push({taskName:this.newTask, taskDescription:this.newTaskDesc, daysToComplete:this.newDaysToComplete, completed:this.newCompleted});
  }
  

  //completed = false;
  completeTask = function(ev:Event){
    return true;
  }

  incompleteTask = function(ev:Event){
    return false;
  }

  incompleteForm = function(){
    return this.newTask == "" || this.newTaskDesc == "" || this.daysToComplete == "";
  }

}
