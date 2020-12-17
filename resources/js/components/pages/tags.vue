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
                                    <Button type="primary" size="small" shape="circle" @click="showEditModal(tag)">Edit</Button>
                                    <Button type="error" size="small"  shape="circle" @click="showDeletingModal(tag,i)" :loading="tag.isDeleting">Delete</Button>
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
                <!--              Edit Tag modal-->
                <Modal
                    v-model="editModal"
                    title="Edit Tags"
                    :mask-closable="false"
                    >
                    <Input v-model="editData.tagName" placeholder="Edit tag name..." />
                    <div slot="footer">
                        <Button type="default" size="small" @click="editModal=false">Close</Button>
                        <Button type="success" size="small" @click="editTag" >{{isAdding ? 'editing' : 'Edit Tag'}}</Button>
                    </div>
                </Modal>

<!--                Delete modal-->
                <Modal v-model="showDeleteModal" width="360">
                    <p slot="header" style="color:#f60;text-align:center">
                        <Icon type="ios-information-circle"></Icon>
                        <span>Delete confirmation</span>
                    </p>
                    <div style="text-align:center">
                        <p>Are you sure you want to delete?</p>
                    </div>
                    <div slot="footer">
                        <Button type="error" size="large" long :loading="isDeleting" :disabled="isDeleting" @click="deleteTag">Delete</Button>
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
                editModal:false,
                editData:{
                    tagName:'',
                },
                isDeleting:false,
                showDeleteModal:false,
                deleteItem:{},
                deletingIndex:-1
            }
        },
        methods:{
            async addTag(){
                if(this.data.tagName.trim()=='') return this.e('Tag name is required');
                const res=await this.callApi('post','app/create_tags',this.data)
                if(res.status===201){
                    this.s('Tags successfully added')
                    this.addModel=false
                    this.data.tagName=''
                }
                else{
                    if(res.status==422){
                        this.swr();
                    }
                    else{
                        this.swr();
                    }
                }
            },
            async editTag(){
                if(this.editData.tagName.trim()=='') return this.e('Tag name is required');
                const res=await this.callApi('post','app/edit_tags',this.data)
                if(res.status===200){
                    this.s('Tags successfully edited')
                    this.editModal=false
                }
                else{
                    if(res.status==422){
                        this.swr();
                    }
                    else{
                        this.swr();
                    }
                }


            },

            showEditModal(tag){
                this.editData=tag
                this.editModal=true
            },
            async deleteTag(){
                this.isDeleting=true
                const res= await this.callApi('post','app/delete_tags',this.deleteItem);

                if(res.status===200){
                    this.tags.splice(this.deletingIndex,1)
                    this.s('Tags successfully deleted');
                }
                else{
                    this.swr();
                }
                this.isDeleting=false,
                    this.showDeleteModal=false

            },
            showDeletingModal(tag,i){
                this.deleteItem=tag
                this.deletingIndex=i
                this.showDeleteModal=true
            }

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
