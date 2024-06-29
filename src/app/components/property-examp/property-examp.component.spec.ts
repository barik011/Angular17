import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyExampComponent } from './property-examp.component';

describe('PropertyExampComponent', () => {
  let component: PropertyExampComponent;
  let fixture: ComponentFixture<PropertyExampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyExampComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertyExampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
