<template>
    <teleport to="#modals">

        <transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
        >

            <div class="fixed top-0 right-0 min-h-full min-w-full bg-black bg-opacity-80 backdrop-filter backdrop-blur-sm z-50 flex items-center justify-center text-center"
                v-show="showMsg"
                >

                <transition
                        enter-active-class="transition-all transform duration-300 ease-out delay-300"
                        enter-from-class="translate-y-full opacity-0"
                        enter-to-class="translate-y-0 opacity-100"
                        leave-active-class="transition-all transform duration-300 ease-in"
                        leave-from-class="scale-100 opacity-100"
                        leave-to-class="scale-0 opacity-0"
                >
                    <div class="bg-green-700 p-10 rounded-xl text-white space-y-5" v-show="showMsg">
                        <p class="text-2xl">🎉 😋 🍔</p>
                        <p class="text-xl">{{msg}}</p>
                    </div>
                </transition>

            </div>

        </transition>

    </teleport>
</template>

<script>
export default {
    name: "Message",
    props: ['showMsg', 'msg']
}
</script>