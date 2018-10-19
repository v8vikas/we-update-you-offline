import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordsAndSourcesComponent } from './keywords-and-sources.component';

describe('KeywordsAndSourcesComponent', () => {
  let component: KeywordsAndSourcesComponent;
  let fixture: ComponentFixture<KeywordsAndSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordsAndSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordsAndSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
