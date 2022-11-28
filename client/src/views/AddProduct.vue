<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>
                        Add new product
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="submitForm" class="pa-5">
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
                        <v-file-input
                            v-model="shoe.Image"
                            @change="selectFile"
                            :rules="rules"
                            label="Image"
                            required
                            show-size
                            counter
                            multiple
                        >
                        </v-file-input>
                        <v-btn type="submit" class="mt-3" color="green accent-4">
                            Add product
                        </v-btn>
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
                rules: [(value)=>!!value || "This field is required!"],
                shoe: {
                    name:"",
                    brand:"",
                    price:"",
                    quality:"",
                    description:"",
                    Image:"",
                },
                Image:"",
            }
        },
        methods: {
            selectFile(file) {
                this.Image = file[0]
            },

            async submitForm() {
                const formData = new FormData()
                formData.append("Image", this.Image)
                formData.append("name", this.shoe.name)
                formData.append("brand", this.shoe.brand)
                formData.append("price", this.shoe.price)
                formData.append("quality", this.shoe.quality)
                formData.append("description", this.shoe.description)
                if(this.$refs.form.validate()) {
                    const res = await API.addProduct(formData)
                    this.$router.push({name:"Products", params:{  message: res.message }})
                }
            }
        }
    }
</script>