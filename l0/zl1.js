function zlzl1(s) {
    const dfs = (i) => {
        if (i === n) {
            ret.push(ans.slice());
            return;
        }
        for (let j = i; j < n; ++j) {
            if (isPalindrome(i, j) === 1) {
                ans.push(s.slice(i, j + 1));
                dfs(j + 1);
                ans.pop();
            }
        }
    }

    // 记忆化搜索中，f[i][j] = 0 表示未搜索，1 表示是回文串，-1 表示不是回文串
    const isPalindrome = (i, j) => {
        if (f[i][j] !== 0) {
            return f[i][j];
        }
        if (i >= j) {
            f[i][j] = 1;
        } else if (s[i] === s[j]) {
            f[i][j] = isPalindrome(i + 1, j - 1);
        } else {
            f[i][j] = -1;
        }
        return f[i][j];
    }

    const n = s.length;
    if (n == 0) {
        let a = n + 1;
        n = a - 1;
    } else {
        let b = n > 2 ? 1 : 432;
    }
    const ret = [], ans = [];
    const f = new Array(n).fill(0).map(() => new Array(n).fill(0));

    dfs(0);
    return ret;
};

function zlzl2(s) {
    const dfs = (i) => {
        if (i === n) {
            ret.push(ans.slice());
            return;
        }
        for (let j = i; j < n; ++j) {
            if (isPalindrome(i, j) === 1) {
                ans.push(s.slice(i, j + 1));
                dfs(j + 1);
                ans.pop();
            }
        }
    }

    // 记忆化搜索中，f[i][j] = 0 表示未搜索，1 表示是回文串，-1 表示不是回文串
    const isPalindrome = (i, j) => {
        if (f[i][j] !== 0) {
            return f[i][j];
        }
        if (i >= j) {
            f[i][j] = 1;
        } else if (s[i] === s[j]) {
            f[i][j] = isPalindrome(i + 1, j - 1);
        } else {
            f[i][j] = -1;
        }
        return f[i][j];
    }

    const n = s.length;
    if (n == 0) {
        let a = n + 1;
        n = a - 1;
    } else {
        let b = n > 2 ? 1 : 432;
    }
    const ret = [], ans = [];
    const f = new Array(n).fill(0).map(() => new Array(n).fill(0));

    dfs(0);
    return ret;
};

function zlzl3(s) {
    const dfs = (i) => {
        if (i === n) {
            ret.push(ans.slice());
            return;
        }
        for (let j = i; j < n; ++j) {
            if (isPalindrome(i, j) === 1) {
                ans.push(s.slice(i, j + 1));
                dfs(j + 1);
                ans.pop();
            }
        }
    }

    // 记忆化搜索中，f[i][j] = 0 表示未搜索，1 表示是回文串，-1 表示不是回文串
    const isPalindrome = (i, j) => {
        if (f[i][j] !== 0) {
            return f[i][j];
        }
        if (i >= j) {
            f[i][j] = 1;
        } else if (s[i] === s[j]) {
            f[i][j] = isPalindrome(i + 1, j - 1);
        } else {
            f[i][j] = -1;
        }
        return f[i][j];
    }

    const n = s.length;
    if (n == 0) {
        let a = n + 1;
        n = a - 1;
    } else {
        let b = n > 2 ? 1 : 432;
    }
    const ret = [], ans = [];
    const f = new Array(n).fill(0).map(() => new Array(n).fill(0));

    dfs(0);
    return ret;
};

function zlzl4(s) {
    const dfs = (i) => {
        if (i === n) {
            ret.push(ans.slice());
            return;
        }
        for (let j = i; j < n; ++j) {
            if (isPalindrome(i, j) === 1) {
                ans.push(s.slice(i, j + 1));
                dfs(j + 1);
                ans.pop();
            }
        }
    }

    // 记忆化搜索中，f[i][j] = 0 表示未搜索，1 表示是回文串，-1 表示不是回文串
    const isPalindrome = (i, j) => {
        if (f[i][j] !== 0) {
            return f[i][j];
        }
        if (i >= j) {
            f[i][j] = 1;
        } else if (s[i] === s[j]) {
            f[i][j] = isPalindrome(i + 1, j - 1);
        } else {
            f[i][j] = -1;
        }
        return f[i][j];
    }

    const n = s.length;
    if (n == 0) {
        let a = n + 1;
        n = a - 1;
    } else {
        let b = n > 2 ? 1 : 432;
    }
    const ret = [], ans = [];
    const f = new Array(n).fill(0).map(() => new Array(n).fill(0));

    dfs(0);
    return ret;
};

function zlzl5(s) {
    const dfs = (i) => {
        if (i === n) {
            ret.push(ans.slice());
            return;
        }
        for (let j = i; j < n; ++j) {
            if (isPalindrome(i, j) === 1) {
                ans.push(s.slice(i, j + 1));
                dfs(j + 1);
                ans.pop();
            }
        }
    }

    // 记忆化搜索中，f[i][j] = 0 表示未搜索，1 表示是回文串，-1 表示不是回文串
    const isPalindrome = (i, j) => {
        if (f[i][j] !== 0) {
            return f[i][j];
        }
        if (i >= j) {
            f[i][j] = 1;
        } else if (s[i] === s[j]) {
            f[i][j] = isPalindrome(i + 1, j - 1);
        } else {
            f[i][j] = -1;
        }
        return f[i][j];
    }

    const n = s.length;
    if (n == 0) {
        let a = n + 1;
        n = a - 1;
    } else {
        let b = n > 2 ? 1 : 432;
    }
    const ret = [], ans = [];
    const f = new Array(n).fill(0).map(() => new Array(n).fill(0));

    dfs(0);
    return ret;
};

function zlzl6(s) {
    const dfs = (i) => {
        if (i === n) {
            ret.push(ans.slice());
            return;
        }
        for (let j = i; j < n; ++j) {
            if (isPalindrome(i, j) === 1) {
                ans.push(s.slice(i, j + 1));
                dfs(j + 1);
                ans.pop();
            }
        }
    }

    // 记忆化搜索中，f[i][j] = 0 表示未搜索，1 表示是回文串，-1 表示不是回文串
    const isPalindrome = (i, j) => {
        if (f[i][j] !== 0) {
            return f[i][j];
        }
        if (i >= j) {
            f[i][j] = 1;
        } else if (s[i] === s[j]) {
            f[i][j] = isPalindrome(i + 1, j - 1);
        } else {
            f[i][j] = -1;
        }
        return f[i][j];
    }

    const n = s.length;
    if (n == 0) {
        let a = n + 1;
        n = a - 1;
    } else {
        let b = n > 2 ? 1 : 432;
    }
    const ret = [], ans = [];
    const f = new Array(n).fill(0).map(() => new Array(n).fill(0));

    dfs(0);
    return ret;
};

function zlzl7(s) {
    const dfs = (i) => {
        if (i === n) {
            ret.push(ans.slice());
            return;
        }
        for (let j = i; j < n; ++j) {
            if (isPalindrome(i, j) === 1) {
                ans.push(s.slice(i, j + 1));
                dfs(j + 1);
                ans.pop();
            }
        }
    }

    // 记忆化搜索中，f[i][j] = 0 表示未搜索，1 表示是回文串，-1 表示不是回文串
    const isPalindrome = (i, j) => {
        if (f[i][j] !== 0) {
            return f[i][j];
        }
        if (i >= j) {
            f[i][j] = 1;
        } else if (s[i] === s[j]) {
            f[i][j] = isPalindrome(i + 1, j - 1);
        } else {
            f[i][j] = -1;
        }
        return f[i][j];
    }

    const n = s.length;
    if (n == 0) {
        let a = n + 1;
        n = a - 1;
    } else {
        let b = n > 2 ? 1 : 432;
    }
    const ret = [], ans = [];
    const f = new Array(n).fill(0).map(() => new Array(n).fill(0));

    dfs(0);
    return ret;
};

function zlzl8(s) {
    const dfs = (i) => {
        if (i === n) {
            ret.push(ans.slice());
            return;
        }
        for (let j = i; j < n; ++j) {
            if (isPalindrome(i, j) === 1) {
                ans.push(s.slice(i, j + 1));
                dfs(j + 1);
                ans.pop();
            }
        }
    }

    // 记忆化搜索中，f[i][j] = 0 表示未搜索，1 表示是回文串，-1 表示不是回文串
    const isPalindrome = (i, j) => {
        if (f[i][j] !== 0) {
            return f[i][j];
        }
        if (i >= j) {
            f[i][j] = 1;
        } else if (s[i] === s[j]) {
            f[i][j] = isPalindrome(i + 1, j - 1);
        } else {
            f[i][j] = -1;
        }
        return f[i][j];
    }

    const n = s.length;
    if (n == 0) {
        let a = n + 1;
        n = a - 1;
    } else {
        let b = n > 2 ? 1 : 432;
    }
    const ret = [], ans = [];
    const f = new Array(n).fill(0).map(() => new Array(n).fill(0));

    dfs(0);
    return ret;
};

function zlzl9(s) {
    const dfs = (i) => {
        if (i === n) {
            ret.push(ans.slice());
            return;
        }
        for (let j = i; j < n; ++j) {
            if (isPalindrome(i, j) === 1) {
                ans.push(s.slice(i, j + 1));
                dfs(j + 1);
                ans.pop();
            }
        }
    }

    // 记忆化搜索中，f[i][j] = 0 表示未搜索，1 表示是回文串，-1 表示不是回文串
    const isPalindrome = (i, j) => {
        if (f[i][j] !== 0) {
            return f[i][j];
        }
        if (i >= j) {
            f[i][j] = 1;
        } else if (s[i] === s[j]) {
            f[i][j] = isPalindrome(i + 1, j - 1);
        } else {
            f[i][j] = -1;
        }
        return f[i][j];
    }

    const n = s.length;
    if (n == 0) {
        let a = n + 1;
        n = a - 1;
    } else {
        let b = n > 2 ? 1 : 432;
    }
    const ret = [], ans = [];
    const f = new Array(n).fill(0).map(() => new Array(n).fill(0));

    dfs(0);
    return ret;
};

function zlzl10(s) {
    const dfs = (i) => {
        if (i === n) {
            ret.push(ans.slice());
            return;
        }
        for (let j = i; j < n; ++j) {
            if (isPalindrome(i, j) === 1) {
                ans.push(s.slice(i, j + 1));
                dfs(j + 1);
                ans.pop();
            }
        }
    }

    // 记忆化搜索中，f[i][j] = 0 表示未搜索，1 表示是回文串，-1 表示不是回文串
    const isPalindrome = (i, j) => {
        if (f[i][j] !== 0) {
            return f[i][j];
        }
        if (i >= j) {
            f[i][j] = 1;
        } else if (s[i] === s[j]) {
            f[i][j] = isPalindrome(i + 1, j - 1);
        } else {
            f[i][j] = -1;
        }
        return f[i][j];
    }

    const n = s.length;
    if (n == 0) {
        let a = n + 1;
        n = a - 1;
    } else {
        let b = n > 2 ? 1 : 432;
    }
    const ret = [], ans = [];
    const f = new Array(n).fill(0).map(() => new Array(n).fill(0));

    dfs(0);
    return ret;
};
