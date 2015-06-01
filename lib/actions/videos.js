'use strict';

/**
 * Dependencies
 */
import dispatcher from 'dispatchers/dispatcher';
import store from 'stores/conferences';
import request from 'superagent';

const perPage = 20;
const prefix = '/api/videos/';

export function getPage(page) {
  request
    .get(prefix + '')
    .query({
      limit: perPage,
      page: page || 0
    })
    .end((err, {body}) => {
      if (err) throw err;
      dispatcher.dispatch({
        type: 'get',
        data: body
      });
    })
  ;
}
