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

  constructor(
    private fb: FormBuilder,
  ) { }


  ngOnInit(): void {
  }

}

export interface TaskList {
  complete: boolean,
  description: string,
}