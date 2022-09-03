import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatterCardComponent } from './matterCard.component';

describe('MatterCardComponent', () => {
  let component: MatterCardComponent;
  let fixture: ComponentFixture<MatterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatterCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
