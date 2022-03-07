import { IsActiveMatchOptions } from '@angular/router';

export interface FuseNavigationItem
{
    id?: string;
    title?: string;
    subtitle?: string;
    type?:
        | 'aside'
        | 'basic'
        | 'collapsable'
        | 'divider'
        | 'group'
        | 'spacer';
    hidden?: (item: FuseNavigationItem) => boolean;
    active?: boolean;
    disabled?: boolean;
    tooltip?: string;
    link?: string;
    externalLink?: boolean;
    
    target?:
        | '_blank'
        | '_self'
        | '_parent'
        | '_top'
        | string;
    exactMatch?: boolean;
    isActiveMatchOptions?: IsActiveMatchOptions;
    function?: (item: FuseNavigationItem) => void;
    classes?: {
        title?: string;
        subtitle?: string;
        icon?: string;
        wrapper?: string;
    };
    icon?: string;
    badge?: {
        title?: string;
        classes?: string;
    };
    children?: FuseNavigationItem[];
    meta?: any;
    //sidenav 
    heading?:string;
    description?:string;
    content?:string;
    topicLevel?:string;
    parentId?:string;
    subtopics?: FuseNavigationItem[];
   // url?:'http://localhost:8080/help-center/topics/top-level-topics';
}

export interface FuseSideNavAPI
{
    id?:string;
    heading?:string;
    description?:string;
    content?:string;
    topicLevel?:string;
    parentId?:string;
    title?:string;
    children?: FuseNavigationItem[];

}

export class LinkClass
{
    link?: 'http://localhost:8080/help-centre/topics/top-level-topics'
}

export type FuseVerticalNavigationAppearance =
    | 'default'
    | 'compact'
    | 'dense'
    | 'thin';

export type FuseVerticalNavigationMode =
    | 'over'
    | 'side';

export type FuseVerticalNavigationPosition =
    | 'left'
    | 'right';
