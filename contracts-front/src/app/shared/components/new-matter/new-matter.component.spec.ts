import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMatterComponent } from './new-matter.component';

describe('NewMatterComponent', () => {
  let component: NewMatterComponent;
  let fixture: ComponentFixture<NewMatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMatterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
