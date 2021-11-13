<script>
	import 'bootstrap';
	export let name;
</script>


<main>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container-fluid">
			<a class="navbar-brand keychainify-checked" href={'#'}>Navbar</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
	
			<div class="collapse navbar-collapse" id="navbarColor02">
				<ul class="navbar-nav me-auto">
					<li class="nav-item">
						<a class="nav-link active keychainify-checked" href={'#'}>Home
							<span class="visually-hidden">(current)</span>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link keychainify-checked" href={'#'}>Features</a>
					</li>
					<li class="nav-item">
						<a class="nav-link keychainify-checked" href={'#'}>Pricing</a>
					</li>
					<li class="nav-item">
						<a class="nav-link keychainify-checked" href={'#'}>About</a>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle keychainify-checked" data-bs-toggle="dropdown" href={'#'} role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
						<div class="dropdown-menu">
							<a class="dropdown-item keychainify-checked" href={'#'}>Action</a>
							<a class="dropdown-item keychainify-checked" href={'#'}>Another action</a>
							<a class="dropdown-item keychainify-checked" href={'#'}>Something else here</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item keychainify-checked" href={'#'}>Separated link</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</nav>

	<h1>Hi {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>