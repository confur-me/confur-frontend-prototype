'use strict';

/**
 * Dependencies
 */
import dispatcher from 'dispatchers/dispatcher';
import store from 'stores/video';
import request from 'superagent';

const api = '/api/conferences/';

export function get(id) {
  request
    .get(id ? api + id : api)
    .end((err, {body}) => {
      if (err) throw err;
      dispatcher.dispatch({
        type: 'get',
        data: body
      });
    })
  ;
}
