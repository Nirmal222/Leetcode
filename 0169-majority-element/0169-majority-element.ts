function majorityElement(nums: number[]): number {
    let candidate:number;
    let count:number = 0;
    // [2,2,1,2,1,1,2]
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        
        count += (num === candidate) ? 1 : -1
    }
    
    return candidate;
};