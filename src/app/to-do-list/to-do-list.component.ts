import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { WorkService } from '../_services/work.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  todoForm = new FormGroup({
    // title: new FormControl['', Validators.required]
  });

  works: string[]

  isEdit: boolean = false;

  id: number = 0;

  content: string

  constructor(
    private workService: WorkService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required]]
    });
    this.works = this.workService.getAll();
  }
  
  add(): void {
    this.workService.add(this.todoForm.value.title);
    this.works = this.workService.getAll();
    this.content = '';
  }

  edit(index: number): void{
    this.isEdit = true;
    this.id = index;
    this.content = this.works[index]
  }

  update() {
    this.works[this.id] = this.content;
    this.workService.update(this.works);
    this.isEdit = false;
    this.content = '';
  }

  delete(index: number): void {
    var result = confirm('Bạn có muốn xóa!')
    if(result) {
      this.workService.delete(index);
      this.works = this.workService.getAll();
    }
  }

}
