
export default {
    data(){
        return {

        }
    },
    methods:{
        callApi(post,url,dataObj){
            try{
                return axios({
                    method: post,
                    url: url,
                    data: dataObj
                });
            }
            catch (e) {
                return e.response;
            }
        },
        i(desc,title="Hey") {
            this.$Notice.info({
                title:title ,
                desc:desc
            });
        },
        s(desc,title="Hey") {
            this.$Notice.success({
                title:title ,
                desc:desc
            });
        },
        w(desc,title="Opps!") {
            this.$Notice.warning({
                title:title ,
                desc:desc
            });
        },
        e(desc,title="Opps!") {
            this.$Notice.error({
                title:title ,
                desc:desc
            });
        },
        swr(desc="Something went wrong, Please try again!!",title="Opps!") {
            this.$Notice.info({
                title:title ,
                desc:desc
            });
        }
    }
}
