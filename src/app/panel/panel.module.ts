import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelRoutingModule } from './panel-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { SeemorePipe } from './pipes/seemore.pipe';
import { PostsComponent } from './pages-posts/posts/posts.component';
import { EditpostsComponent } from './pages-posts/editposts/editposts.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import { CommentbypostedIdComponent } from './pages-comments/commentbyposted-id/commentbyposted-id.component';
import { SinglePostComponent } from './pages-posts/single-post/single-post.component';


@NgModule({
  declarations: [
    PostsComponent,
    SeemorePipe,
    EditpostsComponent,
    CommentbypostedIdComponent,
    SinglePostComponent,
    
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    DataTablesModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ]
})
export class PanelModule { }
