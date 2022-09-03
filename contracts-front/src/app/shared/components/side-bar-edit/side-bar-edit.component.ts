import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCurrentMatterId } from 'src/app/state/selectors/matters.selectos';

@Component({
  selector: 'app-side-bar-edit',
  templateUrl: './side-bar-edit.component.html',
  styleUrls: ['./side-bar-edit.component.sass']
})
export class SideBarEditComponent implements OnInit {
  id$?: Observable<any>;
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.id$ = this.store.select(selectCurrentMatterId)
  }

  signOut(){
    localStorage.removeItem("pocketbase_auth")
    window.location.reload()
  }

}
