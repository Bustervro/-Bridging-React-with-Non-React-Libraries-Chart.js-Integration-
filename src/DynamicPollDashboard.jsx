import { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function DynamicPollDashboard() {
  const [votes, setVotes] = useState({
    React: 0,
    Vue: 0,
    Angular: 0,
  });

  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const vote = (framework) => {
    setVotes((prev) => ({
      ...prev,
      [framework]: prev[framework] + 1,
    }));
  };

  useEffect(() => {
    const chartData = [
      votes.React,
      votes.Vue,
      votes.Angular,
    ];

    if (!chartInstanceRef.current) {
      chartInstanceRef.current = new Chart(canvasRef.current, {
        type: "bar",
        data: {
          labels: ["React", "Vue", "Angular"],
          datasets: [
            {
              label: "Votes",
              data: chartData,
            },
          ],
        },
      });
    } else {
      chartInstanceRef.current.data.datasets[0].data = chartData;
      chartInstanceRef.current.update();
    }

    // Destroying the old chart prevents multiple Chart.js
    // instances from being attached to the same canvas,
    // which can cause rendering errors and memory leaks.
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [votes]);

  return (
    <div className="container">
      <h1>Favorite JavaScript Framework</h1>

      <div className="buttons">
        <button onClick={() => vote("React")}>
          Vote React
        </button>

        <button onClick={() => vote("Vue")}>
          Vote Vue
        </button>

        <button onClick={() => vote("Angular")}>
          Vote Angular
        </button>
      </div>

      <canvas ref={canvasRef}></canvas>

      <div className="results">
        <p>React: {votes.React}</p>
        <p>Vue: {votes.Vue}</p>
        <p>Angular: {votes.Angular}</p>
      </div>
    </div>
  );
}

export default DynamicPollDashboard;
