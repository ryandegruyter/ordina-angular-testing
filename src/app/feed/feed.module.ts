import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedComponent} from './feed.component';
import {PostComponent} from './post/post.component';
import {SharedModule} from '../shared/shared.module';
import { CommentModule } from './comment/comment.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CommentModule
    ],
    declarations: [
        FeedComponent, PostComponent
    ]
})
export class FeedModule {
}
