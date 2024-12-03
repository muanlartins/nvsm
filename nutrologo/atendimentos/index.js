Chart.register(ChartDataLabels);

const total = 7442;
const rem = 16;

const light = '#EBF3E0';
const dark = '#131E05';

Chart.defaults.borderColor = '#d4dbca';
Chart.defaults.color = dark;

const generateRandomColor = () => {
  const MAX = 16;
  const colorCount = 6;

  const colorNumbers = 
    [...Array(colorCount).keys()].map(
      () => Math.floor(Math.random() * MAX)
    );
  
  const colorCharacters = colorNumbers.map((number) => number.toString(16));

  const colorString = colorCharacters.join('');
  
  return `#${colorString}`;
}

const generateRandomColors = (count) => {
  return [...Array(count).keys()].map(() => generateRandomColor());
}

const datalabels = {
  color: light,
  font: {
    weight: 'bold',
    size: 0.75 * rem,
  },
  backgroundColor: (context) => dark,
  padding: 0.25 * rem,
  borderRadius: 0.25 * rem
}

const tooltip = {
  backgroundColor: dark,
  callbacks: {
    label: (context) => {
      const value = context.raw;

      const percentage = parseFloat((value/total * 100).toFixed(2));

      return ` ${value} (${percentage}%)`;
    },
  }
}

const pieOptions = {
  plugins: {
    legend: {
      labels: {
        color: dark
      }
    },
    tooltip,
    datalabels: {
      ...datalabels,
      formatter: (value, context) => {
        const percentage = (value/total * 100).toFixed(2);
    
        return `${value} (${percentage}%)`;
      },
    }
  }
};

const horizontalBarOptions = {
  plugins: {
    legend: {
      display: false
    },
    tooltip,
    datalabels: {
      ...datalabels,
      formatter: (value, context) => {
        return value;
      },
    }
  },
  indexAxis: 'y',
  maintainAspectRatio: false,
};

const verticalBarOptions = {
  plugins: {
    legend: {
      display: false
    },
    tooltip,
    datalabels
  },
  maintainAspectRatio: false,
  scales: {
    y: {
      display: false
    }
  }
};

const doughnutOptions = {
  plugins: {
    legend: {
      labels: {
        color: dark
      }
    },
    tooltip,
    datalabels: {
      ...datalabels,
      formatter: (value, context) => {
        return `${value}%`;
      },
    }
  }
};

new Chart(document.getElementById('graph-1'), {
  type: 'pie',    
  data: {
    labels: ['Filhotes', 'Adultos', 'Idosos'],
    datasets: [{
      data: [380, 3372, 3328],
    }]
  },
  options: pieOptions
});

new Chart(document.getElementById('graph-2'), {
  type: 'pie',
  data: {
    labels: ['Filhotes', 'Adultos', 'Idosos'],
    datasets: [{
      data: [11, 143, 209],
    }]
  },
  options: pieOptions
});

new Chart(document.getElementById('graph-3'), {
  type: 'bar',
  data: {
    labels: ['Chihuahua', 'Schnauzer', 'Golden', 'Dachshund', 'Maltês', 'Bulldog Francês', 'Poodle', 'Yorkshire Terrier', 'Shih Tzu', 'Sem Raça Definida'],
    datasets: [{
      data: [193, 209, 248, 297, 325, 347, 506, 765, 1012, 1188],
      backgroundColor: generateRandomColors(10),
    }]
  },
  options: horizontalBarOptions
});

new Chart(document.getElementById('graph-4'), {
  type: 'bar',
  data: {
    labels: ['Chartreux', 'Sphynx', 'Bengal', 'Ragdoll', 'Sagrado da Birmânia', 'Siamês', 'Persa', 'Sem Raça Definida'],
    datasets: [{
      data: [6, 11, 11, 17, 33, 66, 66, 154],
      backgroundColor: generateRandomColors(8),
    }]
  },
  options: horizontalBarOptions
});

new Chart(document.getElementById('graph-5'), {
  type: 'bar',
  data: {
    labels: ['Fêmeas', 'Fêmeas Castradas', 'Fêmeas Inteiras', 'Machos', 'Machos Castrados', 'Machos Inteiros'],
    datasets: [{
      data: [3845, 3229, 605, 3234, 2305, 930],
      backgroundColor: generateRandomColors(6),
      datalabels: {
        align: 'start',
        anchor: 'end'
      }
    }]
  },
  options: verticalBarOptions
});

new Chart(document.getElementById('graph-6'), {
  type: 'bar',
  data: {
    labels: ['Fêmeas', 'Fêmeas Castradas', 'Fêmeas Inteiras', 'Machos', 'Machos Castrados', 'Machos Inteiros'],
    datasets: [{
      data: [204, 198, 6, 160, 154, 6],
      backgroundColor: generateRandomColors(6),
      datalabels: {
        align: 'end',
        anchor: 'end'
      }
    }],
  },
  options: verticalBarOptions
});

new Chart(document.getElementById('graph-7'), {
  type: 'bar',
  data: {
    labels: ['Obesidade Grau III', 'Obesidade Grau II', 'Obesidade Grau I', 'Eutrofia', 'Depleção Grau I', 'Depleção Grau II', 'Depleção Grau III'],
    datasets: [{
      data: [462, 1040, 1370, 2222, 1238, 600, 143],
      backgroundColor: generateRandomColors(7),
    }]
  },
  options: horizontalBarOptions
});

new Chart(document.getElementById('graph-8'), {
  type: 'bar',
  data: {
    labels: ['Obesidade Grau III', 'Obesidade Grau II', 'Obesidade Grau I', 'Eutrofia', 'Depleção Grau I', 'Depleção Grau II', 'Depleção Grau III'],
    datasets: [{
      data: [17, 22, 83, 110, 72, 33, 17],
      backgroundColor: generateRandomColors(7),
    }]
  },
  options: horizontalBarOptions
});

new Chart(document.getElementById('graph-9'), {
  type: 'doughnut',
  data: {
    labels: ['Saudáveis', 'Só 1 patologia', 'Mais de 1 patologia'],
    datasets: [{
      data: [11, 25, 64],
    }]
  },
  options: doughnutOptions
});

new Chart(document.getElementById('graph-10'), {
  type: 'doughnut',
  data: {
    labels: ['Saudáveis', 'Só 1 patologia', 'Mais de 1 patologia'],
    datasets: [{
      data: [6, 42, 52],
    }]
  },
  options: doughnutOptions
});

new Chart(document.getElementById('graph-11'), {
  type: 'bar',
  data: {
    labels: ['CA', 'Hipersensibilidade Alimentar', 'Hiperadrenocorticismo', 'Fisiológica', 'Urolitíases', 'Hepatopatias', 'Cardiopatias', 'Obesidade', 'DRC', 'Gastroenteropatias'],
    datasets: [{
      data: [512, 666, 748, 787, 1018, 1276, 1364, 1513, 1623, 1799],
      backgroundColor: generateRandomColors(10),
    }]
  },
  options: horizontalBarOptions
});

new Chart(document.getElementById('graph-12'), {
  type: 'bar',
  data: {
    labels: ['Pancreatite', 'Hipersensibilidade Alimentar', 'Fisiológica', 'CA', 'Hipotireoidismo', 'Gastroenteropatias', 'Obesidade', 'Hepatopatias', 'Urolitíases', 'DRC'],
    datasets: [{
      data: [11, 17, 22, 22, 22, 50, 66, 66, 83, 160],
      backgroundColor: generateRandomColors(10),
    }]
  },
  options: horizontalBarOptions
});