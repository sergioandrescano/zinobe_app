import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { LoginService } from '../../login/services/login.service';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  user$: Observable<User>;

  constructor(private loginService: LoginService, private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.user$ = this.loginService.getUser();
  }

  closeSession(){
    this.layoutService.closeSession();
  }

}
