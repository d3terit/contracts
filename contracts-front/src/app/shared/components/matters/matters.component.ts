import { Component, OnInit } from '@angular/core';
import { MattersState } from '@core/models/matters.state';
import { Store } from '@ngrx/store';
import { loadMatters } from 'src/app/state/actions/matters.actions';
import { selectMatters } from 'src/app/state/selectors/matters.selectos';
import { selectProfileId } from 'src/app/state/selectors/profile.selectos';

@Component({
  selector: 'app-matters',
  templateUrl: './matters.component.html',
  styleUrls: ['./matters.component.sass'],
})
export class MattersComponent implements OnInit {
  matters!: MattersState;
  userId: string = '';
  page = 1;
  perPage = 10;
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store
      .select(selectMatters)
      .subscribe(
        (matters) =>
          (this.matters = {
            ...matters,
            items: matters.items.slice(0, this.perPage),
          })
      );
    this.store.select(selectProfileId).subscribe((userId) => {
      (this.userId = userId), this.loadData();
    });
  }
  loadData() {
    if (this.userId != '')
      this.store.dispatch(
        loadMatters({
          userData: {
            userId: this.userId,
            page: this.page,
            perPage: this.perPage,
          },
        })
      );
  }

  paginate(event: any) {
    this.page = event.page + 1;
    this.perPage = event.rows;
    this.loadData();
  }
}
