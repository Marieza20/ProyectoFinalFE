import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import llamadosHabitantes from '../../services/llamadosHabitantes';

function EstadísticaCard() {
  const [habitantes, setHabitantes] = useState([]);
  const [habitantesPorZona, setHabitantesPorZona] = useState({});
  const chartRef = useRef(null);
  let chartInstance = useRef(null);

  const zonasFijas = [
    "Fray Casiano", 
    "20 de Noviembre",
    "Santa Eduviges", 
    "San Luis", 
    "El Huerto", 
    "Carrizal", 
    "Chacarita", 
    "El Porvenir", 
    "Otros"
  ];

  useEffect(() => {
    async function fetchDataHabitantes() {
      const datos = await llamadosHabitantes.get();
      setHabitantes(datos);
    }
    fetchDataHabitantes();
  }, []);

  useEffect(() => {
    const numZona = habitantes.reduce((conteo, habitante) => {
      const zona = habitante.zona;
      conteo[zona] = (conteo[zona] || 0) + 1;
      return conteo;
    }, {});

    const fullNumZona = zonasFijas.reduce((conteo, zona) => {
      conteo[zona] = numZona[zona] || 0;
      return conteo;
    }, {});
    setHabitantesPorZona(fullNumZona);
  }, [habitantes]);

  useEffect(() => {
    if (Object.keys(habitantesPorZona).length > 0 && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: zonasFijas,
          datasets: [{
            label: 'Cantidad de Habitantes de Calle por Zona',
            data: zonasFijas.map(zona => habitantesPorZona[zona]),
            borderWidth: 1,
          }],
        },
        options: {
          responsive: true,  // Hacer que el gráfico sea responsivo
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Cantidad de Habitantes de Calle',
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [habitantesPorZona]);

  return (
    <div id="div">
      <div id="main">
        <canvas ref={chartRef} id="myChart"></canvas>
      </div>
    </div>
  );
}

export default EstadísticaCard;
