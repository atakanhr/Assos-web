var app = new Vue({
    el: '#app',
    data: {
        lang : 'tr',
        contenttr: {
            title: 'Kent Planı',
            paragraph1: '',
            paragraph2: '',
        },
        contenten:{
            title:'Urban plan',
            paragraph1: '',
            paragraph2: '',
        },
        links: {
            foto1: {link : 'content/agora.jpg', aciklamatr : 'Agora', aciklamaen: 'Agora'},
            foto2: {link : 'content/athena.jpg', aciklamatr : 'Athena Tapınağı', aciklamaen : 'Athena Temple'},
            foto3: {link : 'content/ayazma.jpg', aciklamatr : 'Ayazma Kilisesi', aciklamaen : 'Ayazma Church'},
            foto4: {link : 'content/batı kapısı.jpg', aciklamatr : 'Batı Kapısı', aciklamaen : 'West Gate'},
            foto5: {link : 'content/batı kilisesi.jpg', aciklamatr : 'Batı Kilisesi', aciklamaen : 'West Church'},
            foto6: {link : 'content/cami.jpg', aciklamatr : 'Cami', aciklamaen : 'Mosque'},
            foto7: {link : 'content/cizim-1.svg', aciklamatr : '', aciklamaen : ''},
            foto8: {link : 'content/güney teras alanı.jpg', aciklamatr : 'Güney Teras Alanı ', aciklamaen : 'South Terrace Area'},
            foto9: {link : 'content/gymnasion.jpg', aciklamatr : 'Gymnasion', aciklamaen : 'Gymnasion'},
            foto10: {link : 'content/konutlar.jpg', aciklamatr : 'Konutlar', aciklamaen : 'Houses'},
            foto11: {link : 'content/köprü.jpg', aciklamatr : 'Köprü', aciklamaen : 'Bridge'},
            foto12: {link : 'content/liman.jpg', aciklamatr : 'Liman', aciklamaen : 'Harbor'},
            foto13: {link : 'content/nekropolis.jpg', aciklamatr : 'Nekropolis', aciklamaen : 'Necropolis'},
            foto14: {link : 'content/tiyatro.jpg', aciklamatr : 'Tiyatro', aciklamaen : 'Theater'},
            foto15: {link : 'content/tarih.jpg', aciklamatr : '', aciklamaen : ''},
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