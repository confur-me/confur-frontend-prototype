'use strict';

/**
 * Dependencies
 */
import {EventEmitter} from 'events';
import dispatcher from 'dispatchers/dispatcher';

export default new class VideoStore extends EventEmitter {

  constructor(props) {
    super(props);
    this.conferences = [];
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
          // noop :D
      }
    });
  }

  get() {
    return this.conferences;
  }

  add() {}
  reset() {}

};
