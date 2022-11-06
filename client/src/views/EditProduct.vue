<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>
                        Edit product
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="updateForm" class="pa-5">
                        <v-text-field
                            v-model="shoe.name"
                            :rules="rules"
                            label="Name"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="shoe.brand"
                            :rules="rules"
                            label="Brand"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="shoe.price"
                            :rules="rules"
                            label="Price"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="shoe.quality"
                            :rules="rules"
                            label="Quality"
                            required
                        ></v-text-field>
                        <v-textarea
                            v-model="shoe.description"
                            :rules="rules"
                            label="Description"
                            required
                        ></v-textarea>
                        <v-img height="100" width="100" :src="`/${shoe.image}`"></v-img>
                        <v-file-input
                            v-model="shoe.image"
                            @change="selectFile"
                            :rules="rules"
                            label="Image"
                            required
                            show-size
                            counter
                            multiple
                        >
                        </v-file-input>
                        <v-btn type="submit" dark class="mt-3" color="green accent-4">
                            Save
                        </v-btn>
                        <v-dialog
                            v-model="dialog"
                            width="500"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="mx-2 mt-3"
                                    dark
                                    color="red accent-4"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Delete
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
                                        @click="deleteProduct(shoe._id), dialog = false"
                                    >
                                        Delete
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from '@/services/api'
    export default{
        data(){
            return{
                shoe: [],
                rules: [(value)=>!!value || "This field is required!"],
                shoe: {
                    name:"",
                    brand:"",
                    price:"",
                    quality:"",
                    description:"",
                    image:"",
                },
                image:"",
            }
        },
        async created() {
            this.shoe = await API.getProductById(this.$route.params.id)
        }, 
        methods: {
            selectFile(file) {
                this.image = file[0]
            },
            async updateForm() {
                const formData = new FormData()
                formData.append("image", this.image)
                formData.append("name", this.shoe.name)
                formData.append("brand", this.shoe.brand)
                formData.append("price", this.shoe.price)
                formData.append("quality", this.shoe.quality)
                formData.append("description", this.shoe.description)
                if(this.$refs.form.validate()) {
                    const res = await API.updateProduct(this.$route.params.id,formData)
                    this.$router.push({name:"Products", params:{  message: res.message }})
                }
            },
            async deleteProduct(id){
                const res = await API.deleteProductById(id)
                this.$router.push({name: 'Products', params:{  message: res.message } })
            }
        }
    }
</script>