import fetch from 'focus-core/network/fetch';

import commonUrl from '../config/server/common';
import moviesUrl from '../config/server/movies';
import personsUrl from '../config/server/persons';

export default {

    /**
     * Target search service call.
     * (This should the target : search service should be written this way.)
     *
     * @param  {object} config search call configuration.
     * @param  {string} scope  scope search
     * @return {object}        search response
     */
    search(config) {
        console.log(config)
        const scope =( config.query && config.query.scope) ? config.query.scope : 'all';
        config.urlData = {
          skip: 0,
          sortDesc: false,
          top: 50
        }
        config.data = {
          scope: scope,
          facets: {},
          criteria: ( config.query && config.query.term) ? config.query.term : '*'
        }
        config.skip = 0;
        config.top = 0;
        switch (scope) {
            case 'movie':
            
                console.log(`[SEARCH MOVIE] config: ${JSON.stringify(config)}`);
                return fetch(moviesUrl.search(config))
            case 'person':
                console.log(`[SEARCH PERSON] config: ${JSON.stringify(config)}`);
                return fetch(personsUrl.search(config))
            default:
                console.log(`[SEARCH ALL] config: ${JSON.stringify(config)}`);
                return fetch(commonUrl.search(config)).then(data =>{ console.log(data); return data} );
        }
    },

    // /**
    // * Search with scope.
    // * @param  {Object} AdvancedSearch config that launches the call of this service
    // * @return {Promise}
    // */
    // scoped(config) {
    //     const {criteria} = config.data;
    //     const {scope} = criteria;
    //     return this._search(config, scope);
    // },
    // /**
    // * Search without scope.
    // * @param  {Object} AdvancedSearch config that launches the call of this service
    // * @return {Promise}
    // */
    // unscoped(config) {
    //     return this._search(config);
    // }
};
