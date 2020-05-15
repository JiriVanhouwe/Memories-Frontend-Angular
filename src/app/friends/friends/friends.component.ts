import { Component, OnInit } from '@angular/core';
import { MemoryService } from '../../memories/memory.service';
import { Friend } from '../friend';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, switchMap } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
   public userWithFriends: Observable<Friend>;
   public _emailInput: string;
   public message: string = ''; 
   public errorMessage: string = '';


  constructor(private _memoryService: MemoryService,private _route: ActivatedRoute, private _router: Router) {
    this.userWithFriends = this._memoryService.getFriends$();
   }

  ngOnInit(): void {
    //this._route.data.subscribe(item => this._userWithFriends = item['friend']); //via de resolver wordt eerst de memory geladen en dan getoond.
    //console.log(`${this._userWithFriends.firstName} en zijn vrienden.`);


  }

  deleteFriend(email:string): void{
    if(confirm(`Ben je zeker dat je  ${email} wil verwijderen?`)){
      this._memoryService.deleteFriend(email);
      
  }
}

  addFriend():void{
    if(this._emailInput != null){
      this._memoryService.addFriend(this._emailInput).pipe(
        catchError((err) => {
          this.errorMessage = err;
          return EMPTY;
        })
      ).subscribe(data => {this.message = data.toLocaleString()});
    }
  } 

  inviteFriend(): void{
    if(this._emailInput != null){
      this._memoryService.inviteNewUser(this._emailInput)
      .subscribe(data => {this.message = data.toLocaleString()});
    }   
}


  get friends$(){
    return this.userWithFriends;
  }

  set emailInput(value:string){
    this._emailInput = value;
  }

}
