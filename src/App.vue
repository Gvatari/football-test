<template>
  <nav>
    <router-link to="/">Лига</router-link> 
    <router-link to="/teams">Команда</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

nav {
  margin: 10px 0 0 15px;
  display: flex;
  gap: 48px;
  justify-content: center;

  a{
    font-size: 26px;
    text-decoration: none;
  }
}
</style>
