let validurl = /https?:\/\/yare.io\/d\d+\/[a-z0-9]+/;
let isValidURL = validurl.test(window.location.href);
import dragElement from "./dragElement";
import PlayerStats from "./PlayerStats";

import { v4 as uuid } from "uuid";
// https://www.chartjs.org/docs/latest/getting-started/integration.html
import {
  Chart,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  LineController,
  PieController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  Filler,
  Title,
} from "chart.js";

Chart.register(
  LineElement,
  BarElement,
  PointElement,
  BarController,
  LineController,
  PieController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  Filler,
  Title
);

// @ts-ignore rollup-plugin-ejs handles this so shut up
import moduleplayerdata from "./module-player-data.ejs";
// @ts-ignore rollup-plugin-ejs handles this so shut up
import moduleunitgraph from "./module-unit-graph.ejs";
// @ts-ignore @rollup/plugin-url handles this so shut up
import defaultModuleCSS from "./module.css";

// @ts-ignore
const range = (n: number) => [...Array(n).keys()];

console.log("Loaded yareio-spectator (modular)");

let player1stats = new PlayerStats(0);
let player1id = "module-" + uuid();
let player1energyhistory = new Array(25).fill(0);

let player2stats = new PlayerStats(1);
let player2id = "module-" + uuid();
let player2energyhistory = new Array(25).fill(0);

let unitgraphid = "module-" + uuid();
// @ts-ignore
let unitgraph;

function tick() {
  player1stats.tick();
  player2stats.tick();

  // @ts-ignore
  document.querySelector(
    `#${player1id} .moduleBody .moduleBodyContent`
  ).innerHTML = player1stats.getStats();
  // @ts-ignore
  document.querySelector(
    `#${player2id} .moduleBody .moduleBodyContent`
  ).innerHTML = player2stats.getStats();

  player1energyhistory.shift();
  player1energyhistory.push(Math.round(player1stats.getTotalEnergyCapacity()));

  player2energyhistory.shift();
  player2energyhistory.push(Math.round(player2stats.getTotalEnergyCapacity()));

  // @ts-ignore
  unitgraph.data.datasets[0].data = player1energyhistory;
  // @ts-ignore
  unitgraph.data.datasets[1].data = player2energyhistory;

  // @ts-ignore
  unitgraph.update();
}

async function main() {
  console.log("Running yareio-spectator (modular)");

  let container = document.createElement("div");
  container.classList.add("yareio-modular-spectator-container");

  document.body.appendChild(container);

  // Inject css
  container.innerHTML += `<link rel="stylesheet" href="${defaultModuleCSS}">`;

  let modulecontainer = document.createElement("div");
  modulecontainer.classList.add("yareio-modular-spectator-module-container");

  container.appendChild(modulecontainer);

  // Render modules
  {
    modulecontainer.innerHTML += moduleplayerdata({
      id: player1id,
      name: "Player 1 stats",
      content: player1stats.getStats(),
    });

    modulecontainer.innerHTML += moduleplayerdata({
      id: player2id,
      name: "Player 2 stats",
      content: player2stats.getStats(),
    });

    modulecontainer.innerHTML += moduleunitgraph({
      id: unitgraphid,
      name: "Unit Graph",
    });
  }

  // Load graph
  {
    // @ts-ignore
    unitgraph = new Chart(document.getElementById(unitgraphid + "-canvas"), {
      type: "line",
      data: {
        labels: [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24,
        ], // range(25)
        datasets: [
          {
            label: "Player 1", // @ts-ignore
            backgroundColor: window.colors["color1"], // @ts-ignore
            borderColor: window.colors["color1"],
            data: [1, 2, 3, 4, 1, 2, 3, 4],
            tension: 0.4,
          },
          {
            label: "Player 2", // @ts-ignore
            backgroundColor: window.colors["color2"], // @ts-ignore
            borderColor: window.colors["color2"],
            data: [1, 2, 3, 4, 1, 2, 3, 4],
            tension: 0.4,
          },
        ],
      },
      options: {
        transitions: {
          duration: 50,
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Value",
            },
            suggestedMin: 0,
            suggestedMax: 200,
          },
        },
      },
    });
  }

  // Enable dragging of the modules
  {
    dragElement(
      document.getElementById(player1id) || document.createElement("div")
    );
    dragElement(
      document.getElementById(player2id) || document.createElement("div")
    );
    dragElement(
      document.getElementById(unitgraphid) || document.createElement("div")
    );
  }

  // Run every tick
  setInterval(tick, 600);
}

// @ts-ignore
let waiterInteval;

function gameWaiter() {
  // @ts-ignore
  if (incoming.t > 0) {
    // @ts-ignore
    clearInterval(waiterInteval);
    main();
  }
}

if (isValidURL) {
  waiterInteval = setInterval(gameWaiter, 300);
}
