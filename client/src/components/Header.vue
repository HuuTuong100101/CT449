<template>
    <v-app-bar app
      absolute
      color="white"
      elevate-on-scroll
      elevation="4"
    >
        <v-app-bar-nav-icon @click="$emit(event = 'handleDrawer')"></v-app-bar-nav-icon>

        
        <!-- <v-toolbar-title>Title</v-toolbar-title> -->
        
        <v-col lg="6" cols="12">
            <v-form class="mt-5"> 
                <v-text-field 
                    rounded 
                    outlined 
                    dense
                    placeholder="Search Here"
                    append-icon="mdi-magnify"
                >
                </v-text-field>
            </v-form>
        </v-col>

        <v-spacer></v-spacer>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on" style="cursor:pointer" class="mx-5 mr-10">
                    <v-badge offset-x="10" offset-y="10" color="red" content="5">
                        <v-icon>
                            mdi-bell
                        </v-icon>
                    </v-badge>
                </span>
            </template>
            <v-list>
                <v-list-item
                v-for="(item, index) in items"
                :key="index"
                >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>