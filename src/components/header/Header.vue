<template>
    <div class="header-container">
        <img src="../../assets/menu_open-24px.svg" alt="menu-icon"/>
        <span class="app-title">Cookbook app</span>
    </div>
</template>

<script>
export default {
    name: 'Header'
};
</script>

<style scoped>
.header-container {
    display: flex;
    background-color: #788465;
    color: white;
    line-height: 36px;
    height: 36px;
    border-radius: 4px;
    box-shadow: 1px 3px #dad8d8;
}

.app-title {
    margin: 0 auto;
}
</style>
