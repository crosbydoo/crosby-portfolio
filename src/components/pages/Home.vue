<template>
    <!-- Hero Selection Start -->
    <section id="home" class="pt-36">
        <div class="container">
            <div class="flex flex-wrap">
                <div class="w-full self-center px-4 lg:w-1/2">
                    <h1 class="text-base font-semibold text-primary md:text-xl">Halo Semua👋, Saya 
                        <span class="block font-bold text-dark text-4xl lg:text-5xl">Ristu Aji Wijayanto</span>
                    </h1>
                    <h2 class="font-medium text-secondary text-lg mb-5 lg:text-2xl">S1 Informatika <span class="text-dark">| UTY</span></h2>
                    <p class="font-medium text-secondary mb-10 leading-relaxed">Menyukai mobile programming daripada web programming tapi kondisional sih</p>
                    <a href="#" class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Cari tahu Saya</a>
                </div>
                <div class="w-full self-end px-4 lg:w-1/2">
                    <div class="mt-10 relative lg-mt-9 lg:right-0">
                        <img class="max-w-full mx-auto" src="@/assets/img/crosby.png" alt="crosby"/>
                        <span class="absolute bottom-14 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                            <blop />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero Selection End -->

    <!-- About Section Start -->
    <about />
    <!-- About Section End -->

    <!-- Portfolio Section Start -->
    <portfolio />
    <!-- Portfolio Section End -->

    <!-- Client Section Start -->
    <client />
    <!-- Client Section End -->

    <!-- Contact Section Start -->
    <contact />
    <!-- Contact Section End -->

    <footer />
</template>
<script setup>
    import blop from "@/assets/icons/blop.vue"
    import about from "./About.vue"
    import portfolio from "./Portfolio.vue"
    import client from "./Client.vue"
    import contact from "./Contact.vue"
</script>