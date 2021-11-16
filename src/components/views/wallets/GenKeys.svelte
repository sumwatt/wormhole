<script>

</script>

<button type="button" class="btn btn-block btn-gray-800 mb-3" data-bs-toggle="modal" data-bs-target="#modal-form">New Keys</button>
<!-- Modal Content -->
<div class="modal fade" id="modal-form" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
          <div class="modal-body p-0">
              <div class="card p-3 p-lg-4">
                  <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                  <div class="text-center text-md-center mb-4 mt-md-0">
                      <h1 class="mb-0 h4">Create A Keypair</h1>
                  </div>
                  <form action="/#/wallets" class="mt-4">
                      <!-- Form -->
                      <div class="form-group mb-4">
                          <label for="email">Keypair Name</label>
                          <div class="input-group">
                              <span class="input-group-text" id="basic-addon1">
                                <!--
                                  <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                  </svg>
                                -->
                                  <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">    
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                                   </svg>
                              </span>
                              <input type="text" class="form-control" placeholder="Testnet Key" id="email" required>
                          </div>  
                      </div>
                      <!-- End of Form -->
                      <div class="d-grid">
                          <button type="submit" class="btn btn-gray-800">Create</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
</div>
<!-- End of Modal Content -->
<style>

</style>