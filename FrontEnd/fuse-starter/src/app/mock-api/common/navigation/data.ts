/* tslint:disable:max-line-length */
import { HttpClient } from '@angular/common/http';
import { FuseNavigationItem, FuseSideNavAPI } from '@fuse/components/navigation';
import { AddTopicComponent } from 'app/modules/admin/addTopic/addtopic.component';
import { ExampleComponent } from 'app/modules/admin/example/example.component';




export const defaultNavigation: FuseNavigationItem[] = [
 
    
        {}
    

    
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        children : []
    },
    {
        id   : 'intro',
        title: 'Intro to Shopify',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        children : []
    },
    {
        
        id   : 'new_topic',
        title: 'Add new topic',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link: '/addtopic',
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        children : []
    },
    {
        id   : 'intro',
        title: 'Intro to Shopify',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        children : []
    },
    {
        
        id   : 'new_topic',
        title: 'Add new topic',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link: '/addtopic',
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        children : []
    },
    {
        id   : 'intro',
        title: 'Intro to Shopify',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        children : []
    },
    {
        
        id   : 'new_topic',
        title: 'Add new topic',
        type : 'basic',
        //icon : 'heroicons_outline:chart-pie',
        link: '/addtopic',
    }
];
//for comparing with each attribute

export const defaultApi : FuseNavigationItem[] =
[
    {
        id   : 'new_topic',
        //heading: 'Add new topic test',
        type : 'collapsable',
       // icon : 'heroicons_outline:chart-pie',
        link: '/addtopic',
    }
]

//using this as changed content
export const apisideNavDef : FuseNavigationItem[] =
[
    {
        id   : 'new_topic',
       // heading: 'Add new topic test',
        type : 'collapsable',
        icon : 'heroicons_outline:chart-pie',
        link: '/addtopic',
    }
]

export const apisideNav : FuseSideNavAPI[] =
[
    {
        id   : 'new_topic',
        title: 'Add new topic test',
        //type : 'basic',
        //icon : 'heroicons_outline:chart-pie',
        //link: '/addtopic',
    }
]






