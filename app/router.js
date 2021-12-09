import EmberRouter from '@ember/routing/router';
import config from 'super-rentals/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('contact', { path: '/getting-in-touch' });
  this.route('faire-gardez-vos-annimaux', { path: '/vos-annimaux' });
  this.route('faire-gardez-vos-annimaux-vide', { path: '/vos-annimaux-vide' });
  this.route('list-petsitter', { path: '/animal' });
  this.route('login');
  this.route('signup');
  this.route('list-petsitter');
  this.route('messagerie');
  this.route('messagerie-juju');
  this.route('acceuil1', { path: '/acceuil/yehuda' });
  this.route('acceuil2', { path: '/acceuil/lucile' });
});
