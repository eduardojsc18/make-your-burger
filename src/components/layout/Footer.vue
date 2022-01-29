<template>
    <footer class="bg-black">
        <div class="container mx-auto flex flex-col items-center justify-center py-5 space-y-5 text-white">
            <div class="flex items-center justify-center gap-3">
                <a href="" class="transform hover:scale-110 transition-all">
                    <img :src="srcFacebook" alt="" class="w-5 h-5">
                </a>
                <a href="" class="transform hover:scale-110 transition-all">
                    <img :src="srcInstagram" alt="" class="w-5 h-5">
                </a>
                <a href="" class="transform hover:scale-110 transition-all">
                    <img :src="srcTwitter" alt="" class="w-5 h-5">
                </a>
                <a href="" class="transform hover:scale-110 transition-all">
                    <img :src="srcWhatsapp" alt="" class="w-5 h-5">
                </a>
            </div>
            <p class="text-center text-xs text-gray-400">
                Make Your Burguer © 2022
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    props: ["logo", "alt"],

    data(){
        return {
            srcFacebook: "/img/facebook.svg",
            srcInstagram: "/img/instagram.svg",
            srcTwitter: "/img/twitter.svg",
            srcWhatsapp: "/img/whatsapp.svg",
        }
    }
}


</script>