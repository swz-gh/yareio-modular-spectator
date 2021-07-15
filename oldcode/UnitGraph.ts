class UnitGraph {
  constructor(battleHud: any) {
    this.graphData = [];
    this.lastTData = null;
    this.battleHud = battleHud;
  }

  graphData: { tick: number; values: number[] }[];
  lastTData: any;
  graphIndex: number = 0;
  battleHud: any;

  buildGraphData() {
    let w: any = window;
    // @ts-ignore
    console.log(w, window, w.game_blocks, window.game_blocks);
    let gameBlocks: [string, Game_Block][] = Object.entries(w.game_blocks);

    if (this.lastTData != w.active_block) {
      this.graphData = gameBlocks
        .map((e) => ({
          tick: parseInt(e[0].substr(1)),
          values: [
            (Object.values(e[1].p1) as []).reduce(
              (r, s) => (s[3] ? r + s[1] : r),
              0
            ) * (w.shapes.shape1 == "squares" ? 112 / 200 : 1),
            (Object.values(e[1].p2) as []).reduce(
              (r, s) => (s[3] ? r + s[1] : r),
              0
            ) * (w.shapes.shape2 == "squares" ? 112 / 200 : 1),
          ],
        }))
        .sort((a, b) => b.tick - a.tick);
      this.lastTData = w.active_block;
    }
    this.graphIndex++;
  }

  drawGraph(index: number, color: string) {
    if (this.graphData.length > 0) {
      this.battleHud.ctx.strokeStyle = color;
      this.battleHud.ctx.beginPath();
      let x = this.battleHud.hud.width;
      this.battleHud.ctx.moveTo(
        --x,
        this.battleHud.hud.height - 80 - this.graphData[0].values[index]
      );
      console.log(this.graphData);
      this.graphData.forEach((data) => {
        this.battleHud.ctx.lineTo(
          --x,
          this.battleHud.hud.height - 80 - data.values[index]
        );
      });

      this.battleHud.ctx.stroke();
    }
  }
}

export default UnitGraph;
