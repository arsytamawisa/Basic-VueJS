var app = new Vue ({
     el: '#app',
     data: {
          'fruit': '',
          'fruits': ['banana', 'apple', 'orange'],
          'skills': [
               { language: 'HTML', version: '5', framework: 'Bootstrap'},
               { language: 'CSS', version: '3', framework: 'Bootstrap'},
               { language: 'PHP', version: '7+', framework: 'Laravel'},
               { language: 'PHP', version: '7+', framework: 'Lumen'},
               { language: 'PHP', version: '7+', framework: 'Codeigniter'},
               { language: 'Javascript', version: '6+', framework: 'VueJS'},
               { language: 'Javascript', version: '6+', framework: 'ExpressJS'},
               { language: 'Javascript', version: '6+', framework: 'NodeJS'},
          ],
          'programmer': {
               firstName: 'Wisa',
               lastName: 'Arsytama',
               age: 23,
          }
     },
     methods: {
          addFruit: function() {
               this.fruits.push(this.fruit)
               this.fruit = ''
          },
          removeFruit: function(index) {
               this.fruits.splice(index, 1);
          },
     }
})
