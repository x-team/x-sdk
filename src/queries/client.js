import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

let client;

class ClientHandler {

  client = null;

  init(uri){
    this.client = new Lokka({
      transport: new Transport(uri,{
        'Access-Control-Allow-Origin': 'true'
      })
    });

    return this.client;
  }

}

export default new ClientHandler();
