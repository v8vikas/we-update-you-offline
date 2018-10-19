import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularSourcesListComponent } from './popular-sources-list.component';

describe('PopularSourcesListComponent', () => {
  let component: PopularSourcesListComponent;
  let fixture: ComponentFixture<PopularSourcesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularSourcesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularSourcesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
