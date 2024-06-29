import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassExampComponent } from './ngclass-examp.component';

describe('NgClassExampComponent', () => {
  let component: NgClassExampComponent;
  let fixture: ComponentFixture<NgClassExampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClassExampComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgClassExampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
