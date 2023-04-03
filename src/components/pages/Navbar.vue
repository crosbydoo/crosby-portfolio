<template>
    <header ref="header" class="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div class="container">
            <div class="flex items-center justify-between relative">
                <div class="px-4">
                    <a href="#home" class="font-bold text-primary block py-6">crosbydev</a>
                </div>
                <div class="flex items-center px-4">
                    <button id="hamburger" ref="hamburger" name="hamburger" type="button" class="block absolute right-4 lg:hidden">
                       <span class="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                       <span class="hamburger-line transition duration-300 ease-in-out"></span>
                       <span class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
                    </button>
                    <nav ref="navMenu" class="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                        <ul class="block lg:flex">
                            <li class="group">
                                <a href="#home" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Beranda</a>
                            </li>
                            <li class="group">
                                <a href="#about" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Tentang Saya</a>
                            </li>
                            <li class="group">
                                <a href="#portfolio" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Portfolio</a>
                            </li>
                            <li class="group">
                                <a href="#client" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Client</a>
                            </li>
                            <li class="group">
                                <a href="#contact" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Kontak</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>
<script type="text/javascript">
    export default {
        mounted() {
            window.onscroll = () => {
                const header = this.$refs.header;
                const fixedNav = header.offsetTop;

                if(window.pageYOffset > fixedNav){
                    header.classList.add('navbar-fixed');
                }else{
                    header.classList.remove('navbar-fixed');
                }
            };

            const navMenu = this.$refs.navMenu;
            const hamburger = this.$refs.hamburger;
            hamburger.addEventListener('click', ()=>{
                hamburger.classList.toggle('hamburger-active');
                navMenu.classList.toggle('hidden');
            });
        },
    };
</script>