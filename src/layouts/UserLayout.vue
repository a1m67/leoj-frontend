<template>
  <div id="UserLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img src="../assets/oj-logo.svg" class="logo" />
          <div>樂 oj</div>
        </a-space>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">by a1m67</a-layout-footer>
    </a-layout>
  </div>
</template>

<style>
#UserLayout {
  text-align: center;
}

#UserLayout .header {
  margin-top: 16px;
  margin-bottom: 16px;
}

#UserLayout .logo {
  width: 64px;
  height: 64px;
}

#UserLayout .content {
  background: linear-gradient(to right, #aaa, #fff);
  margin-bottom: 16px;
  padding: 20px;
}

#UserLayout .footer {
  background: #efefef;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script></script>
