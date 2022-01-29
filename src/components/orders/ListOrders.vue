<template>
    <div class="space-y-5">

        <div class="hidden md:grid grid-cols-12 px-5 gap-5 pb-5 border-b-2 border-gray-500 text-gray-500 font-bold text-sm" >

            <div class="col-span-1">#</div>
            <div class="col-span-3">👽 Cliente</div>
            <div class="col-span-2">🥖 Pão</div>
            <div class="col-span-2">🍖 Carne</div>
            <div class="col-span-2">🥕 Opcionais</div>
            <div class="col-span-2"></div>

        </div>

        <Order />

    </div>
</template>

<script>

import Order from './Order';

export default {

    name: "ListOrders",

    components: {
        Order
    },

}
</script>