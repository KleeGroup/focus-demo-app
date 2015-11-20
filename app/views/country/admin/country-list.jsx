import React, {Component, PropTypes} from 'react';
import {component as SmartList} from 'focus-components/page/list'


class CountryList extends Component {
    render() {
        const {handleLineClick, action, store, columns} = this.props;
        return (
            <SmartList
                LineComponent={({data, onLineClick}) => <tr onClick={() => onLineClick(data)}><td>{data.id}</td><td>{data.name}</td></tr>}
                action={{load: action}}
                columns={columns}
                onLineClick={handleLineClick}
                ref='smartList'
                store={store}
            />
        );
    }
}

CountryList.displayName = 'CountryList';
CountryList.propTypes = {
    LineComponent: PropTypes.element,
    action: PropTypes.func,
    columns: PropTypes.array,
    handleLineClick: PropTypes.func,
    onLineClick: PropTypes.func.isRequired,
    store: PropTypes.func
}
export default CountryList;