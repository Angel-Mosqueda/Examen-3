import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmosferaAPIComponent } from './atmosfera-api.component';

describe('AtmosferaAPIComponent', () => {
  let component: AtmosferaAPIComponent;
  let fixture: ComponentFixture<AtmosferaAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmosferaAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmosferaAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
