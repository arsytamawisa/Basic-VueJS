Vue.component('greeting', {
     template: `
          <div>
               <p>Hello Vue!</p>
          </div>
     `
})

Vue.component('button-counter', {
     data: function () {
          return {
               count: 0
          }
     },
     template: `<button @click="count++">Click {{ count }} times</button>`
})



Vue.component('blog-post', {
     props: ['post'],
     template: `
          <div>
               <h3>{{ post.title }}</h3>
               <div v-html="post.content"></div>
          </div>
     `
})

let app = new Vue ({
     el: '#app',
     data: {
          posts: [
               { id: 1, title: 'My Journey with Vue', content: '<p>This is content of post 1</p>' },
               { id: 2, title: 'Blogging with Vue', content: '<p>This is content of post 2</p>' },
               { id: 3, title: 'Why vue is so fun', content: '<p>This is content of post 3</p>' },
          ]
     }
})
