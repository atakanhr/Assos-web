var app = new Vue({
    el: '#app',
    data: {
        lang : 'tr',
        contenttr: {
            title: 'Akropolis',
            paragraph1: 'Kentin en yüksek noktası olan (234 m) akropolis, M.Ö. 7. yüzyıldan itibaren kutsal alan ve savaşlarda ikinci bir sığınma alanı olarak kullanılmıştır. M.Ö. 540/30’da Akropolis üzerine kentin koruyucu tanrıçası Athena için bir tapınak inşa edilmiştir. Bu alan olasılıkla Roma Çağı’na kadar dinsel fonksiyonunu devam ettirmiştir. Roma Çağı’nda bu alanın kullanımı ilişkin arkeolojik kanıtlar mevcut değildir. Bizans Çağı’nda akropolisin çevresi bir sur ile çevrilerek kaleye dönüştürülmüştür. Tepenin daha zayıf olan kuzey ve doğu kenarları beş adet burç ile güçlendirilmiştir. Kuzeydeki kare planlı burcun arkasında iki mekândan oluşan bir sarnıç, ana kaya kesilerek oluşturulmuştur. Üzeri tonoz ile kapatılan ve batıdaki mekanın içerisindeki merdivenle inilen sarnıç 1950’li yıllara kadar köy halkı tarafından kullanılmıştır. Tapınağın çevresindeki Bizans Çağı iç kalesine ait yapılar konaklama ve depolama için kullanılmıştır. Akropolisin batısındaki terasın Erken Osmanlı Dönemi konut alanı olarak kullanıldığını gösteren kanıtlara ulaşılmıştır. 1950’li yıllarda tapınağın kuzeyine bir yel değirmeni inşa edilmiştir.',
            paragraph2: '',
        },
        contenten:{
            title:'Acropolis',
            paragraph1: 'The acropolis, the highest point of the city (234 m), had been used as a sanctuary and a secondary shelter in case of attacks since the 6th century B.C. In 540/30 B.C., a temple was built on the acropolis for Athena, the city"s patron goddess. This area probably maintained its religious function until Roman times, though we do not have enough information to draw any definitive conjectures to the acropolis’ Roman usage. In Byzantine times, a new fortification wall was built and the area became a castle. On the less-steep northern and eastern sides of the Acropolis, five towers were built to strengthen the castle’s defenses. Cisterns were then cut into the bedrock on the edge of the squared tower in the north. These cisterns were adjoined and covered with vaults. A staircase was built to lead down into the western cistern, and each of the others could be accessed through different doors from within. The cisterns were used by the villagers until the 1950s. The Byzantine buildings on the upper part of the acropolis would have been used for accommodation and storage. The walls around the temple indicate the presence of a smaller, inner wall. A windmill was built on the acropolis in the 1950s, but it was short lived.',
            paragraph2: '',
        },
        links: {
            foto1: {link : 'akropolis-content/foto-1.jpg', aciklamatr : 'Akropolis kuzeyden', aciklamaen: 'Acropolis from north'},
            foto2: {link : 'akropolis-content/foto-2.jpg', aciklamatr : 'Akropolis batıdan (Clarke - Bacon - Koldewey 1882)', aciklamaen : 'Acropolis from west (Clarke - Bacon - Koldewey 1882)'},
            foto3: {link : 'akropolis-content/cizim-1.svg', aciklamatr : 'Akropolis Kroki', aciklamaen : 'Sketch of the acropolis'},
        },

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