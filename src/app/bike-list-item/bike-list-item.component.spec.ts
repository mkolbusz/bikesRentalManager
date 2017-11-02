import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeListItemComponent } from './bike-list-item.component';

describe('BikeListItemComponent', () => {
  let component: BikeListItemComponent;
  let fixture: ComponentFixture<BikeListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
