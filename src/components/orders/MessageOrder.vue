<template>
    <teleport to="#modals">
        <transition
                enter-active-class="transition-all transform duration-500 ease-out"
                enter-from-class="translate-x-full opacity-0"
                enter-to-class="translate-x-0 opacity-100"
                leave-active-class="transition-all transform duration-200 ease-in"
                leave-from-class="translate-x-0 opacity-100"
                leave-to-class="translate-x-full opacity-0"
        >
            <div class="z-50 fixed top-3 right-3 px-3 py-2 text-white rounded-xl shadow-xl"
                 v-show="showMsg"
                 :class="colorMsg"
            >

                {{ msg }}

            </div>
        </transition>
    </teleport>
</template>

<script>
export default {

    name: "MsgOrder",

    props: [ 'showMsg', 'msg', 'colorMsg']

}
</script>

<style scoped>

</style>