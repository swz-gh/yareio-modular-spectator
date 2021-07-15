class PlayerStats {
  prevBaseEnergy: number = 0;
  base: any;
  basenum: number;
  economyScore: number = 0;
  economyEfficiency: number = 0;
  totalEconomyScore: number = 0;
  totalEconomyEfficiency: number = 0;
  economyScoreCount: number = 1;

  constructor(base: number) {
    // @ts-ignore
    this.base = window.bases[this.basenum];
    this.basenum = base;
  }

  tick() {
    // @ts-ignore
    this.base = window.bases[this.basenum];
    let tempEnergy: number = this.base.energy;

    if (this.prevBaseEnergy > tempEnergy) {
      tempEnergy += this.base.current_spirit_cost;
    }

    this.economyScore = tempEnergy - this.prevBaseEnergy;
    this.economyEfficiency =
      this.economyScore /
      living_spirits
        .filter((x) => x.player_id == this.base.player_id && x.hp != 0)
        .reduce((r, s) => r + s.size, 0);
    this.totalEconomyScore += this.economyScore;
    this.totalEconomyEfficiency += this.economyEfficiency;
    this.prevBaseEnergy = this.base.energy;
    this.economyScoreCount++;
  }

  getTotalEnergyCapacity() {
    let units = living_spirits.filter(
      (x) => x.player_id == this.base.player_id && x.hp != 0
    );
    return units.reduce((sum, s) => (sum += s.energy_capacity), 0);
  }

  getStats() {
    // @ts-ignore
    this.base = window.bases[this.basenum];
    let text = "";
    let units = living_spirits.filter(
      (x) => x.player_id == this.base.player_id && x.hp != 0
    );
    let deadUnits = living_spirits.filter(
      (x) => x.player_id == this.base.player_id && x.hp == 0
    ).length;
    let unitCount = units.length;
    let totalEnergy = units.reduce((sum, s) => (sum += s.energy), 0);
    let totalEnergyCapacity = units.reduce(
      (sum, s) => (sum += s.energy_capacity),
      0
    );

    text += `Unit Count: ${Math.trunc(unitCount)}\n`;
    text += `Dead Units: ${Math.trunc(deadUnits)}\n`;
    text += `Energy: ${Math.trunc(totalEnergy)}\n`;
    text += `Energy Capacity: ${Math.trunc(totalEnergyCapacity)}\n`;
    text += `Economy Score (energy/s): ${Math.trunc(this.economyScore)}\n`;
    text += `Avg Economy Score (energy/s): ${Math.trunc(
      this.totalEconomyScore / this.economyScoreCount
    )}\n`;
    text += `Economic Efficiency: ${this.economyEfficiency.toFixed(2)}\n`;
    text += `Avg Economic Efficiency: ${(
      this.totalEconomyEfficiency / this.economyScoreCount
    ).toFixed(2)}\n`;

    return text;
  }
}

export default PlayerStats;
