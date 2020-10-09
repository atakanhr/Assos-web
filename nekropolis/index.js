var app = new Vue({
    el: '#app',
    data: {
        lang : 'tr',
        contenttr: {
            title: 'Nekropolis',
            paragraph1: 'Nekropolis M.\u00D6. 7. y\u00FCzy\u0131l\u0131n ortalar\u0131ndan, M.S. 6. y\u00FCzy\u0131l\u0131n sonuna kadar kesintisiz olarak kullan\u0131lm\u0131\u015Ft\u0131r (1). M.\u00D6. 6. y\u00FCzy\u0131l\u0131n sonlar\u0131na kadar yeti\u015Fkinler yak\u0131larak (kremasyon) k\u00FClleri pi\u015Fmi\u015F toprak veya metal vazolar i\u00E7erisine konulmu\u015Ftur (2). \u00C7ocuklar ise hi\u00E7bir \u00E7a\u011Fda yak\u0131lmam\u0131\u015Ft\u0131r. M.\u00D6. 6. y\u00FCzy\u0131l\u0131n sonlar\u0131ndan itibaren normal g\u00F6m\u00FC gelene\u011Finin (inhumasyon) yayg\u0131nla\u015Fmas\u0131 ile \u00F6l\u00FCler pithos (b\u00FCy\u00FCk k\u00FCp), sand\u0131k ve lahit (3) i\u00E7ine g\u00F6m\u00FClm\u00FC\u015Flerdir. Hellenistik \u00C7a\u011F\u2019da (M.\u00D6. 4. y\u00FCzy\u0131l\u0131n son \u00E7eyre\u011Fi) yakma (kremasyon) gelene\u011Fi yeniden pop\u00FCler olmu\u015Ftur. Bu d\u00F6nemde \u00E7evresi duvar ile \u00E7evrilmi\u015F aile mezarlar\u0131 ortaya \u00E7\u0131km\u0131\u015Ft\u0131r. Bunun en \u00FCnl\u00FCs\u00FC Larichos ailesine aittir (4). Mezar sahiplerinin isimleri k\u00FCp \u015Feklindeki ta\u015Flara (5) yaz\u0131larak mezarlar\u0131n \u00FCzerine konmu\u015Ftur. Roma \u00C7a\u011F\u0131\u2019nda ana caddenin kuzeyinde iki yeni cadde olu\u015Fturularak girlandl\u0131 lahitler (6) ve an\u0131tsal mezarlar (7) in\u015Fa edilmi\u015Ftir. An\u0131t mezarlar\u0131n en ihti\u015Faml\u0131s\u0131 Publius Varius isimli Roma vatanda\u015F\u0131na ait olup, bat\u0131 kap\u0131s\u0131n\u0131n yan\u0131na in\u015Fa edilmi\u015Ftir. Romal\u0131 yazar Plinius (M.S. 23-79) eserinde Assos lahitlerini \u201CSarcophagus\u201D (et yiyen) olarak tan\u0131mlam\u0131\u015Ft\u0131r. Bu sayede \u00FCn kazanan Assos lahitleri L\u00FCbnan M\u0131s\u0131r, Yunanistan ve \u0130talya\u2019ya ihra\u00E7 edilmi\u015Ftir.',
            paragraph2: '',
        },
        contenten:{
            title:'Necropolis',
            paragraph1: 'The Necropolis was used continuously from the middle of the 7th century B.C. until the end of the 6th century A.D. (1). Until the Early Byzantine Age, adults were cremated and their ashes were placed in terracotta or metal vases (2). Children were not cremated at any age. With the spread of normalized burial tradition (inhumation) at the end of the 6th century B.C., the deceased were buried in either a pithos (large jug), chest or sarcophagus (3). In the Hellenistic age (the last quarter of the 4th century B.C.), the tradition of cremation regained popularity. During this period, family graves were surrounded by walls. The most famous of these tombs belonged to the Larichos family (4). The names of the grave owners were often written on cubic stones (5) and placed on the graves. In the Roman period, two new roads were built to the north of the main street, where sarcophagi (6) and monumental tombs (7) were added. The most famous of these newer tombs belonged to the Roman citizen Publius Varius, and was built next to the western gate. The Roman writer Plinius (A.D. 23-79) claimed that the Assos sarcophagi were effective enough to decompose a body within 40 days, so that only the teeth remained. As a result, the Assos sarcophagi became famous and were exported to Lebanon, Egypt, Greece and Italy.',
            paragraph2: '',
        },
        links: {
            foto1: {link : 'content/cizim-1.jpg', aciklamatr : '1', aciklamaen: '1'},
            foto2: {link : 'content/foto-2.jpg', aciklamatr : '', aciklamaen : ''},
            foto3: {link : 'content/foto-22.jpg', aciklamatr : '2', aciklamaen : '2'},
            foto4: {link : 'content/foto-3.jpg', aciklamatr : '3', aciklamaen : '3'},
            foto5: {link : 'content/foto-4.jpg', aciklamatr : '4', aciklamaen : '4'},
            foto6: {link : 'content/foto-55.jpg', aciklamatr : '5', aciklamaen : '5'},
            foto7: {link : 'content/foto-6.jpg', aciklamatr : '', aciklamaen : ''},
            foto8: {link : 'content/foto-66.jpg', aciklamatr : '6', aciklamaen : '6'},
            foto9: {link : 'content/foto-77.jpg', aciklamatr : '7', aciklamaen : '7'},
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
    },mounted(){
        if (localStorage.lang) {
            this.lang = localStorage.lang;
          }else{
              this.lang = 'tr'
          }
    }
})