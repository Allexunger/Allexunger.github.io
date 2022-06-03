import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarbaseComponent } from './starbase.component';

describe('StarbaseComponent', () => {
  let component: StarbaseComponent;
  let fixture: ComponentFixture<StarbaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarbaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
