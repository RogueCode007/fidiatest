<template>
  <div class="mt-6 lg:mt-0 px-4 lg:px-16 lg:pt-6 lg:pb-12">
      <div class="lg:flex flex-row-reverse justify-between">
          <div class="relative" style="max-height: 42px">
                <svg class="absolute left-2 searchicon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              <input type="text" placeholder="Search" class="py-2 w-full border rounded pl-8 focus:outline-none focus:ring-purple-600 focus:ring-1">
          </div>
          <div class="mt-4 lg:mt-0 lg:flex flex-row-reverse gap-6 items-center filtersection">
              <button class="py-2 border rounded flex gap-4 justify-center items-center w-full">
                    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 6H13.5M1 1H16M6 11H11" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="text-sm text-gray-700">Edit Filters</span>
              </button>
              <div class="mt-4 lg:mt-0 flex items-center gap-4 w-full">
                    <p class="flex items-center gap-2 bg-purple-100 p-1 rounded-lg">
                        <span class="text-xs text-purple-600">All time</span>
                        <button>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7M1 1L7 7" stroke="#9E77ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </p>
                    <p class="flex items-center gap-2 bg-purple-100 p-1 rounded-lg">
                        <span class="text-xs text-purple-600">US, AU, +4</span>
                        <button>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7M1 1L7 7" stroke="#9E77ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </p>
              </div>
          </div>
      </div>
      <div class="tablecont overflow-x-auto lg:drop-shadow">
            <table v-if="results.length > 0" class="w-full mt-8 shadow-md">
                <thead class="">
                    <tr>
                        <th class="font-medium text-gray-500 text-xs">
                            <input type="checkbox" class="accent-purple-600">
                        </th>
                        <th class="font-medium text-gray-500 text-xs flex items-center gap-2">
                            <span class="">Company</span>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.99998 1.33333V10.6667M5.99998 10.6667L10.6666 6M5.99998 10.6667L1.33331 6" stroke="#667085" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </th>
                        <th class="font-medium text-gray-500 text-xs">License use</th>
                        <th class="font-medium text-gray-500 text-xs">Status</th>
                        <th class="font-medium text-gray-500 text-xs">Users</th>
                        <th class="font-medium text-gray-500 text-xs">About</th>
                        <th class="font-medium text-gray-500 text-xs"></th>
                        <th class="font-medium text-gray-500 text-xs"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="" v-for="(company, index) in results" :key="index">
                        <td>
                            <input type="checkbox" class="accent-purple-600">
                        </td>
                        <td>
                            <div class="flex gap-4 items-start">
                                <div class="imgbox rounded-full">
                                    <img :src="company.img" alt="" class="object-fit object-center">
                                </div>
                                <div>
                                    <h5 class="text-gray-900 text-sm font-medium">{{company.company}}</h5>
                                    <p class="text-sm text-gray-500">{{company.website}}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="meter bg-purple-100">
                                <span class="fill block h-full bg-purple-600" :style="{ width : company.license + '%'}"></span>
                            </div>
                        </td>
                        <td>
                            <div v-if="company.status == 'active'" class="inline bg-green-100 p-1 rounded-md text-xs">
                                <span class="text-green-500">Customer</span>
                            </div>
                            <div v-else class="inline bg-gray-100 p-1 rounded-md text-xs">
                                <span class="text-gray-700">Churned</span>
                            </div>
                        </td>
                        <td>
                            <div class="flex items-center circlebox">
                                <div v-for="(user, index) in company.users" :key="index" class="circle bg-gray-100" :class="[index > 4 ? 'hidden' : '']">
                                </div>
                                <div v-if="company.users.length > 5" class="circle numbercircle flex items-center justify-center bg-purple-100">
                                    <span class="text-xs text-purple-600 rounded-full">+{{company.users.length - 5}}</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <h5 class="text-gray-900 text-sm font-medium">{{company.about}}</h5>
                                <p class="text-sm text-gray-500">{{company.info}}</p>
                            </div>
                        </td>
                        <td>
                            <button>
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 5.00001H3.16667M3.16667 5.00001H16.5M3.16667 5.00001V16.6667C3.16667 17.1087 3.34226 17.5326 3.65482 17.8452C3.96738 18.1577 4.39131 18.3333 4.83333 18.3333H13.1667C13.6087 18.3333 14.0326 18.1577 14.3452 17.8452C14.6577 17.5326 14.8333 17.1087 14.8333 16.6667V5.00001H3.16667ZM5.66667 5.00001V3.33334C5.66667 2.89131 5.84226 2.46739 6.15482 2.15483C6.46738 1.84227 6.89131 1.66667 7.33333 1.66667H10.6667C11.1087 1.66667 11.5326 1.84227 11.8452 2.15483C12.1577 2.46739 12.3333 2.89131 12.3333 3.33334V5.00001M7.33333 9.16667V14.1667M10.6667 9.16667V14.1667" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </td>
                        <td>
                            <button>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.1667 2.5C14.3855 2.28113 14.6454 2.10752 14.9313 1.98906C15.2173 1.87061 15.5238 1.80965 15.8333 1.80965C16.1429 1.80965 16.4493 1.87061 16.7353 1.98906C17.0213 2.10752 17.2811 2.28113 17.5 2.5C17.7189 2.71887 17.8925 2.97871 18.0109 3.26468C18.1294 3.55064 18.1903 3.85714 18.1903 4.16667C18.1903 4.4762 18.1294 4.7827 18.0109 5.06866C17.8925 5.35463 17.7189 5.61447 17.5 5.83334L6.24999 17.0833L1.66666 18.3333L2.91666 13.75L14.1667 2.5Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr class="mt-8 lg:hidden">
            <div class="mt-4 flex px-4 py-4 items-center justify-between lg:hidden">
                <button>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.8334 7.00002H1.16669M1.16669 7.00002L7.00002 12.8334M1.16669 7.00002L7.00002 1.16669" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <p class="text-gray-700 text-sm">Page 1 of 10</p>
                <button>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.16669 7.00002H12.8334M12.8334 7.00002L7.00002 1.16669M12.8334 7.00002L7.00002 12.8334" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
      </div>
      <div class="hidden lg:flex justify-between p-2 items-center border shadow-md actionbox">
          <div class="flex gap-4">
              <button class="text-gray-700 text-sm border font-medium py-2 px-4 rounded-md">Previous</button>
              <button class="text-gray-700 text-sm border font-medium py-2 px-4 rounded-md">Next</button>
          </div>
          <p class="text-gray-700 text-sm font-medium">Page 1 of 10</p>
      </div>
  </div>
</template>

<script>
import image1 from "~/assets/img/Avatar.png"
import image2 from "~/assets/img/Avatar (1).png"
import image3 from "~/assets/img/Avatar (2).png"
import image4 from "~/assets/img/Avatar (3).png"
import image5 from "~/assets/img/Avatar (4).png"
import image6 from "~/assets/img/Avatar (5).png"
import image7 from "~/assets/img/Avatar (6).png"
export default {
    data(){
        return {
            results: [
                {img: image1, company: 'Catalog', website: 'catalogapp.io', license: 90, status: 'active', users: [{name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}], about: 'Content curating app', info: 'Brings all your news into one place'},
                {img: image2, company: 'Circooles', website: 'getcircooles.com', license: 80, status: 'inactive', users: [{name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''},], about: 'Design Software', info: 'Super lightweight design app'},
                {img: image3, company: 'Command+R', website: 'cmdr.ai', license: 30, status: 'active', users: [{name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''},], about: 'Data Prediction', info: 'AI and Machine learning data'},
                {img: image4, company: 'Hourglass', website: 'hourglass.app', license: 90, status: 'active', users: [{name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''},], about: 'Productivity App', info: 'Time management and productivity app'},
                {img: image5, company: 'Layers', website: 'getlayers.io', license: 20, status: 'inactive', users: [{name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''},], about: 'Web app integrations', info: 'Connect web apps seamlessly'},
                {img: image6, company: 'Quotient', website: 'quotient.co', license: 10, status: 'active', users: [{name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''},], about: 'Sales CRM', info: 'Web-based sales doc management'},
                {img: image7, company: 'Sisyphus', website: 'sisyphus.com', license: 30, status: 'active', users: [{name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''},], about: 'Automation and workflow', info: 'Time tracking, invoicing and expenses'},
            ]
        }
    }
}
</script>

<style scoped>
.searchicon{
    top: 50%;
    transform: translateY(-50%);
}
.imgbox{
    width: 40px;
    height: 40px;
    
}
th, td{
    padding: 8px;
    text-align: left;
}
thead{
    border-bottom: 1px solid #F2F4F7;
    
}
.tablecont{
    margin-top: 12px;
}
.meter{
    width: 88px;
    height: 8px;
    border-radius: 4px;
}
.fill{
    border-radius: 4px;
}
.tablecont::-webkit-scrollbar
{
  height: 0;
}
thead th:nth-child(2){
    min-width: 250px;  
}
thead th:nth-child(3){
    min-width: 150px;  
}
thead th:nth-child(4){
    min-width: 150px;  
}
thead th:nth-child(5){
    min-width: 150px;  
}
thead th:nth-child(6){
    min-width: 300px;  
}
.circle{
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #F9F5FF
}
.circle:nth-child(2){
    transform: translateX(-10px);
    z-index: 1
}
.circle:nth-child(3){
    transform: translateX(-20px);
    z-index: 2
}
.circle:nth-child(4){
    transform: translateX(-30px);
    z-index: 3
}
.circle:nth-child(5){
    transform: translateX(-40px);
    z-index: 4
}
.numbercircle{
    transform: translateX(-50px);
    z-index: 5
}

@media only screen and (min-width: 1024px){
    .filtersection{
        min-width: 400px
    }
    .tablecont{
        border: 1px solid #F2F4F7;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }
    td{
        padding: 10px
    }
    .actionbox{
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
    }
}
</style>