function permute(nums: number[]): number[][] {
    const res: number[][] = [];
    const n = nums.length;

    function bt(CI: number, nums: number[]): void {
        if (CI === n - 1) {
            const perm: number[] = [];
            for (let i = 0; i < n; i++) {
                perm.push(nums[i]);
            }
            res.push(perm);
            return;
        }

        for (let i = CI; i < n; i++) {
            swap(CI, i, nums);
            bt(CI + 1, nums);
            swap(CI, i, nums);
        }
    }

    function swap(CI: number, I: number, nums: number[]): void {
        [nums[CI], nums[I]] = [nums[I], nums[CI]];
    }

    bt(0, nums);
    return res;
};