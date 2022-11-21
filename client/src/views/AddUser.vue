<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>
                        Add new user
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="submitForm" class="pa-5">
                        <v-text-field
                            v-model="user.Name"
                            :rules="rules"
                            label="Name"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="user.Birth"
                            type="Date"
                            :rules="rules"
                            label="Birth"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="user.Address"
                            :rules="rules"
                            label="Address"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="user.Phone"
                            :rules="rules"
                            label="Phone"
                            required
                        ></v-text-field>
                        <v-select
                            :items="items"
                            dense
                            :rules="rules"
                            label="Gender"
                            required
                        ></v-select>
                        <v-file-input
                            v-model="user.Image"
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
                            Add User
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
                items: ["Nam", "Nu"],
                rules: [(value)=>!!value || "This field is required!"],
                user: {
                    Name:"",
                    Birth:"",
                    Phone:"",
                    Address:"",
                    Gender:"",
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
                formData.append("Name", this.user.Name)
                formData.append("Address", this.user.Address)
                formData.append("Birth", this.user.Birth)
                formData.append("Gender", this.user.Gender)
                formData.append("Phone", this.user.Phone)
                if(this.$refs.form.validate()) {
                    const res = await API.addUser(formData)
                    this.$router.push({name:"User", params:{  message: res.message }})
                }
            }
        }
    }
</script>