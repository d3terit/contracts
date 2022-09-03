import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OauthlinkComponent } from './oauthlink.component';

describe('OauthlinkComponent', () => {
  let component: OauthlinkComponent;
  let fixture: ComponentFixture<OauthlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OauthlinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OauthlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
