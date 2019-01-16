import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from '../model/registration-model';
import { RegistrationService } from '../service/registration.service';

declare var $: any;

@Component({
  selector: 'registration-request',
  templateUrl: './registration-request.html',
  providers: [RegistrationService]
})
export class RegistrationRequest implements OnInit{
  title = 'e-shopping-cart';
  public userList: RegistrationModel[] = new Array<RegistrationModel>();


  constructor(private service: RegistrationService) {

   }

   ngOnInit() {

      this.service.fetchAllUsersReq().subscribe((result) => {
        console.log("Results : "+result)
        if(result != null) {
          this.userList = result;
        } else {
          this.userList = new Array<RegistrationModel>();
        }
      }, error => {
        console.log(error);
      });
   }

/*   ngAfterViewInit(){
     $("#user-menu li").each(function() {
        $(this).removeClass("active");
      });

     $("#home").addClass("active");
   }
*/


}
