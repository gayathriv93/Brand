import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsnComponent } from './gsn.component';

describe('GsnComponent', () => {
  let component: GsnComponent;
  let fixture: ComponentFixture<GsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
