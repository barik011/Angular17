import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleExampComponent } from './ng-style-examp.component';

describe('NgStyleExampComponent', () => {
  let component: NgStyleExampComponent;
  let fixture: ComponentFixture<NgStyleExampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgStyleExampComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgStyleExampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
