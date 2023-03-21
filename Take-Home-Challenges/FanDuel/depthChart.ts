// Most team sports have a depth chart (a ranking of each player) for each position they have. For Example in NFL: Aaron Rodgers is listed as the starting QB and first on the QB depth chart. Jordan Love, his 
//backup is listed as the 2nd person on that depth chart. We want to implement functionality that will manage these depth charts.
//Add players to the depthchart to manage positions, order, players
// player may have different positions
//•assume 1 team
// position could gave multiple players
// top of list would be first string, followed by second (according to position) / add players to depth chart (rank, pos)
//• QB Depth Chart - • 1: • Alex, • 2: • Casey
// WR- Depth Chart - 1: Bob, 2: Alex


interface Player {
  id: number;
  name: string;
}

interface RankedPlayer extends Player {
  rank: number;
}

enum Position {
  RB = 'RB',
  QB = 'QB',
  WR = 'WR',
  TE = 'TE',
};

class DepthChart {
  private _chart: Record<Position, Player[]>;

  constructor(position?: Position, player?: Player) {
    const chart = {
      'QB': [],
      'RB': [],
      'WR': [],
      'TE': [],
    };
    if (position && player) {
      this._chart = {...chart, [position]: [player]};
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

  get starters(): Record<Position, Player> {
    return {
      'QB': this.qbs[0],
      'RB': this.rbs[0],
      'WR': this.wrs[0],
      'TE': this.tes[0],
    };
  }

  private _addPlayer(position: Position, player: Player, rank: number ): void {
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
      while(positionChart.length < rank - 1) {
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

  public addQB(player: Player, rank: number): void {
    return this._addPlayer(Position.QB, player, rank);
  }

  public addRB(player: Player, rank: number): void {
    return this._addPlayer(Position.RB, player, rank);
  }

  public addWR(player: Player, rank: number): void {
    return this._addPlayer(Position.WR, player, rank);
  }

  public addTE(player: Player, rank: number): void {
    return this._addPlayer(Position.TE, player, rank);
  }

  public addMultiplePlayers(playersByPosition: Partial<Record<Position, RankedPlayer[]>>): void {
    const positionsToAdd = Object.keys(playersByPosition) as Position[];

    for (const position of positionsToAdd) {
      for (const {id, name, rank} of playersByPosition[position]) {
        this._addPlayer(position, {id, name} as Player, rank);
      }
    }
  }
}

const ravensChart: DepthChart = new DepthChart(Position.TE, {id: 1, name: 'Mark Andrews'});

const aBrown: RankedPlayer = {id: 3, name: 'Anthony Brown', rank: 3};
const tHunt = {id: 2, name: 'Tyler Huntley', rank: 2};
const QB: RankedPlayer[] = [aBrown, tHunt];

const zayLike: RankedPlayer = {
  id: 2,
  name: 'Isaiah Likely',
  rank: 2
};

const cKolar: RankedPlayer = {
  id: 4,
  name: 'Charlie Kolar',
  rank: 4
};

const TE: RankedPlayer[] = [zayLike, cKolar];

const jkDobbins: RankedPlayer = {
  id: 1,
  name: 'JK Dobbins',
  rank: 1
};

const gusEdwards: RankedPlayer = {
  id: 2,
  name: 'Gus Edwards',
  rank: 2
};

const justiceHill: RankedPlayer = {
  id: 3,
  name: 'Justice Hill',
  rank: 3
};

const kenyanDrake: RankedPlayer = {
  id: 4,
  name: 'Kenyan Drake',
  rank: 4
};

const RB: [RankedPlayer, RankedPlayer, RankedPlayer, RankedPlayer] = [ kenyanDrake, gusEdwards, jkDobbins, justiceHill ];

ravensChart.addMultiplePlayers({ QB, TE, RB, });

const lJackson: RankedPlayer = { name: "Lamar Jackson", id: 943, rank: 1, };
const posq: RankedPlayer = { name: 'notNice', id: 11, rank: 11 };
const posr: RankedPlayer = { name: 'notNice', id: 12, rank: 12 };
const poss: RankedPlayer = { name: 'notNice', id: 14, rank: 14 };
const post: RankedPlayer = { name: 'notNice', id: 13, rank: 13 };

const rbs = [posq, posr, poss, post];
const tes = [...rbs];

ravensChart.addMultiplePlayers({
  RB: rbs,
  TE: tes,
  QB: [lJackson]
});

console.log(ravensChart.chart);
