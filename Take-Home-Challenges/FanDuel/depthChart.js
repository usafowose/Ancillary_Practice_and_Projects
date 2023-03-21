// Most team sports have a depth chart (a ranking of each player) for each position they have. For Example in NFL: Aaron Rodgers is listed as the starting QB and first on the QB depth chart. Jordan Love, his 
//backup is listed as the 2nd person on that depth chart. We want to implement functionality that will manage these depth charts.
//Add players to the depthchart to manage positions, order, players
// player may have different positions
//•assume 1 team
// position could gave multiple players
// top of list would be first string, followed by second (according to position) / add players to depth chart (rank, pos)
//• QB Depth Chart - • 1: • Alex, • 2: • Casey
// WR- Depth Chart - 1: Bob, 2: Alex
var Position;
(function (Position) {
    Position["RB"] = "RB";
    Position["QB"] = "QB";
    Position["WR"] = "WR";
    Position["TE"] = "TE";
})(Position || (Position = {}));
;
class DepthChart {
    constructor(position, player) {
        const chart = {
            'QB': [],
            'RB': [],
            'WR': [],
            'TE': [],
        };
        if (position && player) {
            this._chart = Object.assign(Object.assign({}, chart), { [position]: [player] });
            return;
        }
        this._chart = chart;
        return;
    }
    get chart() {
        return this._chart;
    }
    get qbs() {
        return this._chart['QB'];
    }
    get rbs() {
        return this._chart['RB'];
    }
    get wrs() {
        return this._chart['WR'];
    }
    get tes() {
        return this._chart['TE'];
    }
    get starters() {
        return {
            'QB': this.qbs[0],
            'RB': this.rbs[0],
            'WR': this.wrs[0],
            'TE': this.tes[0],
        };
    }
    _addPlayer(position, player, rank) {
        let positionChart = [...this._chart[position]];
        if (rank <= 1) {
            positionChart[0] = player;
            this._chart[position] = positionChart;
            return;
        }
        if (rank === positionChart.length) {
            positionChart.push(player);
            this._chart[position] = positionChart;
        }
        if (rank === positionChart.length + 1) {
            positionChart.push(player);
            this._chart[position] = positionChart;
            return;
        }
        if (rank > positionChart.length + 1) {
            while (positionChart.length < rank - 1) {
                positionChart.push(null);
            }
            positionChart.push(player);
            this._chart[position] = positionChart;
            return;
        }
        if (positionChart[rank - 1] === null) {
            positionChart.splice(rank - 1, 1, player);
            this._chart[position] = positionChart;
            return;
        }
        positionChart.splice(rank - 1, 0, player);
        this._chart[position] = positionChart;
        return;
    }
    addQB(player, rank) {
        return this._addPlayer(Position.QB, player, rank);
    }
    addRB(player, rank) {
        return this._addPlayer(Position.RB, player, rank);
    }
    addWR(player, rank) {
        return this._addPlayer(Position.WR, player, rank);
    }
    addTE(player, rank) {
        return this._addPlayer(Position.TE, player, rank);
    }
    addMultiplePlayers(playersByPosition) {
        const positionsToAdd = Object.keys(playersByPosition);
        for (const position of positionsToAdd) {
            for (const { id, name, rank } of playersByPosition[position]) {
                this._addPlayer(position, { id, name }, rank);
            }
        }
    }
}
const ravensChart = new DepthChart(Position.TE, { id: 1, name: 'Mark Andrews' });
const aBrown = { id: 3, name: 'Anthony Brown', rank: 3 };
const tHunt = { id: 2, name: 'Tyler Huntley', rank: 2 };
const QB = [aBrown, tHunt];
const zayLike = {
    id: 2,
    name: 'Isaiah Likely',
    rank: 2
};
const cKolar = {
    id: 4,
    name: 'Charlie Kolar',
    rank: 4
};
const TE = [zayLike, cKolar];
const jkDobbins = {
    id: 1,
    name: 'JK Dobbins',
    rank: 1
};
const gusEdwards = {
    id: 2,
    name: 'Gus Edwards',
    rank: 2
};
const justiceHill = {
    id: 3,
    name: 'Justice Hill',
    rank: 3
};
const kenyanDrake = {
    id: 4,
    name: 'Kenyan Drake',
    rank: 4
};
const RB = [kenyanDrake, gusEdwards, jkDobbins, justiceHill];
ravensChart.addMultiplePlayers({ QB, TE, RB, });
const lJackson = { name: "Lamar Jackson", id: 943, rank: 1, };
const posq = { name: 'notNice', id: 11, rank: 11 };
const posr = { name: 'notNice', id: 12, rank: 12 };
const poss = { name: 'notNice', id: 14, rank: 14 };
const post = { name: 'notNice', id: 13, rank: 13 };
const rbs = [posq, posr, poss, post];
const tes = [...rbs];
ravensChart.addMultiplePlayers({
    RB: rbs,
    TE: tes,
    QB: [lJackson]
});
console.log(ravensChart.chart);
