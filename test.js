<template>
   <div>
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
                <h2>Prouduct</h2>
                <v-btn color="green accent-4" to="Product/add">
                    <h5>Add Proudct</h5>
                </v-btn>
        </v-subheader>
        <v-alert close-text="close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message">
            {{this.$route.params.message}}
        </v-alert>
        <v-card>
            <v-card-title>
                All Products
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="shoes"
                :search="search"
            >
              <template v-slot:item="row">
                <tr>
                    <td>{{row.item.name}}</td>
                    <td>{{row.item.brand}}</td>
                    <td>
                        <v-img height="80" width="80" :src="`./${row.item.image}`"></v-img>
                    </td>
                    <td>{{row.item.price}}</td>
                    <td>{{row.item.state}}</td>
                    <td>{{row.item.quality}}</td>
                    <td>
                        <v-dialog
                            v-model="dialog"
                            width="500"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="mx-2"
                                    fab
                                    dark
                                    x-small
                                    color="primary"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    <v-icon dark>
                                        mdi-minus
                                    </v-icon>
                                </v-btn>
                            </template>

                            <v-card>
                                <v-card-title class="text-h5 grey lighten-2">
                                    Xóa sản phẩm
                                </v-card-title>

                                <v-card-text>
                                    <h3>Bạn có chắn chắn muốn xóa sản phẩm này</h3>
                                </v-card-text>

                                <v-divider></v-divider>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="primary"
                                        text
                                        @click="deleteProduct(row.item._id), dialog = false"
                                    >
                                        Delete
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>

                        <v-btn
                            class="mx-2"
                            fab
                            dark
                            x-small
                            color="cyan"
                            :to="{name: 'EditProduct', params: { id: row.item._id}}"
                        >
                            <v-icon dark>
                                mdi-pencil
                            </v-icon>
                        </v-btn>
                    </td>
                </tr>
              </template>
            </v-data-table>
        </v-card>
   </div>
</template>

<script>
    import API from "../services/api";

    export default {
        name: "product",
        data() {
            return {
                dialog: false,
                search: '',
                headers: [
                    { text: 'Name', value: 'name' },
                    { text: 'Brand', value: 'brand' },
                    { text: 'image', value: 'image'},
                    { text: 'Price', value: 'price' },
                    { text: 'state', value: 'state' },
                    { text: 'quality', value: 'quality' },
                    { text: 'handle'},
                ],
                shoes: [],
            }
        },
        async created() {
            this.shoes = await API.getAllProduct()
        }, 
        methods: {
            async deleteProduct(id){
                const res = await API.deleteProductById(id)
                this.$router.push({name: 'Products', params:{  message: res.message } })
            }
        }
    }
</script>



<v-dialog
v-model="dialog"
width="500"
>
<template v-slot:activator="{ on, attrs }">
    <v-btn
        class="mx-2"
        fab
        dark
        x-small
        color="primary"
        v-bind="attrs"
        v-on="on"
    >
        <v-icon dark>
            mdi-minus
        </v-icon>
    </v-btn>
</template>

<v-card>
    <v-card-title class="text-h5 grey lighten-2">
        Xóa sản phẩm
    </v-card-title>

    <v-card-text>
        <h3>Bạn có chắn chắn muốn xóa sản phẩm này</h3>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="primary"
            text
            @click="deleteProduct(row.item._id), dialog = false"
        >
            Delete
        </v-btn>
    </v-card-actions>
</v-card>
</v-dialog>