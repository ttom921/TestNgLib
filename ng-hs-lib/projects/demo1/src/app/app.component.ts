import { Component, OnInit } from '@angular/core';
import { DataService } from 'projects/hs-lib/src/lib/data.service';
import { take, map } from 'rxjs/operators';
//{userId: 1, id: 1, title: "delectus aut autem", completed: false}
export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  title = 'demo1';
  constructor(private dataService: DataService) {

  }
  ngOnInit(): void {
    // //設定服務器的位罝
    // this.dataService.setDataUrl(`https://jsonplaceholder.typicode.com/todos/`);
    // let source$ = this.dataService.getData().pipe(take(1)).subscribe(value => {
    //   console.log(value);
    // });
    // source$.subscribe((value) => {
    //   //console.log(value);
    //   value.forEach(element => {
    //     let item: Todo = {
    //       userId: element.userId,
    //       id: element.id,
    //       title: element.title,
    //       completed: element.completed
    //     }
    //     this.todos.push(item);
    //   });
    // });

    //設定服務器的位罝
    this.dataService.setDataUrl(`https://jsonplaceholder.typicode.com/todos/1`);
    this.dataService.getData().subscribe((value) => {
      //console.log(value);
      let item: Todo = {
        userId: value.userId,
        id: value.id,
        title: value.title,
        completed: value.completed
      }
      //console.log(item);
      this.todos.push(item);
      console.log(this.todos);
    });
  }
}
