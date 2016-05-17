// libraries
import React, {PropTypes} from 'react';

// web components
import ScrollspyContainer from 'focus-components/components/scrollspy-container';
import {component as BackButton} from 'focus-components/common/button/back';
import {cartridgeBehaviour} from 'focus-components/page/mixin';

//import FocusComments from 'focus-comments';
import {component as Popin} from 'focus-components/application/popin';

//views
import Caracteristics from './caracteristics';
import Casting from './casting';
import HeaderExpanded from './header-content-expanded';
import HeaderSummary from './header-content-summary';
import Overview from './overview';
import Posters from './posters';
import Synopsis from './synospis';
import Trailer from './trailer';

export default React.createClass({
    displayName: 'MovieDetailView',
    propTypes: {
        id: PropTypes.number.isRequired
    },
    mixins: [cartridgeBehaviour],
    /**
    * Related to the CartridgeBehaviour.
    * Define the cartridge configuration.
    * @return {[type]} [description]
    */
    cartridgeConfiguration() {
        const props = { hasLoad: false, hasForm: false }; //{id: this.props.id};
        return {
            barLeft: { component: BackButton },
            cartridge: { component: HeaderExpanded, props },
            summary: { component: HeaderSummary, props },
            actions: {
                primary: this._getGlobalPrimaryActions() || [],
                secondary: []
            }
        };
    },

    _getGlobalPrimaryActions() {
        const actions = [];
        actions.push({label: 'Imprimer', icon: 'print', action: () => {
            window.print();
        }});
        actions.push({label: 'Commentaires', icon: 'comment', action: () => {
            this.refs.commentsModal.toggleOpen();
        }});
        return actions;
    },

    /** @inheritDoc */
    render() {

        const commentsConfig = {
            apiRootUrl: 'OnEnSaitRien',
            concept: 'movie',
            conceptId: this.props.id
        }

        const {id} = this.props;
        //<FocusComments ref="commentsModal" {...commentsConfig}/>
        return (
            <div>
                <ScrollspyContainer gridContentSize={10} gridMenuSize={2}>
                    {/* Bloc header dupliqué juste pour print*/}
                    <div data-demo='print'>
                        <HeaderExpanded hasLoad={false}/>
                    </div>
                    <div data-demo='detail-overview'>
                        <Overview hasLoad={false} hasForm={false} />
                    </div>
                    <Caracteristics id={id} />
                    <Synopsis id={id} />
                    <Trailer id={id} />
                    <Posters id={id} />
                    <Casting id={id} />
                </ScrollspyContainer>
                <Popin ref='commentsModal' size='medium' type='from-right'>
                    
                </Popin>
            </div>
        );
    }
});
