import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseNavigationItem, FuseSideNavAPI } from '@fuse/components/navigation';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { apisideNav, apisideNavDef, compactNavigation, defaultApi, defaultNavigation, futuristicNavigation, horizontalNavigation } from 'app/mock-api/common/navigation/data';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class NavigationMockApi
{
    private readonly _compactNavigation: FuseNavigationItem[] = compactNavigation;
    private readonly _defaultNavigation: FuseNavigationItem[] = defaultNavigation;
    private readonly _futuristicNavigation: FuseNavigationItem[] = futuristicNavigation;
    private readonly _horizontalNavigation: FuseNavigationItem[] = horizontalNavigation;
    private readonly _apiNavDef: FuseNavigationItem[] = apisideNavDef;
    private readonly _defaultApi: FuseNavigationItem[] = defaultApi;


    private readonly _apiNavigation: FuseSideNavAPI[] = apisideNav;
    //private readonly _apiList: FuseSideNavAPI[] = '';


    

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService, private httpClient: HttpClient)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    



    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Navigation - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('/help-centre/topics/top-level-topics')
            .reply(() => {

                // Fill compact navigation children using the default navigation
                this._compactNavigation.forEach((compactNavItem) => {
                    this._defaultNavigation.forEach((defaultNavItem) => {
                        if ( defaultNavItem.id === compactNavItem.id )
                        {
                            compactNavItem.children = cloneDeep(defaultNavItem.children);
                        }
                    });
                });

                // Fill futuristic navigation children using the default navigation
                this._futuristicNavigation.forEach((futuristicNavItem) => {
                    this._defaultNavigation.forEach((defaultNavItem) => {
                        if ( defaultNavItem.id === futuristicNavItem.id )
                        {
                            futuristicNavItem.children = cloneDeep(defaultNavItem.children);
                        }
                    });
                });

                // Fill horizontal navigation children using the default navigation
                this._horizontalNavigation.forEach((horizontalNavItem) => {
                    this._defaultNavigation.forEach((defaultNavItem) => {
                        if ( defaultNavItem.id === horizontalNavItem.id )
                        {
                            horizontalNavItem.children = cloneDeep(defaultNavItem.children);
                        }
                    });
                });
                //default
                this._apiNavDef.forEach((apiNavdef) => {
                    this._defaultApi.forEach((defaultApi) => {
                        if ( defaultApi.id === apiNavdef.id )
                        {
                            apiNavdef.children = cloneDeep(defaultApi.children);
                        }
                    });
                });

                this._apiNavigation.forEach((apiSideNav) => {
                    this._defaultNavigation.forEach((apiSideNavDef) => {
                        if ( apiSideNavDef.id === apiSideNav.id )
                        {
                            apiSideNav.children = cloneDeep(apiSideNavDef.children);
                        }
                    });
                });

                // Return the response
                return [
                    200,
                    {
                        compact   : cloneDeep(this._compactNavigation),
                        default   : cloneDeep(this._defaultNavigation),
                        futuristic: cloneDeep(this._futuristicNavigation),
                        horizontal: cloneDeep(this._horizontalNavigation),
                        apiSideDef:cloneDeep(this._apiNavDef),
                        defaultapi:cloneDeep(this._defaultApi),
                        apiside: cloneDeep(this._apiNavigation),
                        //List:cloneDeep(this.)

                    }
                ];
            });
    }
}
