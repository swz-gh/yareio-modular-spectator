class BaseHUD {
  prevBaseEnergy: number;
  base: Base;
  economyScore: number;
  economyEfficiency: number;
  totalEconomyScore: number;
  totalEconomyEfficiency: number;
  economyScoreCount: number;

  constructor(base: Base) {
    this.base = base;
    this.prevBaseEnergy = 0;
    this.economyScore = 0;
    this.totalEconomyScore = 0;
    this.totalEconomyEfficiency = 0;
    this.economyScoreCount = 1;
    this.economyEfficiency = 0;
  }

  tick() {
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

  render() {
    battleHud.ctx.fillStyle = this.base.color;
    battleHud.printText(`${this.base.player_id}`);
    battleHud.currentLineYPos += 6;
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

    battleHud.printText(`Unit Count: ${Math.trunc(unitCount)}`);
    battleHud.printText(`Dead Units: ${Math.trunc(deadUnits)}`);
    battleHud.printText(`Energy: ${Math.trunc(totalEnergy)}`);
    battleHud.printText(`Energy Capacity: ${Math.trunc(totalEnergyCapacity)}`);
    battleHud.printText(
      `Economy Score (energy/s): ${Math.trunc(this.economyScore)}`
    );
    battleHud.printText(
      `Avg Economy Score (energy/s): ${Math.trunc(
        this.totalEconomyScore / this.economyScoreCount
      )}`
    );
    battleHud.printText(
      `Economic Efficiency: ${this.economyEfficiency.toFixed(2)}`
    );
    battleHud.printText(
      `Avg Economic Efficiency: ${(
        this.totalEconomyEfficiency / this.economyScoreCount
      ).toFixed(2)}`
    );

    battleHud.currentLineYPos += 24;
  }
}
