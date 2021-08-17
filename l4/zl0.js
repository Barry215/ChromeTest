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

function zlzl101(s) {
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

function zlzl102(s) {
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

function zlzl103(s) {
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

function zlzl104(s) {
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

function zlzl105(s) {
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

function zlzl106(s) {
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

function zlzl107(s) {
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

function zlzl108(s) {
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

function zlzl109(s) {
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

function zlzl110(s) {
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

function zlzl111(s) {
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

function zlzl112(s) {
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

function zlzl113(s) {
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

function zlzl114(s) {
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

function zlzl115(s) {
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

function zlzl116(s) {
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

function zlzl117(s) {
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

function zlzl118(s) {
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

function zlzl119(s) {
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

function zlzl120(s) {
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

function zlzl121(s) {
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

function zlzl122(s) {
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

function zlzl123(s) {
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

function zlzl124(s) {
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

function zlzl125(s) {
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

function zlzl126(s) {
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

function zlzl127(s) {
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

function zlzl128(s) {
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

function zlzl129(s) {
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

function zlzl130(s) {
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

function zlzl131(s) {
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

function zlzl132(s) {
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

function zlzl133(s) {
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

function zlzl134(s) {
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

function zlzl135(s) {
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

function zlzl136(s) {
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

function zlzl137(s) {
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

function zlzl138(s) {
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

function zlzl139(s) {
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

function zlzl140(s) {
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

function zlzl141(s) {
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

function zlzl142(s) {
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

function zlzl143(s) {
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

function zlzl144(s) {
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

function zlzl145(s) {
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

function zlzl146(s) {
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

function zlzl147(s) {
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

function zlzl148(s) {
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

function zlzl149(s) {
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

function zlzl150(s) {
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

function zlzl151(s) {
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

function zlzl152(s) {
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

function zlzl153(s) {
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

function zlzl154(s) {
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

function zlzl155(s) {
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

function zlzl156(s) {
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

function zlzl157(s) {
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

function zlzl158(s) {
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

function zlzl159(s) {
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

function zlzl160(s) {
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

function zlzl161(s) {
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

function zlzl162(s) {
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

function zlzl163(s) {
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

function zlzl164(s) {
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

function zlzl165(s) {
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

function zlzl166(s) {
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

function zlzl167(s) {
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

function zlzl168(s) {
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

function zlzl169(s) {
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

function zlzl170(s) {
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

function zlzl171(s) {
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

function zlzl172(s) {
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

function zlzl173(s) {
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

function zlzl174(s) {
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

function zlzl175(s) {
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

function zlzl176(s) {
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

function zlzl177(s) {
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

function zlzl178(s) {
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

function zlzl179(s) {
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

function zlzl180(s) {
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

function zlzl181(s) {
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

function zlzl182(s) {
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

function zlzl183(s) {
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

function zlzl184(s) {
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

function zlzl185(s) {
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

function zlzl186(s) {
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

function zlzl187(s) {
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

function zlzl188(s) {
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

function zlzl189(s) {
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

function zlzl190(s) {
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

function zlzl191(s) {
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

function zlzl192(s) {
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

function zlzl193(s) {
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

function zlzl194(s) {
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

function zlzl195(s) {
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

function zlzl196(s) {
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

function zlzl197(s) {
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

function zlzl198(s) {
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

function zlzl199(s) {
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

function zlzl200(s) {
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

function zlzl201(s) {
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

function zlzl202(s) {
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

function zlzl203(s) {
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

function zlzl204(s) {
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

function zlzl205(s) {
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

function zlzl206(s) {
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

function zlzl207(s) {
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

function zlzl208(s) {
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

function zlzl209(s) {
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

function zlzl210(s) {
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

function zlzl211(s) {
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

function zlzl212(s) {
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

function zlzl213(s) {
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

function zlzl214(s) {
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

function zlzl215(s) {
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

function zlzl216(s) {
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

function zlzl217(s) {
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

function zlzl218(s) {
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

function zlzl219(s) {
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

function zlzl220(s) {
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

function zlzl221(s) {
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

function zlzl222(s) {
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

function zlzl223(s) {
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

function zlzl224(s) {
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

function zlzl225(s) {
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

function zlzl226(s) {
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

function zlzl227(s) {
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

function zlzl228(s) {
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

function zlzl229(s) {
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

function zlzl230(s) {
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

function zlzl231(s) {
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

function zlzl232(s) {
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

function zlzl233(s) {
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

function zlzl234(s) {
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

function zlzl235(s) {
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

function zlzl236(s) {
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

function zlzl237(s) {
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

function zlzl238(s) {
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

function zlzl239(s) {
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

function zlzl240(s) {
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

function zlzl241(s) {
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

function zlzl242(s) {
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

function zlzl243(s) {
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

function zlzl244(s) {
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

function zlzl245(s) {
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

function zlzl246(s) {
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

function zlzl247(s) {
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

function zlzl248(s) {
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

function zlzl249(s) {
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

function zlzl250(s) {
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

function zlzl251(s) {
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

function zlzl252(s) {
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

function zlzl253(s) {
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

function zlzl254(s) {
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

function zlzl255(s) {
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

function zlzl256(s) {
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

function zlzl257(s) {
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

function zlzl258(s) {
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

function zlzl259(s) {
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

function zlzl260(s) {
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

function zlzl261(s) {
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

function zlzl262(s) {
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

function zlzl263(s) {
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

function zlzl264(s) {
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

function zlzl265(s) {
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

function zlzl266(s) {
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

function zlzl267(s) {
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

function zlzl268(s) {
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

function zlzl269(s) {
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

function zlzl270(s) {
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

function zlzl271(s) {
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

function zlzl272(s) {
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

function zlzl273(s) {
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

function zlzl274(s) {
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

function zlzl275(s) {
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

function zlzl276(s) {
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

function zlzl277(s) {
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

function zlzl278(s) {
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

function zlzl279(s) {
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

function zlzl280(s) {
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

function zlzl281(s) {
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

function zlzl282(s) {
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

function zlzl283(s) {
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

function zlzl284(s) {
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

function zlzl285(s) {
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

function zlzl286(s) {
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

function zlzl287(s) {
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

function zlzl288(s) {
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

function zlzl289(s) {
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

function zlzl290(s) {
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

function zlzl291(s) {
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

function zlzl292(s) {
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

function zlzl293(s) {
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

function zlzl294(s) {
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

function zlzl295(s) {
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

function zlzl296(s) {
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

function zlzl297(s) {
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

function zlzl298(s) {
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

function zlzl299(s) {
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

function zlzl300(s) {
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

function zlzl301(s) {
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

function zlzl302(s) {
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

function zlzl303(s) {
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

function zlzl304(s) {
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

function zlzl305(s) {
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

function zlzl306(s) {
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

function zlzl307(s) {
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

function zlzl308(s) {
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

function zlzl309(s) {
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

function zlzl310(s) {
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

function zlzl311(s) {
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

function zlzl312(s) {
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

function zlzl313(s) {
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

function zlzl314(s) {
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

function zlzl315(s) {
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

function zlzl316(s) {
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

function zlzl317(s) {
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

function zlzl318(s) {
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

function zlzl319(s) {
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

function zlzl320(s) {
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

function zlzl321(s) {
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

function zlzl322(s) {
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

function zlzl323(s) {
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

function zlzl324(s) {
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

function zlzl325(s) {
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

function zlzl326(s) {
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

function zlzl327(s) {
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

function zlzl328(s) {
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

function zlzl329(s) {
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

function zlzl330(s) {
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

function zlzl331(s) {
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

function zlzl332(s) {
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

function zlzl333(s) {
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

function zlzl334(s) {
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

function zlzl335(s) {
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

function zlzl336(s) {
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

function zlzl337(s) {
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

function zlzl338(s) {
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

function zlzl339(s) {
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

function zlzl340(s) {
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

function zlzl341(s) {
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

function zlzl342(s) {
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

function zlzl343(s) {
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

function zlzl344(s) {
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

function zlzl345(s) {
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

function zlzl346(s) {
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

function zlzl347(s) {
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

function zlzl348(s) {
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

function zlzl349(s) {
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

function zlzl350(s) {
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

function zlzl351(s) {
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

function zlzl352(s) {
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

function zlzl353(s) {
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

function zlzl354(s) {
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

function zlzl355(s) {
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

function zlzl356(s) {
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

function zlzl357(s) {
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

function zlzl358(s) {
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

function zlzl359(s) {
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

function zlzl360(s) {
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

function zlzl361(s) {
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

function zlzl362(s) {
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

function zlzl363(s) {
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

function zlzl364(s) {
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

function zlzl365(s) {
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

function zlzl366(s) {
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

function zlzl367(s) {
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

function zlzl368(s) {
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

function zlzl369(s) {
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

function zlzl370(s) {
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

function zlzl371(s) {
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

function zlzl372(s) {
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

function zlzl373(s) {
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

function zlzl374(s) {
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

function zlzl375(s) {
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

function zlzl376(s) {
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

function zlzl377(s) {
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

function zlzl378(s) {
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

function zlzl379(s) {
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

function zlzl380(s) {
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

function zlzl381(s) {
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

function zlzl382(s) {
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

function zlzl383(s) {
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

function zlzl384(s) {
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

function zlzl385(s) {
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

function zlzl386(s) {
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

function zlzl387(s) {
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

function zlzl388(s) {
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

function zlzl389(s) {
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

function zlzl390(s) {
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

function zlzl391(s) {
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

function zlzl392(s) {
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

function zlzl393(s) {
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

function zlzl394(s) {
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

function zlzl395(s) {
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

function zlzl396(s) {
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

function zlzl397(s) {
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

function zlzl398(s) {
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

function zlzl399(s) {
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

function zlzl400(s) {
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

function zlzl401(s) {
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

function zlzl402(s) {
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

function zlzl403(s) {
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

function zlzl404(s) {
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

function zlzl405(s) {
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

function zlzl406(s) {
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

function zlzl407(s) {
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

function zlzl408(s) {
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

function zlzl409(s) {
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

function zlzl410(s) {
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

function zlzl411(s) {
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

function zlzl412(s) {
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

function zlzl413(s) {
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

function zlzl414(s) {
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

function zlzl415(s) {
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

function zlzl416(s) {
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

function zlzl417(s) {
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

function zlzl418(s) {
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

function zlzl419(s) {
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

function zlzl420(s) {
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

function zlzl421(s) {
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

function zlzl422(s) {
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

function zlzl423(s) {
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

function zlzl424(s) {
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

function zlzl425(s) {
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

function zlzl426(s) {
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

function zlzl427(s) {
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

function zlzl428(s) {
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

function zlzl429(s) {
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

function zlzl430(s) {
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

function zlzl431(s) {
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

function zlzl432(s) {
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

function zlzl433(s) {
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

function zlzl434(s) {
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

function zlzl435(s) {
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

function zlzl436(s) {
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

function zlzl437(s) {
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

function zlzl438(s) {
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

function zlzl439(s) {
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

function zlzl440(s) {
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

function zlzl441(s) {
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

function zlzl442(s) {
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

function zlzl443(s) {
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

function zlzl444(s) {
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

function zlzl445(s) {
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

function zlzl446(s) {
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

function zlzl447(s) {
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

function zlzl448(s) {
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

function zlzl449(s) {
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

function zlzl450(s) {
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

function zlzl451(s) {
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

function zlzl452(s) {
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

function zlzl453(s) {
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

function zlzl454(s) {
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

function zlzl455(s) {
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

function zlzl456(s) {
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

function zlzl457(s) {
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

function zlzl458(s) {
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

function zlzl459(s) {
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

function zlzl460(s) {
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

function zlzl461(s) {
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

function zlzl462(s) {
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

function zlzl463(s) {
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

function zlzl464(s) {
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

function zlzl465(s) {
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

function zlzl466(s) {
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

function zlzl467(s) {
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

function zlzl468(s) {
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

function zlzl469(s) {
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

function zlzl470(s) {
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

function zlzl471(s) {
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

function zlzl472(s) {
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

function zlzl473(s) {
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

function zlzl474(s) {
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

function zlzl475(s) {
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

function zlzl476(s) {
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

function zlzl477(s) {
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

function zlzl478(s) {
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

function zlzl479(s) {
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

function zlzl480(s) {
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

function zlzl481(s) {
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

function zlzl482(s) {
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

function zlzl483(s) {
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

function zlzl484(s) {
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

function zlzl485(s) {
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

function zlzl486(s) {
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

function zlzl487(s) {
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

function zlzl488(s) {
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

function zlzl489(s) {
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

function zlzl490(s) {
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

function zlzl491(s) {
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

function zlzl492(s) {
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

function zlzl493(s) {
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

function zlzl494(s) {
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

function zlzl495(s) {
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

function zlzl496(s) {
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

function zlzl497(s) {
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

function zlzl498(s) {
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

function zlzl499(s) {
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

function zlzl500(s) {
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

function zlzl501(s) {
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

function zlzl502(s) {
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

function zlzl503(s) {
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

function zlzl504(s) {
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

function zlzl505(s) {
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

function zlzl506(s) {
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

function zlzl507(s) {
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

function zlzl508(s) {
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

function zlzl509(s) {
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

function zlzl510(s) {
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

function zlzl511(s) {
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

function zlzl512(s) {
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

function zlzl513(s) {
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

function zlzl514(s) {
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

function zlzl515(s) {
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

function zlzl516(s) {
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

function zlzl517(s) {
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

function zlzl518(s) {
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

function zlzl519(s) {
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

function zlzl520(s) {
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

function zlzl521(s) {
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

function zlzl522(s) {
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

function zlzl523(s) {
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

function zlzl524(s) {
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

function zlzl525(s) {
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

function zlzl526(s) {
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

function zlzl527(s) {
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

function zlzl528(s) {
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

function zlzl529(s) {
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

function zlzl530(s) {
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

function zlzl531(s) {
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

function zlzl532(s) {
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

function zlzl533(s) {
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

function zlzl534(s) {
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

function zlzl535(s) {
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

function zlzl536(s) {
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

function zlzl537(s) {
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

function zlzl538(s) {
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

function zlzl539(s) {
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

function zlzl540(s) {
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

function zlzl541(s) {
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

function zlzl542(s) {
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

function zlzl543(s) {
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

function zlzl544(s) {
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

function zlzl545(s) {
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

function zlzl546(s) {
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

function zlzl547(s) {
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

function zlzl548(s) {
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

function zlzl549(s) {
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

function zlzl550(s) {
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

function zlzl551(s) {
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

function zlzl552(s) {
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

function zlzl553(s) {
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

function zlzl554(s) {
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

function zlzl555(s) {
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

function zlzl556(s) {
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

function zlzl557(s) {
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

function zlzl558(s) {
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

function zlzl559(s) {
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

function zlzl560(s) {
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

function zlzl561(s) {
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

function zlzl562(s) {
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

function zlzl563(s) {
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

function zlzl564(s) {
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

function zlzl565(s) {
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

function zlzl566(s) {
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

function zlzl567(s) {
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

function zlzl568(s) {
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

function zlzl569(s) {
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

function zlzl570(s) {
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

function zlzl571(s) {
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

function zlzl572(s) {
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

function zlzl573(s) {
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

function zlzl574(s) {
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

function zlzl575(s) {
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

function zlzl576(s) {
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

function zlzl577(s) {
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

function zlzl578(s) {
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

function zlzl579(s) {
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

function zlzl580(s) {
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

function zlzl581(s) {
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

function zlzl582(s) {
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

function zlzl583(s) {
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

function zlzl584(s) {
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

function zlzl585(s) {
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

function zlzl586(s) {
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

function zlzl587(s) {
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

function zlzl588(s) {
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

function zlzl589(s) {
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

function zlzl590(s) {
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

function zlzl591(s) {
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

function zlzl592(s) {
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

function zlzl593(s) {
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

function zlzl594(s) {
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

function zlzl595(s) {
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

function zlzl596(s) {
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

function zlzl597(s) {
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

function zlzl598(s) {
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

function zlzl599(s) {
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

function zlzl600(s) {
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

function zlzl601(s) {
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

function zlzl602(s) {
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

function zlzl603(s) {
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

function zlzl604(s) {
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

function zlzl605(s) {
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

function zlzl606(s) {
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

function zlzl607(s) {
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

function zlzl608(s) {
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

function zlzl609(s) {
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

function zlzl610(s) {
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

function zlzl611(s) {
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

function zlzl612(s) {
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

function zlzl613(s) {
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

function zlzl614(s) {
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

function zlzl615(s) {
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

function zlzl616(s) {
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

function zlzl617(s) {
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

function zlzl618(s) {
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

function zlzl619(s) {
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

function zlzl620(s) {
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

function zlzl621(s) {
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

function zlzl622(s) {
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

function zlzl623(s) {
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

function zlzl624(s) {
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

function zlzl625(s) {
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

function zlzl626(s) {
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

function zlzl627(s) {
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

function zlzl628(s) {
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

function zlzl629(s) {
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

function zlzl630(s) {
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

function zlzl631(s) {
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

function zlzl632(s) {
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

function zlzl633(s) {
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

function zlzl634(s) {
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

function zlzl635(s) {
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

function zlzl636(s) {
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

function zlzl637(s) {
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

function zlzl638(s) {
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

function zlzl639(s) {
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

function zlzl640(s) {
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

function zlzl641(s) {
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

function zlzl642(s) {
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

function zlzl643(s) {
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

function zlzl644(s) {
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

function zlzl645(s) {
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

function zlzl646(s) {
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

function zlzl647(s) {
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

function zlzl648(s) {
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

function zlzl649(s) {
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

function zlzl650(s) {
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

function zlzl651(s) {
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

function zlzl652(s) {
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

function zlzl653(s) {
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

function zlzl654(s) {
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

function zlzl655(s) {
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

function zlzl656(s) {
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

function zlzl657(s) {
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

function zlzl658(s) {
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

function zlzl659(s) {
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

function zlzl660(s) {
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

function zlzl661(s) {
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

function zlzl662(s) {
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

function zlzl663(s) {
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

function zlzl664(s) {
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

function zlzl665(s) {
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

function zlzl666(s) {
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

function zlzl667(s) {
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

function zlzl668(s) {
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

function zlzl669(s) {
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

function zlzl670(s) {
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

function zlzl671(s) {
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

function zlzl672(s) {
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

function zlzl673(s) {
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

function zlzl674(s) {
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

function zlzl675(s) {
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

function zlzl676(s) {
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

function zlzl677(s) {
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

function zlzl678(s) {
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

function zlzl679(s) {
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

function zlzl680(s) {
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

function zlzl681(s) {
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

function zlzl682(s) {
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

function zlzl683(s) {
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

function zlzl684(s) {
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

function zlzl685(s) {
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

function zlzl686(s) {
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

function zlzl687(s) {
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

function zlzl688(s) {
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

function zlzl689(s) {
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

function zlzl690(s) {
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

function zlzl691(s) {
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

function zlzl692(s) {
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

function zlzl693(s) {
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

function zlzl694(s) {
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

function zlzl695(s) {
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

function zlzl696(s) {
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

function zlzl697(s) {
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

function zlzl698(s) {
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

function zlzl699(s) {
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

function zlzl700(s) {
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

function zlzl701(s) {
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

function zlzl702(s) {
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

function zlzl703(s) {
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

function zlzl704(s) {
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

function zlzl705(s) {
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

function zlzl706(s) {
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

function zlzl707(s) {
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

function zlzl708(s) {
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

function zlzl709(s) {
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

function zlzl710(s) {
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

function zlzl711(s) {
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

function zlzl712(s) {
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

function zlzl713(s) {
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

function zlzl714(s) {
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

function zlzl715(s) {
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

function zlzl716(s) {
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

function zlzl717(s) {
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

function zlzl718(s) {
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

function zlzl719(s) {
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

function zlzl720(s) {
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

function zlzl721(s) {
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

function zlzl722(s) {
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

function zlzl723(s) {
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

function zlzl724(s) {
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

function zlzl725(s) {
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

function zlzl726(s) {
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

function zlzl727(s) {
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

function zlzl728(s) {
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

function zlzl729(s) {
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

function zlzl730(s) {
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

function zlzl731(s) {
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

function zlzl732(s) {
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

function zlzl733(s) {
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

function zlzl734(s) {
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

function zlzl735(s) {
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

function zlzl736(s) {
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

function zlzl737(s) {
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

function zlzl738(s) {
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

function zlzl739(s) {
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

function zlzl740(s) {
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

function zlzl741(s) {
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

function zlzl742(s) {
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

function zlzl743(s) {
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

function zlzl744(s) {
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

function zlzl745(s) {
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

function zlzl746(s) {
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

function zlzl747(s) {
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

function zlzl748(s) {
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

function zlzl749(s) {
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

function zlzl750(s) {
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

function zlzl751(s) {
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

function zlzl752(s) {
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

function zlzl753(s) {
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

function zlzl754(s) {
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

function zlzl755(s) {
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

function zlzl756(s) {
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

function zlzl757(s) {
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

function zlzl758(s) {
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

function zlzl759(s) {
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

function zlzl760(s) {
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

function zlzl761(s) {
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

function zlzl762(s) {
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

function zlzl763(s) {
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

function zlzl764(s) {
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

function zlzl765(s) {
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

function zlzl766(s) {
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

function zlzl767(s) {
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

function zlzl768(s) {
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

function zlzl769(s) {
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

function zlzl770(s) {
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

function zlzl771(s) {
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

function zlzl772(s) {
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

function zlzl773(s) {
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

function zlzl774(s) {
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

function zlzl775(s) {
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

function zlzl776(s) {
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

function zlzl777(s) {
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

function zlzl778(s) {
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

function zlzl779(s) {
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

function zlzl780(s) {
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

function zlzl781(s) {
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

function zlzl782(s) {
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

function zlzl783(s) {
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

function zlzl784(s) {
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

function zlzl785(s) {
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

function zlzl786(s) {
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

function zlzl787(s) {
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

function zlzl788(s) {
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

function zlzl789(s) {
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

function zlzl790(s) {
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

function zlzl791(s) {
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

function zlzl792(s) {
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

function zlzl793(s) {
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

function zlzl794(s) {
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

function zlzl795(s) {
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

function zlzl796(s) {
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

function zlzl797(s) {
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

function zlzl798(s) {
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

function zlzl799(s) {
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

function zlzl800(s) {
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

function zlzl801(s) {
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

function zlzl802(s) {
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

function zlzl803(s) {
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

function zlzl804(s) {
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

function zlzl805(s) {
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

function zlzl806(s) {
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

function zlzl807(s) {
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

function zlzl808(s) {
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

function zlzl809(s) {
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

function zlzl810(s) {
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

function zlzl811(s) {
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

function zlzl812(s) {
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

function zlzl813(s) {
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

function zlzl814(s) {
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

function zlzl815(s) {
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

function zlzl816(s) {
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

function zlzl817(s) {
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

function zlzl818(s) {
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

function zlzl819(s) {
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

function zlzl820(s) {
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

function zlzl821(s) {
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

function zlzl822(s) {
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

function zlzl823(s) {
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

function zlzl824(s) {
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

function zlzl825(s) {
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

function zlzl826(s) {
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

function zlzl827(s) {
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

function zlzl828(s) {
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

function zlzl829(s) {
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

function zlzl830(s) {
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

function zlzl831(s) {
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

function zlzl832(s) {
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

function zlzl833(s) {
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

function zlzl834(s) {
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

function zlzl835(s) {
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

function zlzl836(s) {
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

function zlzl837(s) {
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

function zlzl838(s) {
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

function zlzl839(s) {
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

function zlzl840(s) {
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

function zlzl841(s) {
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

function zlzl842(s) {
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

function zlzl843(s) {
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

function zlzl844(s) {
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

function zlzl845(s) {
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

function zlzl846(s) {
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

function zlzl847(s) {
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

function zlzl848(s) {
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

function zlzl849(s) {
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

function zlzl850(s) {
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

function zlzl851(s) {
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

function zlzl852(s) {
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

function zlzl853(s) {
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

function zlzl854(s) {
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

function zlzl855(s) {
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

function zlzl856(s) {
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

function zlzl857(s) {
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

function zlzl858(s) {
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

function zlzl859(s) {
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

function zlzl860(s) {
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

function zlzl861(s) {
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

function zlzl862(s) {
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

function zlzl863(s) {
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

function zlzl864(s) {
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

function zlzl865(s) {
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

function zlzl866(s) {
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

function zlzl867(s) {
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

function zlzl868(s) {
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

function zlzl869(s) {
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

function zlzl870(s) {
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

function zlzl871(s) {
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

function zlzl872(s) {
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

function zlzl873(s) {
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

function zlzl874(s) {
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

function zlzl875(s) {
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

function zlzl876(s) {
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

function zlzl877(s) {
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

function zlzl878(s) {
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

function zlzl879(s) {
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

function zlzl880(s) {
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

function zlzl881(s) {
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

function zlzl882(s) {
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

function zlzl883(s) {
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

function zlzl884(s) {
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

function zlzl885(s) {
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

function zlzl886(s) {
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

function zlzl887(s) {
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

function zlzl888(s) {
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

function zlzl889(s) {
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

function zlzl890(s) {
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

function zlzl891(s) {
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

function zlzl892(s) {
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

function zlzl893(s) {
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

function zlzl894(s) {
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

function zlzl895(s) {
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

function zlzl896(s) {
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

function zlzl897(s) {
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

function zlzl898(s) {
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

function zlzl899(s) {
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

function zlzl900(s) {
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

function zlzl901(s) {
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

function zlzl902(s) {
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

function zlzl903(s) {
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

function zlzl904(s) {
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

function zlzl905(s) {
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

function zlzl906(s) {
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

function zlzl907(s) {
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

function zlzl908(s) {
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

function zlzl909(s) {
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

function zlzl910(s) {
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

function zlzl911(s) {
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

function zlzl912(s) {
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

function zlzl913(s) {
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

function zlzl914(s) {
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

function zlzl915(s) {
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

function zlzl916(s) {
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

function zlzl917(s) {
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

function zlzl918(s) {
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

function zlzl919(s) {
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

function zlzl920(s) {
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

function zlzl921(s) {
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

function zlzl922(s) {
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

function zlzl923(s) {
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

function zlzl924(s) {
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

function zlzl925(s) {
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

function zlzl926(s) {
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

function zlzl927(s) {
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

function zlzl928(s) {
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

function zlzl929(s) {
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

function zlzl930(s) {
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

function zlzl931(s) {
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

function zlzl932(s) {
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

function zlzl933(s) {
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

function zlzl934(s) {
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

function zlzl935(s) {
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

function zlzl936(s) {
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

function zlzl937(s) {
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

function zlzl938(s) {
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

function zlzl939(s) {
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

function zlzl940(s) {
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

function zlzl941(s) {
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

function zlzl942(s) {
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

function zlzl943(s) {
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

function zlzl944(s) {
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

function zlzl945(s) {
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

function zlzl946(s) {
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

function zlzl947(s) {
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

function zlzl948(s) {
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

function zlzl949(s) {
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

function zlzl950(s) {
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

function zlzl951(s) {
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

function zlzl952(s) {
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

function zlzl953(s) {
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

function zlzl954(s) {
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

function zlzl955(s) {
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

function zlzl956(s) {
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

function zlzl957(s) {
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

function zlzl958(s) {
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

function zlzl959(s) {
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

function zlzl960(s) {
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

function zlzl961(s) {
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

function zlzl962(s) {
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

function zlzl963(s) {
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

function zlzl964(s) {
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

function zlzl965(s) {
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

function zlzl966(s) {
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

function zlzl967(s) {
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

function zlzl968(s) {
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

function zlzl969(s) {
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

function zlzl970(s) {
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

function zlzl971(s) {
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

function zlzl972(s) {
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

function zlzl973(s) {
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

function zlzl974(s) {
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

function zlzl975(s) {
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

function zlzl976(s) {
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

function zlzl977(s) {
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

function zlzl978(s) {
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

function zlzl979(s) {
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

function zlzl980(s) {
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

function zlzl981(s) {
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

function zlzl982(s) {
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

function zlzl983(s) {
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

function zlzl984(s) {
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

function zlzl985(s) {
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

function zlzl986(s) {
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

function zlzl987(s) {
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

function zlzl988(s) {
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

function zlzl989(s) {
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

function zlzl990(s) {
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

function zlzl991(s) {
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

function zlzl992(s) {
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

function zlzl993(s) {
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

function zlzl994(s) {
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

function zlzl995(s) {
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

function zlzl996(s) {
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

function zlzl997(s) {
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

function zlzl998(s) {
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

function zlzl999(s) {
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

function zlzl1000(s) {
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

function zlzl1001(s) {
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

function zlzl1002(s) {
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

function zlzl1003(s) {
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

function zlzl1004(s) {
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

function zlzl1005(s) {
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

function zlzl1006(s) {
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

function zlzl1007(s) {
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

function zlzl1008(s) {
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

function zlzl1009(s) {
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

function zlzl1010(s) {
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

