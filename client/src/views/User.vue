<template>
    <div>
         <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
             <h2>Users</h2>
                 <v-btn color="green accent-4" to="User/add">
                     <h5>Add User</h5>
                 </v-btn>
         </v-subheader>
         <v-alert close-text="close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message">
             {{this.$route.params.message}}
         </v-alert>
         <v-card>
             <v-card-title>
                 All User
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
                 :items="Users"
                 :search="search"
             >
               <template v-slot:item="row">
                 <tr>
                     <td>
                         <v-img height="50" width="50" :src="`./${row.item.Image}`"></v-img>
                     </td>
                     <td>{{row.item.Name}}</td>
                     <td>{{row.item.Birth}}</td>
                     <td>{{row.item.Phone}}</td>
                     <td>{{row.item.Address}}</td>
                     <td>{{row.item.Gender}}</td>
                     <td>
                         <v-btn
                             class="mx-2"
                             fab
                             dark
                             x-small
                             color="cyan"
                             :to="{name: 'EditUser', params: { id: row.item._id}}"
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
         name: "Users",
         data() {
             return {
                 search: '',
                 headers: [
                     { text: 'Image', value: 'Image'},
                     { text: 'Name', value: 'Name' },
                     { text: 'Birth', value: 'Birth' },
                     { text: 'Phone', value: 'Phone' },
                     { text: 'Address', value: 'Address' },
                     { text: 'Gender', value: 'Gendet' },
                     { text: 'Edit'},
                 ],
                 Users: [],
             }
         },
         async created() {
             this.Users = await API.getAllUser()
         }
     }
 </script>