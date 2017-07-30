class Solution {
public:
    vector<vector<int>> updateMatrix(vector<vector<int>>& matrix) {
        int m = matrix.size(), n = matrix[0].size();

        //这个是用来 减少代码量的 代表当前坐标的上下左右
        vector<vector<int>> dirs{{0,-1},{-1,0},{0,1},{1,0}};
        queue<pair<int, int>> q;

        //遍历整个矩阵  等于0的放入队列
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (matrix[i][j] == 0) q.push({i, j});
                else matrix[i][j] = INT_MAX;
            }
        }

        while (!q.empty()) {
            auto t = q.front(); q.pop();
            for (auto dir : dirs) {
                int x = t.first + dir[0], y = t.second + dir[1];
                if (x < 0 || x >= m || y < 0 || y >= n ||
                matrix[x][y] <= matrix[t.first][t.second]) continue;
                //当当前值大于周围值的时候  更新节点值
                matrix[x][y] = matrix[t.first][t.second] + 1;
                //放入队列中
                q.push({x, y});
            }
        }
        return matrix;
    }
};