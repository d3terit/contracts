import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { createMatter } from 'src/app/state/actions/matters.actions';
import { selectNewMatter } from 'src/app/state/selectors/matters.selectos';
import { selectProfileId } from 'src/app/state/selectors/profile.selectos';

@Component({
  selector: 'app-new-matter',
  templateUrl: './new-matter.component.html',
  styleUrls: ['./new-matter.component.sass'],
})
export class NewMatterComponent implements OnInit {
  show: boolean;
  hidden: boolean;
  userId: string = '';
  matterForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
    ]),
    session: new FormArray([], [Validators.required]),
  });
  initFormDay(): FormControl {
    return  new FormControl(1, [Validators.required, Validators.min(1), Validators.max(12)]);
  }
  addDay() {
    const refSession = this.matterForm.get('session') as FormArray;
    if(refSession.length <7) refSession.push(this.initFormDay());
  }
  popDay(){
    const refSession = this.matterForm.get('session') as FormArray;
    refSession.removeAt(-1)
  }
  getCtrl(key: string, form: FormGroup): any {
    return form.get(key);
  }
  constructor(private store: Store<any>, private router: Router) {
    this.show = false;
    this.hidden = false;
  }
  ngOnInit(): void {
    this.store
      .select(selectProfileId)
      .subscribe((userId) => (this.userId = userId));
  }
  addMatter() {
    let name = this.matterForm.get('name')?.value;
    let intensity = JSON.stringify(this.matterForm.get('session')?.value);
    if (name && this.userId != '') {
      this.store.dispatch(
        createMatter({
          matter: {
            id: '',
            name,
            intensity,
            hidden: this.hidden,
            creator: this.userId,
          },
        })
      );
      this.store.select(selectNewMatter).subscribe((matter) => {
        if (matter) {
          this.show = false;
          this.router.navigateByUrl('edit/' + matter.id);
        }
      });
    }
  }
}
