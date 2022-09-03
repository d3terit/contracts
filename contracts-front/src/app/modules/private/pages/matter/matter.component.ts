import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadMatter } from 'src/app/state/actions/matters.actions';
import { selectProfileId } from 'src/app/state/selectors/profile.selectos';
@Component({
  selector: 'app-matter',
  templateUrl: './matter.component.html',
  styleUrls: ['./matter.component.sass'],
})
export class MatterComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.store
      .select(selectProfileId)
      .subscribe((userId) => this.loadData(userId));
  }

  loadData(userId: string) {
    const id = this.router.url.split('/')[2];
    if (id) this.store.dispatch(loadMatter({ id, userId }));
  }
}
