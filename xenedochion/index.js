var app = new Vue({
    el: '#app',
    data: {
        lang : 'tr',
        contenttr: {
            title: 'Xenodochion',
            paragraph1: 'Hellenistik \u00C7a\u011F sur duvar\u0131n\u0131n arkas\u0131ndaki Ksenodokhion (misafirhane\/han) M.S. 5. y\u00FCzy\u0131lda (Bizans \u00C7a\u011F\u0131) in\u015Fa edilmi\u015Ftir. Yap\u0131n\u0131n en b\u00FCy\u00FCk mekan\u0131nda yemekhane olarak kullan\u0131lan asma katta d\u00F6rt b\u00FCy\u00FCk mermer masa bulunmu\u015Ftur. Yap\u0131da depo , ocakl\u0131 br mutfak ve f\u0131r\u0131n gb farkl\u0131 lev olan mekanlar vard\u0131r. Yemekhanenin yan\u0131nda oturma alan\u0131 olarak kullan\u0131lan odan\u0131n kuzeyinde oturma banklar\u0131 le ortas\u0131nda bir masa yer almaktad\u0131r. Bu odada \u00E7e\u015Fitli aletler, hassas terazi a\u011F\u0131rl\u0131klar\u0131, oyun ta\u015Flar\u0131 ve di\u011Fer ba\u015Fka ki\u015Fisel e\u015Fyalar bulunmu\u015Ftur. Oturma odas\u0131n\u0131n g\u00FCneyindeki merdvenden girilen mek\u00E2n terzi\/dericilik at\u00F6lyesi olarak kullan\u0131lm\u0131\u015Ft\u0131r. At\u00F6lyenin yan\u0131nda sarn\u0131c\u0131 olan bir avlu ve daha bat\u0131da olas\u0131l\u0131kla yatakhane olarak kullan\u0131lan mek\u00E2n vard\u0131r. Misafirhanenin kuzeyinde k\u0131smen ana cadde \u00FCzerine oturan \u015Fapelde (k\u00FC\u00E7\u00FCk kilise) dini t\u00F6renlerde kullan\u0131lan ta\u015F masa (altar), apsisin \u00F6n\u00FCnde \u00F6zg\u00FCn yerinde durmaktad\u0131r. Ksenodokhion erken 8. y\u00FCzy\u0131la kadar kullan\u0131lm\u0131\u015Ft\u0131r.',
            paragraph2: '',
        },
        contenten:{
            title:'Xenodochion',
            paragraph1: 'The xenodochion (guest house) behind the Hellenistic city wall was built in the 5th century A.D. (Byzantine Age). The mezzanine of the largest space in the building complex was used as a dining room. Four large marble tables were found here. In this structure is a storeroom, a kitchen and an oven. Right next to the dining hall is a seating area with benches and a center table. Various equipments - precision balance weights, playstones and other personal items have been found here. The stars to the south of this place lead to a workshop. Next to the workshop s a courtyard with a cistern, and further to the west are probably the rooms of the dormitory. To the north of the guest house there\'s a chapel with a stone altar used for religious ceremonies found in its original position in front of the apse. The xenodochion was used until early 8th century A.',
            paragraph2: '',
        },
        links: {
            foto1: {link : 'content/foto-4.jpg', aciklamatr : 'Mermer masa', aciklamaen: 'Marble table'},
            foto2: {link : 'content/foto-1.jpg', aciklamatr : 'Şapelde bulunan haç', aciklamaen : 'Cross found in Chapel'},
            foto3: {link : 'content/foto-2.jpg', aciklamatr : 'Roma dönemi aslanlı gemme', aciklamaen : 'Roman Gemme with lion'},
            foto4: {link : 'content/foto-3.jpg', aciklamatr : 'Kandil', aciklamaen : 'Lamp'}
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