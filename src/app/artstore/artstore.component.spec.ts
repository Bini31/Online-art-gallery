import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtstoreComponent } from './artstore.component';

describe('ArtstoreComponent', () => {
  let component: ArtstoreComponent;
  let fixture: ComponentFixture<ArtstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtstoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
