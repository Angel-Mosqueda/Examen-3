import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaAPIComponent } from './nasa-api.component';

describe('NasaAPIComponent', () => {
  let component: NasaAPIComponent;
  let fixture: ComponentFixture<NasaAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
