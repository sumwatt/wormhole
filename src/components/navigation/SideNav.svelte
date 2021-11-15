<script>
  import SideNavCollapse from "./SideNavCollapse.svelte";
  import SideNavItems from "./SideNavItems.svelte";

</script>

<nav id="sidebarMenu" class="sidebar d-lg-block bg-gray-800 text-white collapse" data-simplebar>
  <div class="sidebar-inner px-4 pt-3">
    <SideNavCollapse />
    <SideNavItems />
  </div>
</nav>