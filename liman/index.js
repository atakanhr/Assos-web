var app = new Vue({
    el: '#app',
    data: {
        lang : 'tr',
        contenttr: {
            title: 'Liman',
            paragraph1: 'Assos\u2019un ilk kurulu\u015Funda dalgak\u0131ranlarla olu\u015Fturulan iki limandan biri bug\u00FCn de kullan\u0131lmaktad\u0131r. Su alt\u0131nda duvarlar\u0131 g\u00F6r\u00FClen birinci liman do\u011Fudad\u0131r. Bu liman\u0131n gerisinde bir su kayna\u011F\u0131 ve ayr\u0131ca gemilerin bak\u0131m ve onar\u0131mlar\u0131n\u0131n yap\u0131ld\u0131\u011F\u0131 Roma D\u00F6nemi\u2019ne ait k\u00FC\u00E7\u00FCk bir tersane vard\u0131r. Osmanl\u0131 D\u00F6nemi\u2019nde bat\u0131dan esen r\u00FCzgarlarla dolan liman\u0131n s\u0131\u011Fla\u015Fmas\u0131 y\u00FCz\u00FCnden sadece k\u00FC\u00E7\u00FCk yelkenliler demir atabilmi\u015Ftir. 19. y\u00FCzy\u0131l sonlar\u0131na kadar Edremit k\u00F6rfezinde seyir eden gemiler i\u00E7in kuzey r\u00FCzgarlar\u0131n\u0131n esti\u011Fi mevsimlerde en korunakl\u0131 liman Behram liman\u0131yd\u0131. Ayn\u0131 y\u00FCzy\u0131l\u0131n sonlar\u0131nda deri i\u015Flemesinde kullan\u0131lan me\u015Fe palamudu \u00F6nemli bir ihra\u00E7 \u00FCr\u00FCn\u00FC haline gelmi\u015Ftir. \u00C7anakkale\u2019de yo\u011Fun olarak yeti\u015Fen me\u015Fe palamudunun ihracat\u0131n\u0131 sa\u011Flamak \u00FCzere Behram liman\u0131 iyile\u015Ftirilerek g\u00FCmr\u00FCk binas\u0131 ve depolar in\u015Fa edilmi\u015Ftir. Marmara b\u00F6lgesindeki 1. s\u0131n\u0131f iskelelerden biri olan Behram \u0130skelesi, 1950\u2019li y\u0131llardan sonra bu \u00F6zelli\u011Fini kaybederek bal\u0131k\u00E7\u0131 bar\u0131na\u011F\u0131 olarak hizmet vermeye ba\u015Flam\u0131\u015Ft\u0131r. Liman son olarak 1980\u2019li y\u0131llarda restore edilmi\u015F ve turizmin geli\u015Fmesiyle buradaki yap\u0131lar otel ve restoranlara d\u00F6n\u00FC\u015Fm\u00FC\u015Ft\u00FCr.',
            paragraph2: '',
        },
        contenten:{
            title:'Harbor',
            paragraph1: 'One of the two original harbors from Assos is still in use today. The first harbor has walls which are still visible underwater in the east. Behind this port is a water source and the shipyard for the routine maintenance and repair of the ancient ships. Today, the shipyard is no longer visible due to the unfortunate constructions of unauthorized structures. Until the end of the 19th century, Assos was the most protected port for ships traveling in the Gulf of Edremit during the periods of intense northern winds. Because of this, it was used as an active international port until the 1950s. In the late 19th century, acorns became an important export for the processing of leather so large acorn warehouses and customs buildings were built in the harbor. The pier of Behram was considered a first-class pier in the Marmara region until 1950s, after which the acorn stores were transformed into hotels, and Kad\u0131rga Bay, just behind the cape to the east of the harbor, became a booming tourist area. The last restoration was done in the 1980s and the old buildings were changed into hotels and restaurants.',
            paragraph2: '',
        },
        links: {
            foto4: {link : 'content/foto-4.jpg', aciklamatr : 'Limandaki yapılar (1975)', aciklamaen: 'Buildings at port (1975)'},
            foto1: {link : 'content/foto-1.jpg', aciklamatr : 'Clarke - Bacon - Koldewey (1882)', aciklamaen : 'Clarke - Bacon - Koldewey (1882)'},
            foto2: {link : 'content/foto-2.jpg', aciklamatr : 'Clarke (1881)', aciklamaen : 'Clarke (1881)'},
            foto3: {link : 'content/foto-3.jpg', aciklamatr : '1975', aciklamaen : '1975'},
            foto3: {link : 'content/foto-5.jpg', aciklamatr : 'Assos limanları hava fotoğrafı', aciklamaen : 'Aerial view of Assos harbors'},

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