import {ActivatedRouteSnapshot, BaseRouteReuseStrategy} from '@angular/router';

export class ReloadRouter extends BaseRouteReuseStrategy{
  public override shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.data['reuseComponent'];
  }

}
