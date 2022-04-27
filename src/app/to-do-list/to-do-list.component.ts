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

  constructor(
    private workService: WorkService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required]]
    });
    this.works = this.workService.findAll();
  }
  
  add(): void {
    this.workService.add(this.todoForm.value.title);
    this.works = this.workService.findAll();
  }

  edit(index: number): void{
    this.workService.edit(index)
  }

  deletee(index: number): void {
    var result = confirm('Bạn có muốn xóa!')
    if(result) {
      this.workService.delete(index);
      this.works = this.workService.findAll();
    }
  }

}
