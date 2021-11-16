<script>
  import MainContent from '../MainContent';
  import {location} from 'svelte-spa-router'
</script>
  
  <MainContent>
    <div class="py-4">
      <h2>This is the Transactions SHOW page!</h2>
      <p>The current page is: {$location}</p>
    </div>
  </MainContent>