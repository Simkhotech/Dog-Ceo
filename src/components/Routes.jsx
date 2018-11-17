import loadable from 'loadable-components';
import LoadingSpinner from './LoadingSpinner';

export const BreedList = loadable(() => import('../containers/BreedListPageContainer'), {
  LoadingComponent: LoadingSpinner,
});
export const BreedPage = loadable(() => import('../containers/BreedPageContainer'), {
  LoadingComponent: LoadingSpinner,
});
export const PageNotFound = loadable(() => import('./Page404/Page404'));
