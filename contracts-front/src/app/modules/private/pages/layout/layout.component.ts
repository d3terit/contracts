import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadProfile } from 'src/app/state/actions/profile.actions';
import { selectProfileLoading } from 'src/app/state/selectors/profile.selectos';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
})
export class LayoutComponent implements OnInit {
  loading$: Observable<Boolean> = new Observable();

  constructor(
    private store: Store<any>,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loading$ = this.store.select(selectProfileLoading);
    const session = localStorage.getItem('pocketbase_auth');
    if (session) {
      try {
        const login = JSON.parse(session);
        if (login.model && login.token) {
          this.loadData(login.model.id, login.token);
        }
      } catch (error) {
        localStorage.removeItem('pocketbase_auth');
        this.router.navigateByUrl('/');
      }
    }
  }
  loadData(id: string, token: string) {
    this.store.dispatch(
      loadProfile({
        authData: { id, token },
      })
    );
  }

}
