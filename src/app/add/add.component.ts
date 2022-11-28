import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  userId=""
  id=""
  title=""
  completed=""
  eventAdd=()=>{
  let data:any={ 
    "userId": this.userId,
    "id":this.id,
    "title":this.title,
    "completed":this.completed
  }
  console.log(data)
}
}
