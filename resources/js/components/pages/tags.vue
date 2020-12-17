<template>
    <div>
        <div class="content">
            <div class="container">
                <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
                <div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
                    <p class="_title0">Tags <Button :size="buttonSize" icon="md-add" shape="circle"></Button> </p>

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
                            <tr>
                                <td>1</td>
                                <td class="_table_name">Manhattan</td>
                                <td>10 days</td>
                                <td>
                                    <Button type="primary" size="small" shape="circle">Edit</Button>
                                    <Button type="error" size="small"  shape="circle">Delete</Button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
