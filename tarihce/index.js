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
            foto1: {link : 'content/Aristoteles.jpg', aciklamatr : 'Aristoteles', aciklamaen: 'Aristoteles'},
            foto2: {link : 'content/bacon.jpg', aciklamatr : 'Bacon', aciklamaen : 'Bacon'},
            foto3: {link : 'content/kleanthes.jpg', aciklamatr : 'Kleanthes', aciklamaen : 'Kleanthes'},
            foto4: {link : 'content/Koldewey.png', aciklamatr : 'Koldewey', aciklamaen : 'Koldewey'}
        }

    },

    methods:{
        changeLangEn : function(){
            this.lang = 'en'
        },
        changeLangTr : function(){
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
    }
})