import { Component, OnInit } from '@angular/core';
import { Matter } from '@core/models/matter.model';
import { Store } from '@ngrx/store';
import { selectCurrentMatter } from 'src/app/state/selectors/matters.selectos';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass'],
})
export class EditComponent implements OnInit {
  matter?: Matter | null;
  constructor(
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.store
      .select(selectCurrentMatter)
      .subscribe((matter) => (this.matter = matter));
  }
}
