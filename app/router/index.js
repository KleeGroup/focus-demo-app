import AdminRouter from './admin-router';
import HomeRouter from './home-router';
import MovieRouter from './movie-router';
import PersonRouter from './person-router';
import SearchRouter from './search-router';
import TestRouter from './test-router';
import FromageRouter from './fromage-router';

export const registerRoutes = () => {
    new AdminRouter();
    new HomeRouter();
    new MovieRouter();
    new PersonRouter();
    new SearchRouter();
    new TestRouter();
    new FromageRouter();
};
