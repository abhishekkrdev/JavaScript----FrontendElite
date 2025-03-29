// Pick a pivot and place it at its appropriate position
// Place lower element to left and higher to right
// Repeat

const sortArray = function (nums) {
    function quickSort(l, h) {
        if (l >= h) return; // Base case: invalid range
        const index = partition(l, h); // Partition the array
        quickSort(l, index - 1); // Recursively sort left part
        quickSort(index + 1, h); // Recursively sort right part
    }

    function partition(l, h) {
        const pivot = nums[l]; // Choose pivot element
        let pivotIndex = l;

        while (l < h) {
            while (nums[l] <= pivot) l++; // move left pointer
            while (nums[h] > pivot) h--; // Move right pointer
            if (l < h) {
                [nums[l], nums[h]] = [nums[h], nums[l]]; // Swap elements

                l++;
                h--;
            }
        }
        [nums[pivotIndex], nums[h]] = [nums[h], nums[pivotIndex]];
        return h;
    }

    quickSort(0, nums.length - 1); // Start QuickSort
    return nums; // Return the sorted array
};
const arr = [21, 31, 45, 56, 43];
console.log(sortArray(arr));
//you can also go for merge sort
