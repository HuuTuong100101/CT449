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
                        <v-img height="50" width="50" :src="`./${row.item.image}`"></v-img>
                    </td>
                    <td>{{row.item.price}}</td>
                    <td>{{row.item.state}}</td>
                    <td>{{row.item.quality}}</td>
                    <td>
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
                search: '',
                headers: [
                    { text: 'Name', value: 'name' },
                    { text: 'Brand', value: 'brand' },
                    { text: 'Image', value: 'image'},
                    { text: 'Price', value: 'price' },
                    { text: 'State', value: 'state' },
                    { text: 'Quality', value: 'quality' },
                    { text: 'Edit'},
                ],
                shoes: [],
            }
        },
        async created() {
            this.shoes = await API.getAllProduct()
        }
    }
</script>