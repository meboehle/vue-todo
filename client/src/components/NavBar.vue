<template>
  <div class='nav-bar' id='nav-bar'>
    <img src='../assets/notepad-svgrepo-com.svg' width="36" height="36" style='margin: 0 15px' />
    <h2>Todos App</h2>
    <nav class='nav-menu'>
      <div class='nav-item'>
        <a href="#" v-scroll-to="'#todo-list'">
          Todo List
        </a>
      </div>
      <div class='nav-item'>
        <a href='#add-todo' v-scroll-to="'#add-todo'">
          Add Todo
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
  padding: 0 30px 0 10px;
  box-shadow: 0 3px 10px gray;
}

.nav-menu {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
}

.nav-item a {
  margin: 0 20px;
  text-decoration: none;
  color: black;
}

.nav-item a:hover {
  color: royalblue;
}
</style>