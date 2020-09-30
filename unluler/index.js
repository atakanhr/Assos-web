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
            foto1: {link : 'content/Aristoteles.jpg', aciklamatr : '', aciklamaen: ''},
            foto2: {link : 'content/kleanthes.jpg', aciklamatr : '', aciklamaen : ''},
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