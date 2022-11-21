<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>
                        Chỉnh sửa thông tin nhân viên
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="updateForm" class="pa-5">
                        <v-text-field
                            v-model="user.Name"
                            :rules="rules"
                            label="Name"
                            required
                        ></v-text-field>
                        <v-text-field
                            type="Data"
                            v-model="user.Birth"
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
                            v-model="user.Gender"
                            :rules="rules"
                            label="Gender"
                            required
                        ></v-select>
                        <v-img height="100" width="100" :src="`/${user.Image}`"></v-img>
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
                                        @click="deleteUser(user._id), dialog = false"
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
                user:[],
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
        async created() {
            this.user = await API.getUserById(this.$route.params.id)
        }, 
        methods: {
            selectFile(file) {
                this.Image = file[0]
            },
            async updateForm() {
                const formData = new FormData()
                formData.append("Image", this.Image)
                formData.append("Name", this.user.Name)
                formData.append("Address", this.user.Address)
                formData.append("Birth", this.user.Birth)
                formData.append("Gender", this.user.Gender)
                formData.append("Phone", this.user.Phone)
                if(this.$refs.form.validate()) {
                    const res = await API.updateUser(this.$route.params.id,formData)
                    this.$router.push({name:"User", params:{  message: res.message }})
                }
            },
            async deleteUser(id){
                const res = await API.deleteUserById(id)
                this.$router.push({name: 'User', params:{  message: res.message } })
            }
        }
    }
</script>