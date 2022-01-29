<template>
    <header>
        <div class="container mx-auto">
            <div class="md:w-3/4 mx-auto flex items-center justify-between px-5 md:px-0 pt-10">

                <router-link to="/">
                    <img class="w-10 ml-3" :src="logo" :alt="alt">
                </router-link>

                <div class="flex items-center gap-5 text-gray-800 font-bold">

                    <router-link to="/">
                        <div class="flex items-center justify-center gap-3 px-3 py-2 rounded-lg border-transparent hover:bg-gray-800 hover:text-white hover:px-4 hover:shadow active:bg-yellow-700 transition-all"
                            :class="{'bg-gray-700 text-white px-4': $route.name === 'Home'}"
                            >
                            <span>🏠</span>
                            Inicio
                        </div>
                    </router-link>

                    <router-link to="/Order">
                        <div class="flex items-center justify-center gap-3 px-3 py-2 rounded-lg border-transparent hover:bg-gray-800 hover:text-white hover:px-4 hover:shadow active:bg-yellow-700 transition-all"
                             :class="{'bg-gray-700 text-white px-4': $route.name === 'Order'}"
                            >
                            <span>🍽️</span>
                            Pedidos
                            <p></p>
                        </div>
                    </router-link>

                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Navbar",
    props: ["logo", "alt"]
}
</script>