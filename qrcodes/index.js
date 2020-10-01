var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        f_names: ["agora", "akropolis", "arastirma-tarihi", "asagi-agora", "athena-tap", "batı-kilisesi", "Boulenterion", "Erken Osmanlı Camisi", "guney-stoastoa", "gymnasion", "kent-planı", "kuzey-stoa", "liman", "nekropolis", "sur", "tarihce", "tiyatro", "unluler", "xenedochion"],
        basliklar_tr:["Agora", "Akropolis","Araştırma Tarihi", "Güney Teras Alanı","Athena Tapınağı", "Batı Kilisesi","Bouleuterion","Cami","Güney Stoastoa ve Hamam","Gymnasion","Assos Şehir Planı","Liman","Kuzey Stoa","Nekropolis","Sur","Assos Tarihi","Assos Tiyatrosu","Assosun Ünlüleri","Xenedochion"],
        basliklar_en:["Agora", "Acropolis","Research History of Assos","South Terrace Area", "Athena Temple","West Church","Bouleuterion","Early Ottoman Mosque", "South Stoa and Bath", "Gymnasion","Assos City Plan","Harbor","North Stoa","Necropolis","City Walls","History of Assos","Assos Theater","Famous people of Assos","Xenedochion"],
        conc : [],
        doc_names:[],
        config: {
            url: "",
            hostname: "",
            protocol: "",
            len: 0,
        },
        qr_paths: [],
        qr_links: [],
        qr_boy : 100,
        api_str:"https://api.qrserver.com/v1/create-qr-code/?data=https://[URL-encoded-text]&size=[pixels]x[pixels]",
        error :  false

    },
    created: function () {
        // `this` points to the vm instance
        this.getConfig()
        this.produceLinks()
    },

    methods: {

        getConfig: function () {
            this.config.url = window.location.href
            this.config.hostname = window.location.hostname
            this.config.protocol = window.location.protocol.replace(":", "")
            this.config.len = this.f_names.length
        },
        produceLinks: function () {
            link = this.config.hostname.concat("/")
            this.f_names.forEach(element => this.qr_paths.push(link.concat(element)));
        },

        produce_qr : function () {
            if(this.qr_boy < 10 || this.qr_boy > 1000){
                error = true
            }
            this.qr_paths.forEach(element =>{
                const link = this.api_str.replace("[URL-encoded-text]",element).replaceAll("[pixels]",this.qr_boy)
                this.qr_links.push(link)
            })
            this.merge()
        },
        merge : function (){
            for(let i = 0 ; i<this.config.len ; i++){
                var obj = {
                    img : this.qr_links[i],
                    tr : this.basliklar_tr[i],
                    en : this.basliklar_en[i]
                }
                this.conc.push(obj)
                console.log(this.conc)
            }
        }


    }
})