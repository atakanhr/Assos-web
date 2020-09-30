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
            foto1: {link : 'content/cizim-1-01.svg', aciklamatr : '', aciklamaen: ''},
            foto2: {link : 'content/foto-1-01.jpg', aciklamatr : '', aciklamaen : ''},
            foto3: {link : 'content/foto-2-01.jpg', aciklamatr : '', aciklamaen : ''},
            foto4: {link : 'content/foto-3-01.jpg', aciklamatr : '', aciklamaen : ''}
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