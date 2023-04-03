<template>
    <section id="about" class="pt-36 pb-32">
        <div class="container">
            <div class="flex flex-wrap">
                <div class="w-full px-4 mb-10 lg:w-1/2">
                    <h4 class="font-bold uppercase text-primary text-lg mb-3">Tentang Saya</h4>
                    <h2 class="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">Belajar Coding yuk</h2>
                    <p class="font-medium text-base text-secondary max-w-xl lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Temporibus itaque obcaecati eius deleniti officiis quas expedita?</p>
                </div>
                <div class="w-full px-4 lg:w-1/2">
                    <h3 class="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Lets be friend</h3>
                    <p class="font-medium text-base text-secondary mb-6 lg:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maxime similique iure quibusdam, temporibus eveniet optio.
                    Eius, hic voluptatum.</p>
                    <div class="flex items-center">
                        <!-- Instagram -->
                        <a href="https://www.instagram.com/ristuu_aji/?hl=id" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-fuchsia-500 hover:border-primary hover:bg-primary hover:text-white">
                            <instagram />
                        </a>
                        <a href="https://discord.gg/9BquyyB7VJ" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-indigo-600 hover:border-primary hover:bg-primary hover:text-white">
                            <discord />
                        </a>
                        <a href="https://twitter.com/ristuaji" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-sky-400 hover:border-primary hover:bg-primary hover:text-white">
                            <twitter />
                        </a>
                        <a href="https://github.com/crosbydoo" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                            <github />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    import instagram from "@/assets/icons/instagram.vue"
    import discord from "@/assets/icons/discord.vue"
    import twitter from "@/assets/icons/twitter.vue"
    import github from "@/assets/icons/github.vue"
</script>