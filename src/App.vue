<template>
<div>
  <!-- main view -->
  <menu></menu>
  <div class="main-container">
     <router-view  class="view"  transition="expand" transition-mode="out-in"></router-view>
  </div>
  <foot></foot>
</div>
</template>
<script>
    import menu from './components/menu.vue'
    import foot from './components/footer.vue'

    module.exports = {
        components: {
            menu,
            foot
        },
        data() {
            return {

            }
        }
    }
</script>
<style>
    body{
        background-color: #f4f4f4;
    }

    .expand-transition {

    }

    .expand-enter {
        animation: expand-in 0.2s;
    }

    .expand-leave{
        animation: expand-out 0.5s;
    }

    @keyframes expand-in {
        0% {
            opacity: 0;
        }
        25% {
            opacity: 0.25;
        }
        50% {
            opacity: 0.5;
        }
        75% {
            opacity: 0.75;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes expand-out {
       0% {
            opacity: 1;
        }
        25% {
            opacity: 0.75;
        }
        50% {
            opacity: 0.5;
        }
        75% {
            opacity: 0.25;
        }
        100% {
            opacity: 0;
        }
    }
</style>