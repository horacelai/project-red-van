import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilesPageComponent } from './miles-page.component';

describe('MilesPageComponent', () => {
  let component: MilesPageComponent;
  let fixture: ComponentFixture<MilesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
