import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NumberLiteralType } from 'typescript';

export class Overview
{
    public id: number;
    public heading: string;
    public description: string;
    public content:string;
    public topicLevel: number;
    public parentId: number;
}


@Component({
    selector     : 'overview',
    templateUrl  : './overview.component.html',
    encapsulation: ViewEncapsulation.None
})

export class OverviewComponent implements OnInit
{
    overview: Overview;
    pageInfo:Overview;

    constructor(private httpClient: HttpClient)
    {
        
    }
    ngOnInit(): void {
        this.getOverviewHeader();
        this.getOverviewPage();
    }

    getOverviewHeader()
    {
        this.httpClient.get<any>('http://localhost:8080/help-centre/topics/b856f3aa-fcdb-4248-ae4f-220248c6000d').subscribe(
            response => {
             
                this.overview = response;
                console.log(this.overview);
              
            }

        );
    }

    getOverviewPage()
    {
        this.httpClient.get<any>('http://localhost:8080/help-centre/topic/discount').subscribe(
            response => {
             
                this.pageInfo = response;
                
              
            }

        );

    }
    
}