<template>
    <div class="lg:flex justify-between items-center px-16 py-2 border-b">
        <ul class="flex gap-4 items-center">
            <li class="text-gray-700 font-medium hover:text-purple-600 cursor-pointer">Overview</li>
            <li class="text-gray-700 font-medium hover:text-purple-600 cursor-pointer">Notifications</li>
            <li class="text-gray-700 font-medium hover:text-purple-600 cursor-pointer">Analytics</li>
            <li class="text-gray-700 font-medium hover:text-purple-600 cursor-pointer">Saved Reports</li>
            <li class="text-gray-700 font-medium hover:text-purple-600 cursor-pointer">Trade History</li>
            <li class="text-gray-700 font-medium hover:text-purple-600 cursor-pointer">User Reports</li>
            <li class="text-gray-700 font-medium hover:text-purple-600 cursor-pointer">Home</li>
        </ul>
        <div class="relative">
            <svg class="absolute left-2 searchicon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input type="text" placeholder="Search" class="py-2 w-full border rounded pl-8 focus:outline-none focus:ring-purple-600 focus:ring-1">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.searchicon{
    top: 50%;
    transform: translateY(-50%);
}
</style>