import { Route } from '@angular/router';
import { ShopifyComponent } from 'app/modules/admin/intro/shopify/shopify.component';
import { ShopifyResolver } from 'app/modules/admin/intro/shopify/shopify.resolver';

export const shopifyRoutes: Route[] = [
    {
        path     : '',
        component: ShopifyComponent,
        resolve  : {
            data: ShopifyResolver
        }
    }
];
