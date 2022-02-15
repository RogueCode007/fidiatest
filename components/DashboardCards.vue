<template>
  <div class="py-6 lg:py-10 px-4 lg:px-16">
        <div class="lg:flex justify-between">
          <div>
            <h1 class="text-gray-900 text-2xl font-medium lg:text-3xl">Welcome back, Obiwan</h1>
            <p class="text-gray-500 mt-2">Track, manage and forecast your customers and orders.</p>
          </div>
          <div class="mt-4 lg:mt-0 flex items-center gap-4">
              <button class="flex items-center justify-center gap-2 border btn btn1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2771_3002)">
                        <path d="M13.3333 13.3334L10 10M10 10L6.66667 13.3334M10 10V17.5M16.9917 15.325C17.8044 14.8819 18.4465 14.1808 18.8166 13.3322C19.1866 12.4837 19.2635 11.5361 19.0352 10.6389C18.8068 9.74182 18.2862 8.94629 17.5556 8.3779C16.8249 7.80951 15.9257 7.50064 15 7.50003H13.95C13.6978 6.52439 13.2276 5.61864 12.575 4.85085C11.9223 4.08307 11.104 3.47324 10.1817 3.0672C9.25946 2.66116 8.25712 2.46949 7.2501 2.5066C6.24307 2.5437 5.25755 2.80861 4.36765 3.28142C3.47774 3.75422 2.70659 4.42261 2.11218 5.23635C1.51777 6.05008 1.11557 6.98797 0.935814 7.97952C0.756055 8.97107 0.803418 9.99047 1.07434 10.9611C1.34527 11.9317 1.8327 12.8282 2.5 13.5834" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2771_3002">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <span class="text-xs text-gray-700">Import</span>
              </button>
              <button class="btn flex items-center justify-center gap-2 border bg-purple-600 border-purple-600">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99999 4.16669V15.8334M4.16666 10H15.8333" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="text-xs text-white">Add</span>
              </button>
          </div>
        </div>
        <div class="grid gap-4 mt-10 lg:grid-cols-3 lg:gap-8">
            <div class="card rounded-md">
                <div class="flex items-center justify-between">
                    <h3 class="text-gray-900 font-medium">Total Customers</h3>
                    <button>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 9.99998C10.8334 9.53974 10.4603 9.16665 10 9.16665C9.53978 9.16665 9.16669 9.53974 9.16669 9.99998C9.16669 10.4602 9.53978 10.8333 10 10.8333Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 4.99998C10.4603 4.99998 10.8334 4.62688 10.8334 4.16665C10.8334 3.70641 10.4603 3.33331 10 3.33331C9.53978 3.33331 9.16669 3.70641 9.16669 4.16665C9.16669 4.62688 9.53978 4.99998 10 4.99998Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 16.6666C10.4603 16.6666 10.8334 16.2935 10.8334 15.8333C10.8334 15.3731 10.4603 15 10 15C9.53978 15 9.16669 15.3731 9.16669 15.8333C9.16669 16.2935 9.53978 16.6666 10 16.6666Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>    
                    </button>
                    
                </div>
                <div class="mt-4 flex justify-between items-end">
                    <div class="">
                        <h4 class="text-3xl font-bold">2,420</h4>
                        <div class="mt-4 text-sm flex items-center gap-2">
                            <p class="flex items-center gap-2">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.00002 12.8333V1.16666M7.00002 1.16666L1.16669 6.99999M7.00002 1.16666L12.8334 6.99999" stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span class="text-green-500">40%</span>
                            </p>
                            <span class=" text-gray-500"> vs last month</span>
                        </div>
                    </div>
                    <svg width="98" height="50" viewBox="0 0 98 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M97 1C81.4031 2.29974 80.4372 33.4164 65 37C52.2702 39.9551 45.8241 23.1804 33 25C19.0903 26.9737 14.6391 44.4536 1 49H97V1Z" fill="#ECFDF3"/>
                        <path d="M97 1C81.4031 2.29974 80.4372 33.4164 65 37C52.2702 39.9551 45.8241 23.1804 33 25C19.0903 26.9737 14.6391 44.4536 1 49H97V1Z" fill="url(#paint0_linear_2771_11890)"/>
                        <path d="M1 49C14.6391 44.4536 19.0903 26.9737 33 25C45.8241 23.1804 52.2702 39.9551 65 37C80.4372 33.4164 81.4031 2.29974 97 1" stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                        <linearGradient id="paint0_linear_2771_11890" x1="49" y1="1" x2="49" y2="49" gradientUnits="userSpaceOnUse">
                        <stop offset="0.641167" stop-color="white" stop-opacity="0"/>
                        <stop offset="1" stop-color="white"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div class="card rounded-md">
                <div class="flex items-center justify-between">
                    <h3 class="text-gray-900 font-medium">Members</h3>
                    <button>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 9.99998C10.8334 9.53974 10.4603 9.16665 10 9.16665C9.53978 9.16665 9.16669 9.53974 9.16669 9.99998C9.16669 10.4602 9.53978 10.8333 10 10.8333Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 4.99998C10.4603 4.99998 10.8334 4.62688 10.8334 4.16665C10.8334 3.70641 10.4603 3.33331 10 3.33331C9.53978 3.33331 9.16669 3.70641 9.16669 4.16665C9.16669 4.62688 9.53978 4.99998 10 4.99998Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 16.6666C10.4603 16.6666 10.8334 16.2935 10.8334 15.8333C10.8334 15.3731 10.4603 15 10 15C9.53978 15 9.16669 15.3731 9.16669 15.8333C9.16669 16.2935 9.53978 16.6666 10 16.6666Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>    
                    </button>
                </div>
                <div class="mt-4 flex justify-between items-end">
                    <div class="">
                        <h4 class="text-3xl font-bold">1,210</h4>
                        <div class="mt-4 text-sm flex items-center gap-2">
                            <p class="flex items-center gap-2">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.00002 1.16667V12.8333M7.00002 12.8333L12.8334 7M7.00002 12.8333L1.16669 7" stroke="#F04438" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span class="text-red-700">10%</span>
                            </p>
                            <span class=" text-gray-500"> vs last month</span>
                        </div>
                    </div>
                    <svg width="98" height="50" viewBox="0 0 98 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1C16.5969 2.29974 17.5628 33.4164 33 37C45.7298 39.9551 52.1759 23.1804 65 25C78.9097 26.9737 83.3609 44.4536 97 49H1V1Z" fill="#FEF3F2"/>
                        <path d="M1 1C16.5969 2.29974 17.5628 33.4164 33 37C45.7298 39.9551 52.1759 23.1804 65 25C78.9097 26.9737 83.3609 44.4536 97 49H1V1Z" fill="url(#paint0_linear_2771_11872)"/>
                        <path d="M97 49C83.3609 44.4536 78.9097 26.9737 65 25C52.1759 23.1804 45.7298 39.9551 33 37C17.5628 33.4164 16.5969 2.29974 1 1" stroke="#F04438" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                        <linearGradient id="paint0_linear_2771_11872" x1="49" y1="1" x2="49" y2="49" gradientUnits="userSpaceOnUse">
                        <stop offset="0.641167" stop-color="white" stop-opacity="0"/>
                        <stop offset="1" stop-color="white"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div class="card rounded-md">
                <div class="flex items-center justify-between">
                    <h3 class="text-gray-900 font-medium">Active now</h3>
                    <button>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 9.99998C10.8334 9.53974 10.4603 9.16665 10 9.16665C9.53978 9.16665 9.16669 9.53974 9.16669 9.99998C9.16669 10.4602 9.53978 10.8333 10 10.8333Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 4.99998C10.4603 4.99998 10.8334 4.62688 10.8334 4.16665C10.8334 3.70641 10.4603 3.33331 10 3.33331C9.53978 3.33331 9.16669 3.70641 9.16669 4.16665C9.16669 4.62688 9.53978 4.99998 10 4.99998Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 16.6666C10.4603 16.6666 10.8334 16.2935 10.8334 15.8333C10.8334 15.3731 10.4603 15 10 15C9.53978 15 9.16669 15.3731 9.16669 15.8333C9.16669 16.2935 9.53978 16.6666 10 16.6666Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>    
                    </button>
                </div>
                <div class="mt-4 flex justify-between items-end">
                    <div class="">
                        <h4 class="text-3xl font-bold">316</h4>
                        <div class="mt-4 text-sm flex items-center gap-2">
                            <p class="flex items-center gap-2">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.00002 12.8333V1.16666M7.00002 1.16666L1.16669 6.99999M7.00002 1.16666L12.8334 6.99999" stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span class="text-green-500">20%</span>
                            </p>
                            <span class=" text-gray-500"> vs last month</span>
                        </div>
                    </div>
                    <svg width="98" height="50" viewBox="0 0 98 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M97 1C81.4031 2.29974 80.4372 33.4164 65 37C52.2702 39.9551 45.8241 23.1804 33 25C19.0903 26.9737 14.6391 44.4536 1 49H97V1Z" fill="#ECFDF3"/>
                        <path d="M97 1C81.4031 2.29974 80.4372 33.4164 65 37C52.2702 39.9551 45.8241 23.1804 33 25C19.0903 26.9737 14.6391 44.4536 1 49H97V1Z" fill="url(#paint0_linear_2771_11890)"/>
                        <path d="M1 49C14.6391 44.4536 19.0903 26.9737 33 25C45.8241 23.1804 52.2702 39.9551 65 37C80.4372 33.4164 81.4031 2.29974 97 1" stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                        <linearGradient id="paint0_linear_2771_11890" x1="49" y1="1" x2="49" y2="49" gradientUnits="userSpaceOnUse">
                        <stop offset="0.641167" stop-color="white" stop-opacity="0"/>
                        <stop offset="1" stop-color="white"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn{
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    padding: 10px 16px;
}
.btn1{
    border: 1px solid #D0D5DD
}
.card{
    padding: 20px 16px;
    box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
    border: 1px solid #EAECF0;
}
@media only screen and (min-width: 1024px){
    .card{
        padding: 30px 16px
    }
}
</style>