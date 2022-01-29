<template>
    <div class="space-y-10">

        <h1 class=" pb-5 pr-10 border-b-2 border-yellow-300 inline-block text-3xl md:text-4xl font-extrabold text-gray-800">
            📋 Pedidos
        </h1>

        <ListOrders />

    </div>
</template>

<script>

    import ListOrders from '../components/orders/ListOrders'

    export default {

        name: 'Order',

        components: {
            ListOrders
        }

    }

</script>