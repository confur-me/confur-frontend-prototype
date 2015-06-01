'use strict';

/**
 * Dependencies
 */
import {EventEmitter} from 'events';
import dispatcher from 'dispatchers/dispatcher';

export default new class VideoStore extends EventEmitter {

  constructor(props) {
    super(props);
    this.videos = [];
    this.register();
  }

  register() {
    dispatcher.register(action => {
      switch (action.type) {
        case 'get':
          this.conferences = action.data;
          this.emit('change');
          break;
        default:
          console.warn('Unhandled action %s', action.type);
      }
    });
  }

  get() {
    return this.conferences;
  }

};
