import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreorderComponent } from './storeorder.component';

describe('StoreorderComponent', () => {
  let component: StoreorderComponent;
  let fixture: ComponentFixture<StoreorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
