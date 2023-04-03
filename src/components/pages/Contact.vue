
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

<template>
    <section id="contact" class="pt-36 pb-32">
        <div class="w-full px-4">
           <div class="max-w-xl mx-auto text-center mb-5">
            <h4 class="font-semibold text-lg text-primary mb-2">Kontak</h4>
            <h2 class="font-bold text-dark text-3xl mb-4">Don't be shy! Hit me up! 👇 </h2>
            <p class="font-medium text-md text-secondary md:text-lg">
                Lorem ipsum dolor sit amet.
            </p>
           </div>
           <div class="w-full px-4 flex flex-wrap justify-center md:w-full">
                <div class="mb-12 p-4 md:w-full block justify-center md:flex">
                    <div class="flex items-center ml-5 mt-2">
                        <span>
                            <i class="fa-solid fa-map-location-dot text-primary fa-2xl" />
                        </span>
                        <div class="px-8">
                            <h3 class="text-2xl font-extrabold text-dark text">Lokasi</h3>
                            <a href="https://www.google.co.id/maps/place/7%C2%B055'05.1%22S+110%C2%B016'44.7%22E/@-7.9193515,110.2772129,16.82z/data=!4m4!3m3!8m2!3d-7.918089!4d110.279084" target="_blank" class="text-secondary text-base font-medium hover:text-emerald-400">
                                Yogyakarta, Indonesia
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center ml-5 mt-2">
                        <span>
                            <i class="fa-solid fa-envelope-open-text text-primary fa-2xl" />
                        </span>
                        <div class="px-8">
                            <h3 class="text-2xl font-extrabold text-dark">Email</h3>
                            <a href="mailto: xxristuaji141@gmail.com" target="_blank" class="text-secondary text-base font-medium hover:text-emerald-400">xxristuaji141@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="bg-dark pt-24 pb-12">
        <div class="container">
            <div class="flex flex-wrap">
                <div class="w-full px-4 mb-12">
                    <h2 class="font-bold text-xl text-white text-center md:text-left">Copyright &copy 2023. All rights are reserved</h2>
                </div>
            </div>
        </div>
    </footer>
</template>