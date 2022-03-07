import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ShopfiyService } from 'app/modules/admin/intro/shopify/shopify.service';

@Injectable({
    providedIn: 'root'
})
export class ShopifyResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _shopifyService: ShopfiyService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {
        return this._shopifyService.getData();
    }
}
