var app = new Vue({
    el: '#app',
    data: {
        lang : 'tr',
        contenttr: {
            title: 'Surlar',
            paragraph1: 'Assos\u2019un iyi korunan kal\u0131nt\u0131lar\u0131 aras\u0131nda yer alan surlar\u0131n deniz y\u00F6n\u00FCndeki b\u00F6l\u00FCmleri 19. y\u00FCzy\u0131l\u0131n ba\u015Flar\u0131na kadar ba\u015Fka kentlerdeki in\u015Fa faaliyetleri i\u00E7in s\u00F6k\u00FClerek ta\u015F\u0131nmas\u0131ndan dolay\u0131 yok olmu\u015Ftur. Sur duvarlar\u0131ndaki \u00F6rg\u00FC farkl\u0131l\u0131\u011F\u0131, de\u011Fi\u015Fik zamanlarda (M.\u00D6. 6.-4. y\u00FCzy\u0131l) in\u015Fa edilmesinden kaynaklanmaktad\u0131r. Bununla birlikte surun, b\u00FCy\u00FCk bir b\u00F6l\u00FCm\u00FC M.\u00D6. 4. y\u00FCzy\u0131lda in\u015Fa edilmi\u015Ftir. Sur duvar\u0131n\u0131n belli yerlerinde farkl\u0131 \u00F6l\u00E7\u00FC ve plana sahip 10 adet kap\u0131 vard\u0131r. Bunlardan sadece bat\u0131 ve do\u011Fudaki ana kap\u0131lar 16 metre y\u00FCksekli\u011Findeki kuleler ile g\u00FC\u00E7lendirilmi\u015Ftir. Ortalama geni\u015Flikleri 3-4 metre aras\u0131nda de\u011Fi\u015Fen surlar sand\u0131k tekni\u011Finde ve har\u00E7s\u0131z olarak in\u015Fa edilmi\u015Ftir.',
            paragraph2: '',
        },
        contenten:{
            title:'City Walls',
            paragraph1: 'Among the best preserved ruins of Assos are the city walls. The maritime sections of the city walls were completely destroyed at the beginning of the 19th century when they were dismantled and reused for construction projects in other cities. The walls were built in a dry masonry style, with cut stones placed together without mortar. There are visible differences in the masonry due to the walls were built in severals periods (6th-4th centuries B.C.), Even so, the majority of the city walls were built in the 4th century B.C. There are 10 gates of various sizes along the length of the wall. The two main gates in the western and eastern areas of the city intersect with their respective highways, and are reinforced by 16-meter high towers. The width of the fortification wall varies between 3 and 4 meters.',
            paragraph2: '',
        },
        links: {
            foto1: {link : 'content/foto-1.jpg', aciklamatr : 'Batı Kapısı hava fotoğrafı', aciklamaen: 'Western Gate aerial view'},
            foto2: {link : 'content/foto-2.jpg', aciklamatr : 'Batı Kapısı', aciklamaen : 'Western gate'},
            foto3: {link : 'content/foto-3.jpg', aciklamatr : 'Charles Texier (1838)', aciklamaen : 'Charles Texier (1838)'},
            foto4: {link : 'content/foto-4.png', aciklamatr : 'Charles Texier (1838)', aciklamaen : 'Charles Texier (1838)'},
            foto3: {link : 'content/foto-5-01.jpg', aciklamatr : 'Charles Texier (1838)', aciklamaen : 'Charles Texier (1838)'},
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