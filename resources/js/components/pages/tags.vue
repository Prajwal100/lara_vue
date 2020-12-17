<template>
    <div>
        <div class="content">
            <div class="container">
                <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
                <div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
                    <p class="_title0">Tags <Button shape="circle" icon="md-add" @click="addModel=true">Add tags</Button></p>

                    <div class="_overflow _table_div">
                        <table class="_table">
                            <!-- TABLE TITLE -->
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Created</th>
                                <th>Action</th>
                            </tr>
                            <!-- TABLE TITLE -->


                            <!-- ITEMS -->
                            <tr v-for="(tag,i) in tags" :key="i" v-if="tags.length">
                                <td>{{tag.id}}</td>
                                <td class="_table_name">{{tag.name}}</td>
                                <td>{{tag.created_at}}</td>
                                <td>
                                    <Button type="primary" size="small" shape="circle">Edit</Button>
                                    <Button type="error" size="small"  shape="circle">Delete</Button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

<!--              Tag modal-->
                <Modal
                    v-model="addModel"
                    title="Add Tags"
                    :mask-closable="false"
                    >
                    <Input v-model="data.tagName" placeholder="Enter tag name..." />
                    <div slot="footer">
                        <Button type="default" size="small" @click="addModel=false">Close</Button>
                        <Button type="success" size="small" @click="addTag" >{{isAdding ? 'Adding' : 'Add Tag'}}</Button>
                    </div>
                </Modal>

            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data(){
            return{
                data:{
                    tagName:'',
                },
                addModel:false,
                isAdding:false,
                tags:[],
            }
        },
        methods:{
            async addTag(){
                if(this.data.tagName.trim()=='') return this.e('Tag name is required');
                const res=await this.callApi('post','app/create_tags',this.data)
                console.log(res);
                if(res.status===201){
                    this.s('Tags successfully added')
                    this.addModel=false
                }
                else{
                    this.swr()
                }
            },

        },
        async created(){
            const res=await this.callApi('get','app/get_tags')
            console.log(res);
            if(res.status==200){
                this.tags=res.data
            }
            else{
                this.swr()
            }
        }
    }
</script>
