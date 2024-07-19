import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeExampComponent } from './pipe-examp.component';

describe('PipeExampComponent', () => {
  let component: PipeExampComponent;
  let fixture: ComponentFixture<PipeExampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeExampComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeExampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
