import {observable} from 'mobx';
import request from 'superagent';

export default class CurrentUserStore {
  @observable currentUser = {};
  
  getCurrentUser() {
    request
      .get('/users/current')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) {
          //need to add some error handling here
          return;
        }

        this.currentUser = res.body;
      }.bind(this))
    ;
  }

  logout() {
    request
      .get('/users/logout')
      .end(function(err, user) {
        if (err) {
          //need to add some error handling here
          return;
        }
        this.currentUser = null;
      })
    ;
  }
}
