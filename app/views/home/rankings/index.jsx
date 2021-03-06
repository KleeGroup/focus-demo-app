import React, {Component} from 'react';
import DateRanking from './date';
import MarkRanking from './mark';
import {loadDateRanking, loadMarkRanking} from '../../../action/rankings';
import rankingsStore from '../../../stores/rankings';
import connect from 'focus-components/behaviours/store/connect';

const TABS = {
    DATE: 'DATE',
    MARK: 'MARK'
};

@connect([{store: rankingsStore, properties: ['dateRanking', 'markRanking']}], props => rankingsStore.getValue())
class Rankings extends Component {
    state = {activeTab: TABS.DATE};

    componentWillMount() {
        loadDateRanking.call(this);
        loadMarkRanking.call(this);
    }

    render() {
        const {dateRanking, markRanking} = this.props;
        return (
            <div>
                <DateRanking dateRanking={dateRanking || []}/>
                <MarkRanking markRanking={markRanking || []}/>
            </div>
        );
    }
}

export default Rankings;
