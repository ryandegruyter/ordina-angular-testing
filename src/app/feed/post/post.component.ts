import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../json-placeholder-api/post/post';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    @Input()
    public post: Post;

    constructor() { }

    ngOnInit() { }

}
