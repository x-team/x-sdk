import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

import client from './client';

export default class Model {

  getAll() {
    return this.client.query('xteamers{}').then(res => res.items);
  }

  get(id){
    return this.client.query('xteamers({id: `$id`}){}').then(res => res.items);
  }

  addItem(newItem, afterAdded) {

    return this.client
      .mutate(addFragment)
      .then(data => data.item);
  }


}
