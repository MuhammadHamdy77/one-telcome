import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditpostsComponent } from './pages-posts/editposts/editposts.component';
import { PostsComponent } from './pages-posts/posts/posts.component';
import { SinglePostComponent } from './pages-posts/single-post/single-post.component';

const routes: Routes = [
  {path: 'posts/all', component: PostsComponent},
  {path:"" , redirectTo: 'posts/all' , pathMatch: 'full'},
  {path: 'post/edit/:id' , component: EditpostsComponent},
  {path: 'postidId/:id' , component: SinglePostComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
