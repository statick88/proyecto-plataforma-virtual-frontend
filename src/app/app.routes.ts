import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { TeacherProfileComponent } from './components/teacher-profile/teacher-profile.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { UpdateComponent } from './components/update/update.component';
import { WatchVideoComponent } from './components/watch-video/watch-video.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'playlist', component: PlaylistComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'teacher-profile', component: TeacherProfileComponent },
    { path: 'teachers', component: TeachersComponent },
    { path: 'update', component: UpdateComponent },
    { path: 'watch-video', component: WatchVideoComponent }
];



