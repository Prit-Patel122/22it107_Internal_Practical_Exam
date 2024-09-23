import {combineReducers} from 'redux';

import statisticsReducer from './statisticsReducer';
import countryStatisticsReducer from './countryStatisticsReducer';
import markersReducer from './markersReducer';
import mapStyleReducer from './mapStyleReducer';
import setActionReducer from './setActionReducer';

const rootReducer = combineReducers({
    statistics: statisticsReducer,
    countryStatistics: countryStatisticsReducer,
    markers: markersReducer,
    style: mapStyleReducer,
    action: setActionReducer
});

export default rootReducer;