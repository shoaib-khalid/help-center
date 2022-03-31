import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { result } from 'lodash';
import { HelpserviceService } from './helpservice/helpservice.service';

export class Model
{
    public id: number;
    public title: any;
    public description: string;
    public content:string;
    public topicLevel: number;
    public parentId: number;
    public type: string;
    public link: string;
    public subtopics:[];
}

@Component({
    selector     : 'addtopic',
    templateUrl  : './addtopic.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AddTopicComponent implements OnInit
{
    topics: any;
    dropDown: Model[];
    checkUpdate:Model[];
    selected: any;
    selectedParentId: any;
    selectedUpdate:any;
    parseData:any;
    parseTitle:any;
    parseLevel:any;
    parseContent:any;
    postId: any;
    url: 'http://localhost:8080/help-centre/topics/top-level-topics';
    check: any;
    updateInfo: any;
    parseID: any;
    parentId: any;
    topicTitle:any;
    updateTitle: any;
    //data: any= [];

    ChangeTopic(e)
    {
        console.log(e.target.value);
    }
    /** 
     * Constructor
     */
    constructor(private helpData: HelpserviceService, private httpClient: HttpClient)
    {
        this.helpData.servicdata().subscribe((data)=>
        {
            this.topics=data;
            //this.check = this.topics.List;
            console.log("test id", this.topics.List);
        })
    }
    ngOnInit(): void {
        this.getTopicDropDown(); 
        this.getParentId();
        
        //this.getURL();
        
    }

    onSubmit(data)
    {
        
        console.log("posting data", data);
       this.helpData.saveTopic(data).subscribe((result)=> 
        {
            console.warn(result);
        });
      // window.location.reload();

    

    } 

    getTopicDropDown()
    {
        this.httpClient.get<any>('http://localhost:8080/help-centre/topics/').subscribe(
            result => {
             
                this.dropDown = result.List;
                console.log(result);
              
            }

        );
    }

    getParentId()
    {
        this.postId = this.selectedParentId;
        console.log("Post ID", this.postId);

    }

    getURL()
    {
        this.httpClient.get(this.url).subscribe((res)=>{
            //this.data = res
            //console.log(this.data)
          })
    }

    getUpdate()
    {
        //this.updateInfo=event;
        this.parseData = this.selectedUpdate;
        this.parseTitle= this.parseData["title"];
        this.parseID = this.parseData["id"];
        this.parseLevel = this.parseData["topicLevel"];
        this.parseContent = this.parseData["content"];
        this.parentId = this.parseData["parentId"];
        console.log("id", this.parseTitle);
        console.log("level", this.parseLevel);
        console.log("content", this.parseContent);
        console.log("ID", this.parseID);
        console.log("parent Id is", this.parentId);
        this.updateTitle = this.topicTitle
        console.log("Update check", this.selectedUpdate, this.updateTitle);


      
    }
    putUpdate(eventID, datax)
    {
        console.log("checking update", eventID, datax); 
          this.helpData.updateTopic(datax ,eventID).subscribe(result=>
        {
            console.warn(this.parseContent);
        }
        
        );
       // window.location.reload();

    }
}
