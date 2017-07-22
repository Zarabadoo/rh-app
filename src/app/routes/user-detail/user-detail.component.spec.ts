import { HttpModule } from '@angular/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../users.service';
import { UserDetailComponent } from './user-detail.component';

describe('UserDetailComponent', () => {
  let comp: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(() => {
    const activatedRouteStub = {
      paramMap: {
        switchMap: () => ({
          subscribe: () => ({})
        })
      }
    };
    const usersServiceStub = {
      getUser: () => ({})
    };
    TestBed.configureTestingModule({
      declarations: [ UserDetailComponent ],
      imports: [HttpModule],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: UsersService, useValue: usersServiceStub }
      ]
    });
    fixture = TestBed.createComponent(UserDetailComponent);
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
  //     spyOn(usersServiceStub, 'getUser');
  //     comp.loadUsers();
  //     expect(usersServiceStub.getUser).toHaveBeenCalled();
  //   });
  // });

});
