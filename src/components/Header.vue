<template>  
    <header>
        <nav>
            <RouterLink class="link" to="/">Home</RouterLink>
            <RouterLink
            class="link"  to="/resorts">Resorts</RouterLink>
            <RouterLink 
            class="link" to="/about">About</RouterLink>
            <RouterLink 
            class="link" to="/login">Sign Up/In</RouterLink>
        </nav>
    </header>

</template>

<script>

</script>

<style>
    body {
        color: white;
        background: rgb(102, 143, 232);
    }

    nav {
        max-width: 50%;
        font-size: 35px;
        background: rgb(0, 166, 255);
    }

    .link {
        margin: 10px;
    }

</style>