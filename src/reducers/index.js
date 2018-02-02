import { combineReducers } from 'redux';
import EventReducer from './reducer_events';
import MatchesReducer from './reducer_matches';
import StatsReducer from './reducer_stats';
import AuthReducer from './reducer_auth';
import MessagesReducer from './reducer_messages';

const rootReducer = combineReducers({
  events: EventReducer,
  matches: MatchesReducer,
  stats: StatsReducer,
  auth: AuthReducer,
  messages: MessagesReducer
});

export default rootReducer;
