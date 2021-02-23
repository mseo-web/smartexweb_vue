<template>
    <div>
        <AppHeader/>
        <router-view />
    </div>
</template>

<script>
    import AppHeader from '@/components/AppHeader';
    export default {
        components: {
      AppHeader,
    },

    data: () => ({
      //
    }),
        
    }
</script>

<style scoped>
 
</style>
