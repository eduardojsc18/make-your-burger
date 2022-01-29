<template>
    <div class="flex flex-col min-h-screen bg-gray-100">

        <Navbar :logo="logo_src" :alt="app_name"/>

        <div class="flex-grow px-3">
            <div class="container mx-auto py-10">
                <div class="space-y-10">

                    <Banner />

                    <transition
                            enter-active-class="transition-all transform duration-300 ease-out"
                            enter-from-class="translate-y-full"
                            enter-to-class="translate-y-0"
                            leave-active-class="transition-all transform duration-300 ease-in"
                            leave-from-class="translate-y-0"
                            leave-to-class="translate-y-full"
                    >
                        <div class="px-8 py-10 bg-white rounded-xl shadow-md lg:w-3/4 mx-auto space-y-10"
                            v-if="$route.name"
                            >
                            <router-view />
                        </div>
                    </transition>
                </div>
            </div>
        </div>

        <Footer/>

    </div>
</template>

<script>

import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import Banner from "./components/layout/Banner.vue"

export default {
    components: {
        Navbar,
        Footer,
        Banner
    },
    data() {
        return {
            logo_src: "/img/logo.png",
            app_name: "Make your Burguer"
        }
    }
}

</script>
