import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Matter } from '@core/models/matter.model';

@Component({
  selector: 'app-matter-card',
  templateUrl: './matterCard.component.html',
  styleUrls: ['./matterCard.component.sass']
})
export class MatterCardComponent implements OnInit {
  @Input()
  matter!: Matter;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigateByUrl("edit/"+this.matter.id)
  }

  copyLink(){
    navigator.clipboard.writeText(`http://localhost:4200/matter/${this.matter.id}`)
  }

}
