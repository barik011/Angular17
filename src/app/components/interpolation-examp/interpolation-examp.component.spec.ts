import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationExampComponent } from './interpolation-examp.component';

describe('InterpolationExampComponent', () => {
  let component: InterpolationExampComponent;
  let fixture: ComponentFixture<InterpolationExampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpolationExampComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterpolationExampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
