import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { PostComponent } from './post/post.component';
import { SharedModule } from '../shared/shared.module';
import { CommentComponent } from './comment/comment.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [FeedComponent, PostComponent, CommentComponent]
})
export class FeedModule { }
