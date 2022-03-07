import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NumberLiteralType } from 'typescript';

export class Shopify
{
    public id: number;
    public heading: string;
    public description: string;
    public content:string;
    public topicLevel: number;
    public parentId: number;
}


@Component({
    selector     : 'shopify',
    templateUrl  : './shopify.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ShopifyComponent implements OnInit
{
    /**
     * Constructor
     */

    shopify: any;
    

    constructor(private httpClient: HttpClient)
    {
        
    }

    ngOnInit(): void {
        this.getTopics(); 
    }

    getTopics()
    {
        this.httpClient.get<any>('http://localhost:8080/help-centre/topics/0dddbf78-63a7-4bb7-91ec-4435efad1196').subscribe(
            response => {
             
                this.shopify = response;
              
            }

        );
    }
}
