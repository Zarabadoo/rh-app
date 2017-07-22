import { HttpModule } from '@angular/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../users.service';
import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let comp: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(() => {
    const routerStub = {};
    const usersServiceStub = {
      getUsers: () => ({
        subscribe: () => ({})
      })
    };
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      imports: [HttpModule],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: UsersService, useValue: usersServiceStub }
      ]
    });
    fixture = TestBed.createComponent(UserListComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  it('loadStatus defaults to: loading', () => {
    expect(comp.loadStatus).toEqual('loading');
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(comp, 'loadUsers');
      comp.ngOnInit();
      expect(comp.loadUsers).toHaveBeenCalled();
    });
  });

  // describe('loadUsers', () => {
  //   it('makes expected calls', () => {
  //     const usersServiceStub = fixture.debugElement.injector.get(UsersService);
  //     spyOn(usersServiceStub, 'getUsers');
  //     comp.loadUsers();
  //     expect(usersServiceStub.getUsers).toHaveBeenCalled();
  //   });
  // });

});
