import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedComponent} from './feed.component';
import {PostComponent} from './post/post.component';
import {SharedModule} from '../shared/shared.module';
import {CommentListComponent} from './comment-list/comment-list.component';
import {CommentComponent} from './comment/comment.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        FeedComponent, PostComponent,
        CommentListComponent, CommentComponent,
    ]
})
export class FeedModule {
}
