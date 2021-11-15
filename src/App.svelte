<script>
	import 'bootstrap';
	import Navbar from './components/navigation/Navbar';
	import SideNav from './components/navigation/SideNav';
	import Router from 'svelte-spa-router';
	import { routes } from './routes.js';

	// export let name;
</script>

<main>
	<Navbar />
	<SideNav />
	<Router { routes } />
</main>

<style>

</style>