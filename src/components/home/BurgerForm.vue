<template>
    <div class="lg:col-span-3 grid lg:grid-cols-3 gap-10">

        <form class="space-y-8 lg:col-span-2" @submit.prevent="createBurguer">

            <div class="flex flex-col gap-2">
                <label for="name" class="font-bold">👽 Qual seu nome?</label>
                <input  class="px-3 py-2 border border-gray-500 rounded-md"
                        type="text"
                        name="name"
                        id="name"
                        v-model="name"
                        placeholder="Digite aqui..."
                        required
                    >
            </div>

            <div class="flex flex-col gap-2">
                <label for="bread" class="font-bold">🥖 Escolha o pão</label>
                <select class="px-3 py-2 border border-gray-500 rounded-md"
                        id="bread"
                        v-model="bread"
                        required
                >
                    <option :value="null" disabled>Selecione o pão</option>
                    <option v-for="bread in bdBreads" :value="bread.tipo" :key="bread.id"> {{ bread.tipo }}</option>
                </select>
            </div>

            <div class="flex flex-col gap-2">
                <label for="meat" class="font-bold">🍖 Escolha a carne</label>
                <select class="px-3 py-2 border border-gray-500 rounded-md"
                        id="meat"
                        v-model="meat"
                        required
                    >
                    <option :value="null" disabled>Selecione a carne</option>
                    <option v-for="meat in bdMeats" :value="meat.tipo" :key="meat.id"> {{ meat.tipo }} </option>
                </select>
            </div>

            <div class="flex flex-col gap-2">

                <p class="font-bold">🥕 Selecione os opcionais?</p>

                <div class="flex flex-wrap gap-3">
                    <div class="flex items-center gap-2 px-2 py-2 bg-green-50 rounded-md"
                         v-for="optional in bdOptional"
                         :key="optional.id"
                    >
                        <input type="checkbox"
                               :id="optional.tipo"
                               :name="optional.tipo"
                               :value="optional.tipo"
                               v-model="optionalSelected"
                        >
                        <label :for="optional.tipo"> {{ optional.tipo }} </label>
                    </div>

                </div>

            </div>

            <div class="flex gap-3">
                <button class="flex items-center justify-center gap-3 w-full bg-green-400 hover:bg-green-500 rounded-xl py-5 text-green-900 font-bold">
                    <span class="text-xl">🍽️</span> Fazer pedido!
                </button>
                <button type="reset" @click="clearInputs" class="bg-yellow-100 hover:bg-yellow-200 rounded-xl px-5 text-xl group flex gap-3 items-center lg:overflow-hidden lg:relative">
                    🧹 <span class="hidden transform lg:opacity-0 lg:absolute lg:translate-x-full lg:group-hover:static lg:group-hover:opacity-100 lg:group-hover:translate-x-0 transition-all lg:pr-8 font-bold text-yellow-900">Limpar</span>
                </button>
            </div>

        </form>

        <Message :showMsg="showMsg" :msg="msg"/>

        <div>

            <div class="bg-yellow-50 p-5 rounded-t-2xl">

                <div class="border-2 border-dashed rounded-md p-3" >

                    <transition
                        enter-active-class="duration-300 ease-in-out delay-300"
                        enter-class="opacity-0"
                        enter-to-class="opacity-100"
                        leave-active-class="duration-200 ease-in-out "
                        leave-class="opacity-100"
                        leave-to-class="opacity-0"
                    >
                        <div class="flex flex-col gap-3 items-center justify-center text-center"
                             v-if="!name && !bread && !meat"
                        >
                            <span class="text-5xl">😁</span>
                            <p class="font-bold text-gray-400">O resumo do pedido aparecerá aqui</p>
                        </div>
                    </transition>

                    <transition
                            enter-active-class="transition-opacity duration-300 ease-out"
                            enter-from-class="opacity-0"
                            enter-to-class="opacity-100"
                            leave-active-class="transition-opacity duration-300 ease-in"
                            leave-from-class="opacity-100"
                            leave-to-class="opacity-0"
                    >
                        <div v-if="name || bread || meat"
                             class="divide-y divide-dashed text-xs font-semibold"
                        >

                            <div v-if="name" class="text-gray-700 px-2 py-3 font-bold text-base" >
                                🤖 - {{ name }}
                            </div>
                            <div v-if="bread" class="text-gray-700 px-2 py-1.5" >
                                🥖 - {{ bread }}
                            </div>
                            <div v-if="meat" class="text-gray-700 px-2 py-1.5" >
                                🍖 - {{ meat }}
                            </div>
                            <div v-if="optionalSelected" class="flex flex-col gap-2 pt-3 px-2">
                                <div class="flex flex-wrap items-center gap-1">
                                    <div v-for="optional in optionalSelected" class="bg-green-100 rounded-md px-2 py-0.5 text-gray-700 text-xs" >
                                        {{ optional }}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </transition>
                </div>

            </div>

            <svg class="text-yellow-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFBEB" fill-opacity="1" d="M0,192L41.1,32L82.3,64L123.4,64L164.6,64L205.7,32L246.9,256L288,192L329.1,128L370.3,192L411.4,288L452.6,224L493.7,224L534.9,288L576,128L617.1,288L658.3,128L699.4,192L740.6,96L781.7,256L822.9,160L864,256L905.1,160L946.3,128L987.4,64L1028.6,224L1069.7,256L1110.9,192L1152,256L1193.1,160L1234.3,96L1275.4,224L1316.6,64L1357.7,64L1398.9,224L1440,224L1440,0L1398.9,0L1357.7,0L1316.6,0L1275.4,0L1234.3,0L1193.1,0L1152,0L1110.9,0L1069.7,0L1028.6,0L987.4,0L946.3,0L905.1,0L864,0L822.9,0L781.7,0L740.6,0L699.4,0L658.3,0L617.1,0L576,0L534.9,0L493.7,0L452.6,0L411.4,0L370.3,0L329.1,0L288,0L246.9,0L205.7,0L164.6,0L123.4,0L82.3,0L41.1,0L0,0Z"></path></svg>

        </div>

    </div>
</template>

<script>

    import Message from '../layout/Message'

    export default {

        name: "BurgerForm",

        components: {
            Message
        },

        data(){
            return{
                bdBreads: null,
                bdMeats: null,
                bdOptional: null,
                name: null,
                bread: null,
                meat: null,
                optionalSelected: [],
                showMsg: false,
                msg: null
            }
        },

        methods: {

            async getIngredientes() {
                const req = await fetch("http://localhost:3000/ingredientes");
                const data = await req.json();

                this.bdBreads = data.paes;
                this.bdMeats = data.carnes;
                this.bdOptional = data.opcionais;
            },

            async createBurguer() {

                const data = {
                    nome: this.name,
                    carne: this.meat,
                    pao: this.bread,
                    opcionais: Array.from(this.optionalSelected),
                    status: "Solicitado",
                }

                const dataJson = JSON.stringify(data)

                const req = await fetch("http://localhost:3000/burgers", {
                    method: "POST",
                    headers: { "Content-Type" : "application/json" },
                    body: dataJson
                });

                const res = await req.json();

                this.showMsg = true
                this.msg = `Pedido Nº ${res.id} realizado com sucesso`

                setTimeout(() => this.showMsg = false, 3000)

                this.clearInputs();

            },

            clearInputs(){
                this.name = null;
                this.bread = null;
                this.meat = null;
                this.optionalSelected = [];

                this.getIngredientes()
            }

        },

        mounted() {
            this.getIngredientes()
        }
    }

</script>
