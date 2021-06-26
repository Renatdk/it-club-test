import { createServer, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      contact: Model,
    },

    seeds(server) {
      server.create("contact", { firstName: "Bob", lastName: "Smith", email: "bob@mail.com", });
      server.create("contact", { firstName: "Alice", lastName: "Jhonson", email: "alice@mail.com", });
    },

    routes() {
      this.timing = 1000;
      this.namespace = "api";

      this.get("/contacts", (schema) => {
        return schema.contacts.all();
      })

      this.post("/contacts", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.db.contacts.insert(attrs);
      })
    },
  })

  return server
}
