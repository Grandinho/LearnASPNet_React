import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexActors from "./actors/indexActors";

import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";
import IndexGenres from "./genres/IndexGenres";

import LandingPage from "./LandingPage"

import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMoives from "./movies/FilterMovies";

import CreateMovieTheaters from "./movietheaters/CreateMovieTheaters";
import EditMovieTheaters from "./movietheaters/EditMovieTheaters";
import IndexMovieTheaters from "./movietheaters/indexMovieTheaters";
import RedirectLandingPage from "./utils/RedidrectLandingPage";

const routes = [
    {path: '/genres', component: IndexGenres, exact: true},
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit/:id', component: EditGenre},

    {path: '/actors', component: IndexActors, exact: true},
    {path: '/actors/create', component: CreateActor},
    {path: '/actors/edit/:id', component: EditActor},

    {path: '/movietheaters', component: IndexMovieTheaters, exact: true},
    {path: '/movietheaters/create', component: CreateMovieTheaters},
    {path: '/movietheaters/edit/:id', component: EditMovieTheaters},

    
    {path: '/movies/create', component: CreateMovie},
    {path: '/movies/edit/:id', component: EditMovie},
    {path: '/movies/filter', component: FilterMoives},



    {path: '/', component: LandingPage, exact: true },
    {path: '*', component: RedirectLandingPage}
];

export default routes;