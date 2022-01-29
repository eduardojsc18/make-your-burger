<template>
    <transition-group
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-all transform duration-200 ease-in"
            leave-from-class="scale-100 opacity-100"
            leave-to-class="scale-50 opacity-0"
    >

        <div class="transform hover:scale-105 transition-all rounded-xl hover:rounded-2xl"
             v-for="burger in burgers"
             :key="burger.id"
             v-show="burger.id"
            >
            <div class="grid md:grid-cols-12 gap-2 md:gap-5 rounded-xl text-sm hover:shadow-md transition-all p-5 font-semibold relative group transition-all"
                 :class="burger.status === 'Finalizado' ? 'bg-green-300 hover:bg-green-400' : ' bg-yellow-50 hover:bg-yellow-100'"
                >

                <div class="p-2 md:p-0 rounded-xl md:rounded-none shadow-md md:shadow-none md:bg-transparent transition-all"
                    :class="burger.status === 'Finalizado' ? 'bg-green-500' : ' bg-yellow-100'"
                >
                    <span class="md:hidden text-gray-500 text-xs"># Pedido: </span> {{ burger.id }}
                </div>
                <div class="p-2 md:p-0 rounded-xl md:rounded-none shadow-md md:shadow-none md:bg-transparent md:col-span-3 truncate transition-all"
                    :class="burger.status === 'Finalizado' ? 'bg-green-500' : ' bg-yellow-100'"
                >
                    <span class="md:hidden text-gray-500 text-xs">👽 Cliente: </span> {{ burger.nome  }}
                </div>
                <div class="p-2 md:p-0 rounded-xl md:rounded-none shadow-md md:shadow-none md:bg-transparent md:col-span-2 transition-all"
                    :class="burger.status === 'Finalizado' ? 'bg-green-500' : ' bg-yellow-100'"
                >
                    <span class="md:hidden text-gray-500 text-xs">🥖 Pão: </span> {{ burger.pao }}
                </div>
                <div class="p-2 md:p-0 rounded-xl md:rounded-none shadow-md md:shadow-none md:bg-transparent md:col-span-2 transition-all"
                    :class="burger.status === 'Finalizado' ? 'bg-green-500' : ' bg-yellow-100'"
                >
                    <span class="md:hidden text-gray-500 text-xs">🍖 Carne: </span> {{ burger.carne }}
                </div>
                <div class="p-2 md:p-0 rounded-xl md:rounded-none shadow-md md:shadow-none md:bg-transparent md:col-span-2 transition-all"
                     :class="burger.status === 'Finalizado' ? 'bg-green-500' : ' bg-yellow-100'"
                >
                    <span class="md:hidden text-gray-500 text-xs">🥕 Opcionais: </span>
                    <ul class="text-xs text-gray-500 italic">
                        <li v-for="(opcional, index) in burger.opcionais" class="hover:underline">
                            {{ opcional }}
                        </li>
                    </ul>
                </div>
                <div class="md:col-span-2">

                    <select class="p-3 rounded-xl shadow w-full" @change="updateOrder($event, burger.id)">
                        <option
                                v-for="status in status"
                                :key="status.id"
                                :value="status.tipo"
                                :selected="status.tipo === burger.status"
                        >
                            {{ status.tipo }}
                        </option>
                    </select>

                </div>

                <div class="absolute -top-3 -right-3">
                    <button class="rounded-full p-2 bg-red-300 text-xs md:hidden group-hover:block"
                            @click="deleteBurger(burger.id)"
                    >
                        ❌
                    </button>
                </div>

            </div>
        </div>

    </transition-group>

    <MessageOrder :showMsg="showMsg" :msg="msg" :colorMsg="colorMsg"/>

</template>

<script>

import MessageOrder from "@/components/orders/MessageOrder";


export default {

    name: "Order",

    components: {
        MessageOrder,
    },

    data(){
        return {
            burgers: null,
            burguer_id: null,
            status: [],
            showMsg: false,
            msg: "",
            colorMsg: ""
        }
    },

    methods: {

        async getPedidos(){

            const req = await fetch("http://localhost:3000/burgers");

            this.burgers = await req.json();

            await this.getStatus();

        },

        async getStatus(){

            const req = await fetch("http://localhost:3000/status");

            this.status = await req.json();

        },

        async deleteBurger(id){

            const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                method: "DELETE"
            });

            const res = await req.json();

            await this.getPedidos();

            this.showMsg = true
            this.msg = `Pedido Nº ${id} deletado com sucesso`
            this.colorMsg = 'bg-red-600'

            setTimeout(() => this.showMsg = false, 3000)

        },

        async updateOrder(event, id){

            const option = event.target.value;

            const dataJason = JSON.stringify({status: option});

            const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: dataJason
            });

            await this.getPedidos();

            this.showMsg = true
            this.msg = `Pedido Nº ${id} foi atualizado com sucesso`
            this.colorMsg = 'bg-yellow-600'

            setTimeout(() => this.showMsg = false, 3000)

        }

    },

    mounted() {

        this.getPedidos();

    }

}

</script>