import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdapListComponent } from './LdapListComponent';

describe('LdapListComponent', () => {
  let component: LdapListComponent;
  let fixture: ComponentFixture<LdapListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LdapListComponent]
    });
    fixture = TestBed.createComponent(LdapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
