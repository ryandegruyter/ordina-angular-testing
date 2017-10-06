import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../json-placeholder-api/post/post';
import { PostService } from '../json-placeholder-api/post/post.service';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

    public posts: Observable<Post[]>;

    constructor(
        private postService: PostService
    ) { }

    ngOnInit() {
        this.posts = this.postService.getAll();
    }

}
