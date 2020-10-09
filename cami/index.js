var app = new Vue({
    el: '#app',
    data: {
        lang : 'tr',
        contenttr: {
            title: 'Erken Osmanlı Camisi',
            paragraph1: 'Cami akropolisin kuzey kenar\u0131ndaki kayal\u0131\u011F\u0131n \u00FCzerinde yer almaktad\u0131r. Minaresi olmayan 17,50x15,60 m \u00F6l\u00E7\u00FClerindeki caminin duvarlar\u0131 ortalama 1,60 m\u2019dir. Yap\u0131n\u0131n in\u015Fas\u0131nda antik kal\u0131nt\u0131lar\u0131n ta\u015Flar\u0131 kullan\u0131lm\u0131\u015Ft\u0131r. Son cemaat b\u00F6l\u00FCm\u00FCndeki iki kemeri ta\u015F\u0131yan mermer ba\u015Fl\u0131k ve s\u00FCtunlar agoradaki yap\u0131lara aittir. \u00DCzerinde Yunanca yaz\u0131t bulunan ve ha\u00E7 resimleri kaz\u0131nm\u0131\u015F mermer kap\u0131 \u00E7er\u00E7evesi ise Skamandros\u2019daki (Ezine yak\u0131n\u0131nda) bir kiliseden getirilmi\u015Ftir. Kap\u0131n\u0131n \u00FCzerindeki kemerin i\u00E7indeki d\u00F6rtgen ni\u015Fin yap\u0131 kitabesi i\u00E7in yap\u0131ld\u0131\u011F\u0131 tahmin edilmektedir. Caminin kare planl\u0131 harim k\u0131sm\u0131 tu\u011Fladan yap\u0131lm\u0131\u015F sekizgen kasnak \u00FCzerine oturan kubbe ile kapat\u0131lm\u0131\u015Ft\u0131r. Harimde, k\u0131ble (g\u00FCney) duvar\u0131 hari\u00E7 olmak \u00FCzere, di\u011Fer \u00FC\u00E7 y\u00F6nde 0,95x1,49 m \u00F6l\u00E7\u00FClerinde birer pencere ve bunlar\u0131n \u00FCzerinde tu\u011Fladan \u00F6r\u00FClm\u00FC\u015F ni\u015Fler yer al\u0131r. Kire\u00E7 harc\u0131 ile s\u0131val\u0131 harim duvarlar\u0131nda boya ve kaz\u0131ma ile yap\u0131lm\u0131\u015F gemi tasvirleri ile geometrik ve bitkisel bezeklerin 19. y\u00FCzy\u0131lda yap\u0131ld\u0131\u011F\u0131 tahmin edilmektedir. K\u0131ble duvar\u0131nda tu\u011Fla ile olu\u015Fturulan \u00E7ok derin olmayan mihrap, geometrik ve bitkisel bezeklerden olu\u015Fan al\u00E7\u0131 levhalar ile kaplanm\u0131\u015Ft\u0131r. Caminin, b\u00F6lgenin 1362 y\u0131l\u0131nda I. Murad H\u00FCdavendigar taraf\u0131ndan Osmanl\u0131 topraklar\u0131na kat\u0131lmas\u0131ndan hemen sonra, 14. Y\u00FCzy\u0131l\u2019\u0131n ikinci yar\u0131s\u0131nda in\u015Fa edildi\u011Fi tahmin edilmektedir. Behram K\u00F6y d\u0131\u015F\u0131nda Ezine, Kemalli K\u00F6y\u00FC ve Tuzla\u2019da da benzer planl\u0131 camiler vard\u0131r. Deprem ve di\u011Fer do\u011Fal nedenlere ba\u011Fl\u0131 olarak farkl\u0131 zamanlarda hasar g\u00F6ren cami en son 2007 y\u0131l\u0131nda olmak \u00FCzere bir\u00E7ok kez Vak\u0131flar Genel M\u00FCd\u00FCrl\u00FC\u011F\u00FC taraf\u0131ndan onar\u0131lm\u0131\u015Ft\u0131r.\r\n',
            paragraph2: '',
        },
        contenten:{
            title:'Early Ottoman Mosque',
            paragraph1: 'The mosque is located on a rock at the northern edge of the acropolis. The mosque has no minaret. The walls of the mosque measure 17.50 x 15.60 meters, and have an average height of 1.60 meters. Stones from the ancient buildings were reused for the construction of the mosque. The marble cap and columns featuring the two arches in the last congregation section originally belonged to structures from the agora. The marble door frame with Greek inscriptions and engraved cross was brought from a Byzantine church in Skamandros (near Ezine). It is suspected that the rectangular niche inside the arch above the door was intended for the building inscription. The square section of the mosque is covered by a dome resting on an octagonal structure made of bricks. In the main room (harim), except for the south (kibla) wall, there are windows of 0.95 x1.49 meters and three niches built of brick. In the 19th century, painted graffities of ships, geometric and floral designs decorated the harim walls of lime mortar and plaster. It is estimated that the mosque was built in the second half of the 14th century, immediately after the region was added to the Ottoman lands by Murad H\u00FCdavendigar I in 1362. There are similar mosques in Ezine, Kemalli Village and Tuzla besides Behram Village. The mosque, which was damaged at several different times due to earthquakes and other natural causes, was repaired by the General Directorate of Foundations on a number of occasions, most recently in 2007.\r\n',
            paragraph2: '',
        },
        links: {
            foto6: {link : 'content/cizim-1.svg', aciklamatr : '', aciklamaen: ''},
            foto1: {link : 'content/foto-1.jpg', aciklamatr : 'Caminin kuzeyden görünüşü  - Clarke - Bacon - Koldewey (1882)', aciklamaen : 'Mosque from north - Clarke - Bacon - Koldewey (1882)'},
            foto2: {link : 'content/foto-2.jpg', aciklamatr : 'Graffiti', aciklamaen : 'Graffiti'},
            foto3: {link : 'content/foto-3.jpg', aciklamatr : 'Graffiti', aciklamaen : 'Graffiti'},
            foto4: {link : 'content/cizim-2.svg', aciklamatr : '', aciklamaen: ''},
            foto5: {link : 'content/cizim-3.svg', aciklamatr : '', aciklamaen: ''},
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