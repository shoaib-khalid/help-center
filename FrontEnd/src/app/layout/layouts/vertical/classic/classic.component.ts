import { Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { FuseNavigationItem, FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { Navigation } from 'app/core/navigation/navigation.types';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSidenav } from '@angular/material/sidenav';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { BLACK_ON_WHITE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';

export class Headers
{
    public id: number;
    public heading: string;
    public description: string;
    public content:string;
    public topicLevel: number;
    public parentId: number;
}

@Component({
    selector     : 'classic-layout',
    templateUrl  : './classic.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ClassicLayoutComponent implements OnInit, OnDestroy
{
    @ViewChild('sidenav') sidenav: MatSidenav;
    @Input() hasBackdrop: any
    isScreenSmall: boolean;
    showMobile:boolean = false;
    navigation: Navigation;
    topic_title:any;
    title:any;
    
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    headers: Headers[];
    navItems: FuseNavigationItem[] = [];
    selectedSubItem: any;
    selectedName:any;
    show:boolean = false;
    subItems:any;
    subMobileList:any;
    subTosubMobileList:any;
    subToThirdMobileList:any;
    subTosub:any;
    subList:any;
    subShow: boolean = false;
    hasChild:boolean =false;
    getId: any;
    hasTopic: boolean=false;
    content: any;
    secondSub: any[];
    hasSubTopic: boolean=false;
    selectedSubToSub:any;
    subTosubShow:boolean= false;
    hasTitle: any;
    subTitle: any;
    subTosubTitle: any;
    subThirdTitle: any;
    hasthirdChild: boolean=false;
    topTopics:boolean = false;
    color: string;
    mobileTopic:boolean =false;
    mobileSubTopic:boolean=false;
    mobileSubtoSubTopics:boolean = false;
    firstContent: any;
    secondContent: any;
    thirdContent: any;
    fourthContent: any;
    panelOpenState = false;
    contentCheck: any;
    contentDispay: any;
    
    

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _navigationService: NavigationService,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _fuseNavigationService: FuseNavigationService,
        private httpClient: HttpClient
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for current year
     */
    get currentYear(): number
    {
        return new Date().getFullYear();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {



        // Subscribe to navigation data
        this._navigationService.navigation$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((navigation: Navigation) => {
                this.navigation = navigation;
            });

        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {

                // Check if the screen is small
                this.isScreenSmall = !matchingAliases.includes('md');
            });

            //this.getSideNavHeaders();

            // Call API
           this.httpClient.get<any>('http://localhost:8080/help-centre/topics/top-level-topics').subscribe(
                result => {
                 
                    
                    console.log("Result", result);
                    this.navItems = result.List;
                     //updated for starting content and title on our screen
                    this.contentCheck=result;
                    this.contentDispay = this.contentCheck.List.find(item=> item.id ==='0dddbf78-63a7-4bb7-91ec-4435efad1196') ; //starting content will be intro
                    this.content = this.contentDispay["content"]; // parsing content for initial display
                    this.hasTitle = this.contentDispay["title"]; //parsing title for breadcrumbs
                    this.subMobileList = this.contentDispay["subtopics"];  
                    this.mobileTopic =true;                                //smaller screen display initially
                    console.log("NavItems", this.navItems, this.content, this.subMobileList);
                  
                }
    
            );
            // result.List.map()
           /* const map = this.list.map(function(obj)
            {
                let myObj:FuseNavigationItem ={title: ""};
                myObj.title = obj.  ;
            }*/
            //this.navItems 
    }

    toggleButton()
    {
        this.showMobile =!this.showMobile;
         this.color = "#000000";
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle navigation
     *
     * @param name
     */
    toggleNavigation(name: string): void
    {
        // Get the navigation
        const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);

        if ( navigation )
        {
            // Toggle the opened status
            navigation.toggle();
        }
    }

    toggleNavigationMobile(name: string): void
    {
        // Get the navigation
        const navigationMobile = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);

        if ( navigationMobile )
        {
            // Toggle the opened status
            navigationMobile.toggle();
        }
    }

    
   /* getSideNavHeaders()
    {
        this.httpClient.get<any>('http://localhost:7070/help-center/topic/').subscribe(
            heads => {
             
                this.headers = heads;
                console.log(this.headers);
              
            }

        );
    }*/
    
    onClick(event1, event2,event3) {
       
        //var value = idAttr.nodeValue;
        
        //this.show= false;
        this.hasTitle=null;
       // this.subTitle = "";
        this.show = true;
        this.subTitle="";//removing level 1 in breadcrumbs
        this.subTosubTitle="";  //removing level 2 in breadcrumbs


        this.subThirdTitle=""; //removing 3rd level when jumping in breadcrumbs
        
        this.subItems= [];
    
        this.selectedName = event1;
        this.content = event2;
        this.firstContent= event2; //content for breadcrumbs
        this.hasTitle=event3;
        this.subShow = false;
        this.topTopics= true;
        this.hasTopic = false ;//removing previous icon of level1 
        this.mobileTopic= true; //for mobile veiw level 0-1
        console.log("Button ID:", this.selectedName, this.content, this.hasTitle);
        this.subToThirdMobileList=[]
        this.subMobileList=[]
        this.subTosubMobileList=[]
        
      
        


        //calling API for children with specific parent Id
        this.httpClient.get<any>('http://localhost:8080/help-centre/topics/subtopics/'+this.selectedName+'').subscribe(
            result => {
             
                
            
                this.subItems = result.List;
                this.subMobileList = result.List;

                console.log("SubItems", this.subItems, this.subMobileList); //onclick getting level 1 item
              
            }

        );
        
        
   

      }

      //function for subtopics
      onSubClick(event,event2, eventSub)
      {
        
        this.subTosubTitle="";  
        this.subTitle="";
        this.subThirdTitle=""; //removing 3rd level when jumping in breadcrumbs

        //this.show = true;
        //this.subShow = false;
        this.subShow = true;
        this.subTosub =[];
        this.hasTopic = true ;
        this.subTosubShow = false;//removing list of lvl 3
        this.hasSubTopic = false; //icon of lvl2
        this.subMobileList =[]
        this.subToThirdMobileList=[]


        
        this.content = event2;
        this.subTitle=eventSub;
        this.secondContent= event2; //for breadcrumbs

        this.mobileTopic=false;//removing 0-1 list mobile view
        this.mobileSubTopic= true; // adding 1-2 list mobile view


        console.log("Button Sub ID", event);
        this.selectedSubItem = event;
          //calling sub-sub topics of subtopics
       this.httpClient.get<any>('http://localhost:8080/help-centre/topics/subtopics/'+this.selectedSubItem+'').subscribe(
            result => {
             
                
            
                this.subTosub = result.List;
                this.subTosubMobileList= result.List;
               // this.getId = this.subTosub[0];
                console.log("Sub to sub Items", this.subTosub );
              
            }

        );

      }

      onSubToSubClick(eventx, eventy, eventz)
      {
          this.subThirdTitle= "";
          this.secondSub =[];
          this.hasSubTopic = true;
          this.content = eventy;
          this.thirdContent= eventy; //content for 3rd breadcrumbs
          this.subTosubShow = true;
          this.subTosubTitle= eventz;
          this.hasChild =! this.hasChild;
          this.hasthirdChild = false;
          this.subTosubMobileList =[]

          console.log("Button Sub to Sub ID", eventx);
          this.selectedSubToSub = eventx;
          this.mobileSubTopic = false // removing 1-2 list
          this.mobileSubtoSubTopics = true // adding 2-3 list

          this.httpClient.get<any>('http://localhost:8080/help-centre/topics/subtopics/'+this.selectedSubToSub+'').subscribe(
            result => {
             
                
            
                this.secondSub = result.List;
                this.subToThirdMobileList =result.List;
               // this.getId = this.subTosub[0];
                console.log("Sub to sub second Items", this.secondSub );
              
            }

        );
      }
      onThird(events, eventID)
      {
          this.content= events;
          this.subThirdTitle = eventID;
          this.hasthirdChild = true;
          this.fourthContent = events; // for breadcrumbs
      }

    topicSelected(event)
    {
        //this.selectedName = this.selectedOption
        //console.log(this.selectedName);
    }
    toggleOption()
    {
        this.show =! this.show;
        console.log("Hello",this.show);
    }

    

}
