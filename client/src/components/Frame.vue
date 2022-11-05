<template>
    <v-app id="inspire">
        <!-- Sidebar -->
        <v-card
            class="mx-auto"
            width="256"
            tile
        >
            <v-navigation-drawer  
                v-model="drawer"
                app
            >
                <v-list>
                    <v-list-item class="justify-center">
                        <v-list-item-avatar>
                            <v-img src="../assets/AvatarAdmin.jpg"></v-img>
                        </v-list-item-avatar>
                    </v-list-item>

                    <v-list-item class="text-center">
                        <v-list-item-content>
                            <v-list-item-title class="text-h6">
                                John Leider
                            </v-list-item-title>
                            <v-list-item-subtitle>nt19801909@gmail.com</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                
                <v-divider></v-divider>

                <v-list
                    nav
                    dense
                >
                    <v-list-item-group
                    v-model="selectedItem"
                    color="primary"
                    >
                    <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                    >
                        <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
        </v-card>

        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Master Shoes</v-toolbar-title>
            <v-spacer />
            <!-- input search -->
            <v-col lg="6" cols="12">
                <v-form>
                    <v-text-field
                    class="p-0 m-0 mt-6"
                    full-width
                    dense
                    append-icon="mdi-magnify"
                    outlined
                    rounded
                    placeholder="Search"
                    />
                </v-form>
            </v-col>

            <v-spacer />
            <!-- Bell nortifications -->
            <v-menu offset-y>
                <template v-slot:activator="{ attrs, on }">
                    <span
                    class="mx-5 mr-10"
                    style="cursor: pointer"
                    v-bind="attrs"
                    v-on="on"
                    >
                    <v-badge content="3" color="red" offset-y="10" offset-x="10">
                        <v-icon>mdi-bell</v-icon>
                    </v-badge>
                    </span>
                </template>
                <v-list three-line width="250">
                    <template v-for="(item, index) in items">
                    <v-subheader
                        v-if="item.header"
                        :key="item.header"
                        v-text="item.header"
                    ></v-subheader>

                    <v-divider
                        v-else-if="item.divider"
                        :key="index"
                        :inset="item.inset"
                    ></v-divider>

                    <v-list-item v-else :key="item.title">
                        <v-list-item-avatar>
                        <v-img :src="item.avatar"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                        <v-list-item-subtitle
                            v-html="item.subtitle"
                        ></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    </template>
                </v-list>
            </v-menu>

            <!-- admin infor -->
            <v-menu offset-y>
                <template v-slot:activator="{ attrs, on }">
                    <span style="cursor: pointer" v-bind="attrs" v-on="on">
                    <v-chip link>
                        <v-badge dot bottom color="green" offset-y="10" offset-x="10">
                        <v-avatar size="40">
                            <v-img src="https://randomuser.me/api/portraits/women/81.jpg" />
                        </v-avatar>
                        </v-badge>
                        <span class="ml-3">Jane Smith</span>
                    </v-chip>
                    </span>
                </template>
                <v-list width="250" class="py-0">
                    <v-list-item two-line>
                        <v-list-item-avatar>
                            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>Jane Smith</v-list-item-title>
                            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider />

                    <v-list-tile v-for="(item, i) in items" :key="i">
                        <router-link :to="item.link">
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-title>
                                {{ item.link }}
                            </v-list-item-title>
<!--     
                            <v-list-item-title>
                                {{ item.title }}
                            </v-list-item-title> -->
                        </router-link>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-app-bar>

        <!-- Content -->
        <v-main style="background: #f5f5f540">
            <v-container class="py-8 px-6" fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        name: "Frame",
        data: () => ({ 
            drawer: null,
            selectedItem: 0,
            items: [
                { text: 'Dashboard', icon: 'mdi-view-dashboard-edit-outline', link:'/'},
                { text: 'Products', icon: 'mdi-shoe-sneaker', link:'/Product'},
                { text: 'Orders', icon: 'mdi-cart-percent', link:'/Order'},
            ],
        }),
    }
</script>