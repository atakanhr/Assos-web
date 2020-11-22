var app = new Vue({
    el: '#app',
    data: {
        lang : 'tr',
        contenttr: {
            title: '',
            paragraph1: '',
            paragraph2: '',
        },
        contenten:{
            title:'',
            paragraph1: '',
            paragraph2: '',
        },
        links: {
            foto2: {link : 'content/bacon.jpg', aciklamatr : 'Bacon', aciklamaen : 'Bacon'},
            foto4: {link : 'content/koldewey.png', aciklamatr : 'Koldewey', aciklamaen : 'Koldewey'}
        }

    },

    methods:{
        changeLangEn : function(){
            localStorage.lang = 'en'
            this.lang = 'en'
        },
        changeLangTr : function(){
            localStorage.lang = 'tr'
            this.lang = 'tr'
        },
        biggerFont : function(){
            font_size = parseInt($("p").css("font-size"))
            font_size = font_size + 2
            $("p").css("font-size",`${font_size}px`);
        },
        smallerFont : function(){
            font_size = parseInt($("p").css("font-size"))
            font_size = font_size - 2
            $("p").css("font-size",`${font_size}px`);
        }
    },
    mounted(){
        if (localStorage.lang) {
            this.lang = localStorage.lang;
          }else{
              this.lang = 'tr'
          }
    }
})