import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvablyFlairComponent } from './provably-flair.component';

describe('ProvablyFlairComponent', () => {
  let component: ProvablyFlairComponent;
  let fixture: ComponentFixture<ProvablyFlairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvablyFlairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvablyFlairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
