import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import Vue from 'https://cdn.pika.dev/vue@^2.6.11';
import * as pkg from 'https://cdn.pika.dev/vuetify@^2.2.32';
import { serve } from "https://deno.land/std/http/server.ts";
//import PersonalNotes from "./notes.ts"

const hello = new Vue({
  el: '#app',
  data: {
    message: 'hello world'
  },
  render(createElement: any) {
    return createElement(
      'div', 
      { attrs: { id: 'myId' } }, 
      this.message
    );
  }
});

const html = 
	`<html>
	<link rel="stylesheet" href=
	`
const router = new Router();
router
  //.get('/notes', PersonalNotes.index)
  .get("/", (context) => {
    context.response.body= hello;
});
const app = new Application();
const PORT = 3000;
app.use(router.routes());
app.use(router.allowedMethods());
console.log(`Listening on port ${PORT}`);
await app.listen({ port: PORT });
