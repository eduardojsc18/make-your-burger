<template>
    <div class="space-y-10">

        <h1 class="pb-5 md:pr-10 border-b-2 border-yellow-300 md:inline-block text-center md:text-left text-2xl md:text-4xl font-extrabold text-gray-800">
            📝 Montando seu pedido
        </h1>

        <BurgerForm />

    </div>
</template>

<script>

    import BurgerForm from "../components/home/BurgerForm.vue"

    export default {

        name: "Home",

        components: {
            BurgerForm
        },

    }

</script>