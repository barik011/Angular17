import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffPropertyInterpoComponent } from './diff-property-interpo.component';

describe('DiffPropertyInterpoComponent', () => {
  let component: DiffPropertyInterpoComponent;
  let fixture: ComponentFixture<DiffPropertyInterpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiffPropertyInterpoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiffPropertyInterpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
