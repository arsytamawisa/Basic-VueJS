var app = new Vue ({
     el: '#app',
     data: {
          phone: '+62',
          message: '',
          img: 'assets/img/koala.jpg',
          link: 'https://www.vuejs.org',
          textStyle: 'color:hotpink; font-weight:bold; font-size:20px'
     },
     methods: {
          alert: function() {
               alert('This button has been clicked.')
          },
          clear: function() {
               this.message = ''
          },
          pressKey: function(event) {
               event = (event) ? event : window.event;
               const keyCode = (event.which) ? event.which : event.keyCode;

               if ((keyCode > 31 && (keyCode < 48 || keyCode > 57)) && keyCode !== 46) {
                    alert('You can only input numbers!')
                    this.phone = '+62'
               }
          }
     }
})
