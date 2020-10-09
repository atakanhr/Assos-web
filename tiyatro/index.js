var app = new Vue({
    el: '#app',
    data: {
        lang : 'tr',
        contenttr: {
            title: 'Assos Tiyatrosu',
            paragraph1: 'Agoran\u0131n g\u00FCneyindeki do\u011Fal kayan\u0131n yamac\u0131na yaslanan tiyatro, at nal\u0131 plan\u0131 ile tipik bir Yunan tiyatrosudur. Yakla\u015F\u0131k 5.000 ki\u015Filik kapasiteye sahip yap\u0131n\u0131n y\u00FCr\u00FCme yollar\u0131na (diazoma) bat\u0131 ve do\u011Fu y\u00F6nlerdeki tonozlu giri\u015Flerden ula\u015F\u0131lmaktad\u0131r. M.\u00D6. 4. y\u00FCzy\u0131l\u0131n sonlar\u0131nda in\u015Fa edilen tiyatro, Roma D\u00F6nemi\u2019nde baz\u0131 eklentilerle kullan\u0131lmaya devam edilmi\u015Ftir. Roma D\u00F6nemi\u2019nde (M.S. 2. y\u00FCzy\u0131l) gladyat\u00F6r ve hayvan m\u00FCcadeleleri nedeniyle seyircileri korumak i\u00E7in ilk oturma s\u0131ralar\u0131 kesilerek bunlar\u0131n yerine korkuluklar eklenmi\u015Ftir. Hayvan m\u00FCcadeleleri s\u0131ras\u0131nda ah\u015Faptan ve daha y\u00FCksek ikinci bir korkuluk, orkestra \u00E7evresindeki yuvalara monte edilmi\u015Ftir. Roma \u0130mparatorluk D\u00F6nemi\u2019nde baz\u0131 oturma s\u0131ralar\u0131 kentte faaliyet g\u00F6steren ta\u015F i\u015Fletmecileri, demirciler ve dericiler gibi meslek birliklerine kal\u0131c\u0131 olarak ayr\u0131lm\u0131\u015Ft\u0131r. Meslek birlikleri d\u0131\u015F\u0131nda en \u00FCst oturma s\u0131ralar\u0131ndan biri de Serapis dini mensuplar\u0131 i\u00E7indir. Yap\u0131daki ya\u011Fmur sular\u0131n\u0131n tahliyesi orkestray\u0131 saran ta\u015F kanallar\u0131n yard\u0131m\u0131 ile yap\u0131lm\u0131\u015Ft\u0131r. Orkestran\u0131n g\u00FCneyinde \u00F6n\u00FCnde proskene (\u00F6n sahne) olan iki katl\u0131 sahne binas\u0131 vard\u0131r. Tiyatroda sadece proskenenin \u00F6n\u00FCndeki yar\u0131m s\u00FCtunlar mermerden di\u011Fer b\u00F6l\u00FCmleri ise andezitten yap\u0131lm\u0131\u015Ft\u0131r. 1990\u2019l\u0131 y\u0131llardaki restorasyon \u00E7al\u0131\u015Fmalar\u0131nda eksik b\u00F6l\u00FCmler (kemer ve oturma yerleri) beton ile tamamlanm\u0131\u015Ft\u0131r.\r\n',
            paragraph2: '',
        },
        contenten:{
            title:'Theater of Assos',
            paragraph1: 'The horseshoe plan theater, typical of Greek cities, leans into the natural rock hillside to the south of the agora and holds a capacity of roughly 5,000 people. The theater, which was built at the end of the 4th century B.C., continued to be used into the Roman Period. The walkways of the building were accessed through vaulted entrances to the east and west. During the Roman period, the front row of seats was shielded by walls of stone and wood to protect the audience from the frenzy of gladiators and wild animals. The wooden railing was probably placed around the orchestra during the animal struggles. Inscriptions found on the stone seats convey that the theater was divided into distinct seating sections for each of three different occupational groups: stone workers, blacksmiths and leathermakers. To prevent flooding, the theater was equipped with stone channels that surounded the orchestra and enabled rain water to drain from the area. In the south of the orchestra is a two-story stage building with three rooms and a proscene, the front area of the theater stage. In the theater, half of the columns in front of the proscene were marble and the other half were carved from andesite. Restoration work began in the 1990s to replace the theatre\u2019s missing elements (arches and several seats) using concrete.',
            paragraph2: '',
        },
        links: {
            foto1: {link : 'content/tiyatro.jpg', aciklamatr : 'Sahne', aciklamaen: 'Scene'},
            foto2: {link : 'content/tiyatro-2.jpg', aciklamatr : '', aciklamaen : ''},
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