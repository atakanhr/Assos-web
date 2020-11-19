var app = new Vue({
    el: '#app',
    data: {
        lang : 'tr',
        contenttr: {
            title: 'Batı Kilisesi',
            paragraph1: 'M.S. ge\u00E7 5.-erken 6. y\u00FCzy\u0131lda eski konut b\u00F6lgesinde; surlar\u0131n hemen kenar\u0131na in\u015Fa edilen bazilikal planl\u0131 kilisenin ana mekan\u0131 (naos) iki s\u00FCtun s\u0131ras\u0131 ile \u00FC\u00E7 nefe b\u00F6l\u00FCnm\u00FC\u015Ft\u00FCr. Kiliseye bat\u0131daki merdiven kullan\u0131larak girilmekte ve s\u0131ras\u0131yla avlu (atrium), \u00F6n oda (narteks) ve ana mekana (naos) ula\u015F\u0131lmaktayd\u0131. Vaftiz edilmemi\u015F veya dine inanmayan ki\u015Filerin bekledi\u011Fi narteksin zemini geometrik bezekli mermer levhalarla (opus sectile), naos ve yan neflerin zeminleri ise mozaik ile kapl\u0131d\u0131r. Mozaik \u00FCzerindeki iki yaz\u0131ttan birincisinde: \u201CAlypios yemine sad\u0131k kalarak kutsal yer i\u00E7in yapt\u0131rd\u0131\u201D ikincisinde ise: \u201CBilge Satornilos bunu yeminine uygun olarak yapt\u0131\u201D ifadeleri yer almaktad\u0131r. Mozaik geometrik, bitkisel ve ku\u015F betimlerinden olu\u015Fmaktad\u0131r. Kilisenin kuzey y\u00F6n\u00FCnde teras duvar\u0131na g\u00F6m\u00FClm\u00FC\u015F 11 adet kemerli ni\u015F vard\u0131r. Apsis i\u00E7inde papazlar\u0131n oturdu\u011Fu s\u0131ralardan (synthronon) geriye sadece izler kalm\u0131\u015Ft\u0131r. Apsis \u00F6n\u00FCnde \u00F6nemli ki\u015Filerin girebildi\u011Fi bema b\u00F6l\u00FCm\u00FC mermer korkuluk (templon) ile ana mekandan ayr\u0131lm\u0131\u015Ft\u0131r. Kilisenin duvarlar\u0131 kire\u00E7 ta\u015F\u0131 plakalar ile kaplanm\u0131\u015Ft\u0131r. M.S. 6. y\u00FCzy\u0131lda naosdaki s\u00FCt\u00FCn s\u0131ralar\u0131 kald\u0131r\u0131larak yerlerine duvar \u00F6r\u00FClm\u00FC\u015F ve yan nefler kapal\u0131 odalara d\u00F6n\u00FC\u015Ft\u00FCr\u00FClm\u00FC\u015Ft\u00FCr. Bu evrede ayr\u0131ca kuzeydeki nefin zemini b\u00FCy\u00FCk ta\u015F levhalar ile kaplanm\u0131\u015Ft\u0131r. Mimari \u00F6geler y\u00F6n\u00FCnden olduk\u00E7a zengin olan kilisenin s\u00FCt\u00FCn ba\u015Fl\u0131klar\u0131 gibi b\u00F6l\u00FCmleri ba\u015Fkent Konstantinopolis\u2019den (\u0130stanbul) getirilmi\u015Ftir.',
            paragraph2: '',
        },
        contenten:{
            title:'West Church',
            paragraph1: 'The main building of the church was constructed over the edge of earlier residential walls (late 5th-early 6th century A.D.). The structure was divided into three naves with two column rows. The church is accessed over a stairway to the north of the west atrium. Through the atrium, the anterior room (narthex) and the main room (naos) are accessable. Those who were either unbaptized or simply non-believers waited in the narthex, where the floor was covered with geometrically decorated marble slabs. The floors of the naos and side naves were covered with mosaics. The mosaics contained two inscriptions. The first read “Alypios adhered to the oath and built the holy place”, and the second “Wise Satornilos did this in accordance with his oath”. The mosaic consisted of geometric, vegetative and bird decorations. There are eleven arched niches buried on the terrace wall in the northern area of the church. Only traces of the synthronon (clericle seat bench) remain in the apse. In front of the apse, the bema section, the area of the altar and where clericle people would enter is separated from the main space by a marble railing. In the second phase, dated to the 6th century A.D., the rows of columns in the naos were replaced with walls and the side naves were closed into rooms. During this phase, the floor of the nave in the north was covered with large stone slabs. The columns and capitals of the church were very rich in terms of architectural decoration and have been traced to workshops from the capital, Constantinople (modern-day Istanbul). The walls of the church were covered with limestone slabs.',
            paragraph2: '',
        },
        links: {
            foto1: {link : 'content/cizim-1-01.svg', aciklamatr : 'Clarke - Bacon - Koldewey (1882)', aciklamaen: 'Clarke - Bacon - Koldewey (1882)'},
            foto2: {link : 'content/foto-1-01.jpg', aciklamatr : '', aciklamaen : ''},
            foto3: {link : 'content/foto-2-01.jpg', aciklamatr : '', aciklamaen : ''},
            foto4: {link : 'content/mozaik.jpg', aciklamatr : 'Batı Kilisesi Mozaikleri', aciklamaen : 'West Church Mosaics'},
            foto5: {link : 'content/opussectile.jpg', aciklamatr : 'Batı Kilisesi Opus Sectile', aciklamaen : 'West Church Opus Sectile'},
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