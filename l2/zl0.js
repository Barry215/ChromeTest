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

function zlzl11(s) {
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

function zlzl12(s) {
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

function zlzl13(s) {
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

function zlzl14(s) {
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

function zlzl15(s) {
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

function zlzl16(s) {
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

function zlzl17(s) {
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

function zlzl18(s) {
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

function zlzl19(s) {
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

function zlzl20(s) {
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

function zlzl21(s) {
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

function zlzl22(s) {
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

function zlzl23(s) {
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

function zlzl24(s) {
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

function zlzl25(s) {
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

function zlzl26(s) {
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

function zlzl27(s) {
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

function zlzl28(s) {
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

function zlzl29(s) {
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

function zlzl30(s) {
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

function zlzl31(s) {
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

function zlzl32(s) {
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

function zlzl33(s) {
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

function zlzl34(s) {
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

function zlzl35(s) {
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

function zlzl36(s) {
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

function zlzl37(s) {
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

function zlzl38(s) {
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

function zlzl39(s) {
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

function zlzl40(s) {
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

function zlzl41(s) {
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

function zlzl42(s) {
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

function zlzl43(s) {
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

function zlzl44(s) {
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

function zlzl45(s) {
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

function zlzl46(s) {
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

function zlzl47(s) {
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

function zlzl48(s) {
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

function zlzl49(s) {
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

function zlzl50(s) {
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

function zlzl51(s) {
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

function zlzl52(s) {
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

function zlzl53(s) {
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

function zlzl54(s) {
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

function zlzl55(s) {
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

function zlzl56(s) {
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

function zlzl57(s) {
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

function zlzl58(s) {
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

function zlzl59(s) {
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

function zlzl60(s) {
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

function zlzl61(s) {
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

function zlzl62(s) {
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

function zlzl63(s) {
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

function zlzl64(s) {
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

function zlzl65(s) {
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

function zlzl66(s) {
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

function zlzl67(s) {
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

function zlzl68(s) {
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

function zlzl69(s) {
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

function zlzl70(s) {
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

function zlzl71(s) {
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

function zlzl72(s) {
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

function zlzl73(s) {
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

function zlzl74(s) {
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

function zlzl75(s) {
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

function zlzl76(s) {
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

function zlzl77(s) {
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

function zlzl78(s) {
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

function zlzl79(s) {
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

function zlzl80(s) {
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

function zlzl81(s) {
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

function zlzl82(s) {
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

function zlzl83(s) {
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

function zlzl84(s) {
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

function zlzl85(s) {
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

function zlzl86(s) {
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

function zlzl87(s) {
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

function zlzl88(s) {
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

function zlzl89(s) {
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

function zlzl90(s) {
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

function zlzl91(s) {
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

function zlzl92(s) {
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

function zlzl93(s) {
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

function zlzl94(s) {
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

function zlzl95(s) {
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

function zlzl96(s) {
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

function zlzl97(s) {
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

function zlzl98(s) {
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

function zlzl99(s) {
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

function zlzl100(s) {
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

