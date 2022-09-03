import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarEditComponent } from './side-bar-edit.component';

describe('SideBarEditComponent', () => {
  let component: SideBarEditComponent;
  let fixture: ComponentFixture<SideBarEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
