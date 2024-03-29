import * as ClientElement from "./client-business";
import * as Clients from "./data-business";

  function printClientsAccounts() {
    const clients = getClients();
    const ul = document.createElement("ul");
    for (let client of clients) {
      const element = getClientElement(client);
      ul.appendChild(element);
    }
  
    document.getElementById("root").appendChild(ul);
  }
  
  export { printClientsAccounts };
  