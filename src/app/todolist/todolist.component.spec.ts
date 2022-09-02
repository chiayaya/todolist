import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TaskRow, TodolistComponent } from './todolist.component';

describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // #region addTask related tests
  it('should add task into the taskList when addTask() is called', () => {
    const dummyDescription = 'Test case';
    component.newTask = dummyDescription;
    fixture.detectChanges();
    component.addTask();
    const fnc = component.taskList.find(task => task.description === dummyDescription);
    expect(fnc !== undefined).toBeTruthy();
  });
  it('should clear variable "newTask" when addTask() is called', () => {
    const dummyDescription = 'Test case';
    const dummyTaskLists = [
      {complete: true, description:'Experience with CSS Framework'},
      {complete: true, description:'Experience in one of the modern frontend frameworks'},
      {complete: false, description:'Strong UX and design sensibilities'}
    ];
    component.newTask = dummyDescription;
    component.taskList = dummyTaskLists;
    fixture.detectChanges();
    component.addTask();
    expect(component.newTask === '').toBeTruthy();
  });
  // #endregion

  // #region editTask related tests
  it('should set editingIndex and when editTask() is called', () => {
    const dummyIndex = 0;
    component.editTask(dummyIndex);
    expect(component.editingIndex).toEqual(0);
  });
  it('should set description of the selected task to editingDescription when editTask() is called', () => {
    const dummyIndex = 0;
    component.editTask(dummyIndex);
    expect(component.editingDescription).toEqual(component.taskList[dummyIndex].description);
  });
  // #endregion

  // #region deleteTask related tests
  it('should remove the selected task from taskList when deleteTask() is called', () => {
    const dummyIndex = 0;
    const originalList = component.taskList.slice();
    component.deleteTask(dummyIndex);
    const fnc = component.taskList.find(task => task.description === originalList[dummyIndex].description);
    expect(fnc === undefined).toBeTruthy();
  });
  // #endregion

  // #region saveTask related tests
  it('should save the description of selected task from taskList when saveTask() is called', () => {
    const dummyIndex = 0;
    const dummyEditingDescription = 'Test case editing'
    component.editingDescription = dummyEditingDescription;
    component.saveTask(dummyIndex);
    expect(component.taskList[dummyIndex].description).toEqual(dummyEditingDescription);
  });
  it('should reset editingIndex when saveTask() is called', () => {
    const dummyIndex = 0;
    component.saveTask(dummyIndex);
    expect(component.editingIndex ).toEqual(null);
  });
  // #endregion

});
