import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarMattersComponent } from './toolbar-matters.component';

describe('ToolbarMattersComponent', () => {
  let component: ToolbarMattersComponent;
  let fixture: ComponentFixture<ToolbarMattersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarMattersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarMattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
