import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  newTask = '';
  taskList = [
    {complete: true, description:'Experience with CSS Framework'},
    {complete: true, description:'Experience in one of the modern frontend frameworks'},
    {complete: false, description:'Strong UX and design sensibilities'}
  ]
  editingIndex: number | null = null;
  editingDescription: string = '';
  constructor(
    private fb: FormBuilder,
  ) { }


  ngOnInit(): void {
  }

  addTask() {
    const newtask = {
      complete: false, 
      description: this.newTask,
    };
    this.taskList.push(newtask);
    this.newTask = '';
  }

  editTask(i: number) {
    this.editingIndex = i;
    this.editingDescription = this.taskList[i]['description'];
  }

  deleteTask(i: number) {
    this.taskList.splice(i, 1);
  }

  saveTask(i: number) {
    this.taskList[i]['description'] = this.editingDescription;
    this.editingIndex = null;
    console.log(this.editingIndex);
  }

}

export interface TaskList {
  complete: boolean,
  description: string,
}