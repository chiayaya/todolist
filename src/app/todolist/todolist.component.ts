import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  value = '';
  taskList = [
    {complete: true, description:'XXX'},
    {complete: false, description:'YYY'},
    {complete: true, description:'ZZZ'}
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
      complete: false, description:this.value
    };
    this.taskList.push(newtask)
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