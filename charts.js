/* ═══════════════════════════════════════════════════════════════
   CHARTS.JS — All Chart.js visualizations + animations
   ═══════════════════════════════════════════════════════════════ */

const MINT = '#6ee7b7';
const PERI = '#818cf8';
const PINK = '#f472b6';
const GOLD = '#fbbf24';
const RED = '#f87171';
const DIM = '#6b7084';
const GRID = 'rgba(255,255,255,0.04)';
const MINT20 = 'rgba(110,231,183,0.2)';
const PERI20 = 'rgba(129,140,248,0.2)';

Chart.defaults.color = '#8b8fa3';
Chart.defaults.font.family = "'Sora','JetBrains Mono',sans-serif";
Chart.defaults.font.size = 11;
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.pointStyle = 'circle';
Chart.defaults.scale = Chart.defaults.scale || {};

// ─── Share Donut ──────────────────────────────
new Chart(document.getElementById('shareDonut'), {
    type: 'doughnut',
    data: {
        labels: ['codetorso', 'forthatredditguy'],
        datasets: [{ data: [6427, 5361], backgroundColor: [MINT, PERI], borderWidth: 0, borderRadius: 6 }]
    },
    options: {
        cutout: '72%',
        plugins: { legend: { position: 'bottom' } },
        animation: { animateRotate: true, duration: 1800 }
    }
});

// ─── Monthly Activity Stacked ──────────────────
const months = ['2025-02', '2025-03', '2025-04', '2025-05', '2025-06', '2025-07', '2025-08', '2025-09', '2025-10', '2025-11', '2025-12', '2026-01', '2026-02'];
const ctMonthly = [2008, 1720, 316, 189, 457, 337, 465, 70, 5, 391, 27, 4, 438];
const frMonthly = [1647, 1484, 266, 158, 379, 288, 377, 45, 5, 317, 36, 6, 353];

new Chart(document.getElementById('monthlyChart'), {
    type: 'bar',
    data: {
        labels: months.map(m => { const [y, mo] = m.split('-'); return ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][+mo] + ' ' + y.slice(2); }),
        datasets: [
            { label: 'codetorso', data: ctMonthly, backgroundColor: MINT, borderRadius: 4, barPercentage: 0.7 },
            { label: 'forthatredditguy', data: frMonthly, backgroundColor: PERI, borderRadius: 4, barPercentage: 0.7 }
        ]
    },
    options: {
        responsive: true,
        plugins: { legend: { position: 'top' } },
        scales: {
            x: { stacked: true, grid: { color: GRID } },
            y: { stacked: true, grid: { color: GRID }, beginAtZero: true }
        },
        animation: { duration: 1500, easing: 'easeOutQuart' }
    }
});

// ─── Hourly Bar ─────────────────────────────────
const hourlyData = [1734, 1337, 786, 416, 302, 101, 84, 239, 65, 69, 241, 396, 276, 201, 430, 349, 362, 152, 404, 669, 561, 366, 1045, 1203];
new Chart(document.getElementById('hourlyBar'), {
    type: 'bar',
    data: {
        labels: Array.from({ length: 24 }, (_, i) => i + ':00'),
        datasets: [{ label: 'Messages', data: hourlyData, backgroundColor: hourlyData.map(v => v > 1000 ? PINK : v > 500 ? PERI : MINT + '66'), borderRadius: 3, barPercentage: 0.8 }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { x: { grid: { display: false } }, y: { grid: { color: GRID }, beginAtZero: true } }
    }
});

// ─── Day of Week ────────────────────────────────
const dowLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const dowData = [1330, 1212, 1228, 1731, 1657, 2568, 2062];
new Chart(document.getElementById('dowBar'), {
    type: 'bar',
    data: {
        labels: dowLabels,
        datasets: [{ label: 'Messages', data: dowData, backgroundColor: dowData.map(v => v > 2000 ? PINK : v > 1500 ? PERI : MINT + '88'), borderRadius: 5, barPercentage: 0.65 }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { x: { grid: { color: GRID }, beginAtZero: true }, y: { grid: { display: false } } }
    }
});

// ─── Topic Radar ────────────────────────────────
const topicLabels = ['Money & Finance', 'Career & Ambition', 'Education', 'Personal Life', 'Programming', 'India & Politics', 'Tech Industry'];
const ctTopics = [17.82, 17.28, 16.11, 15.25, 13.99, 10.92, 8.62];
const frTopics = [16.28, 17.89, 15.70, 17.63, 15.70, 9.20, 7.59];
new Chart(document.getElementById('topicRadar'), {
    type: 'radar',
    data: {
        labels: topicLabels,
        datasets: [
            { label: 'codetorso', data: ctTopics, borderColor: MINT, backgroundColor: MINT20, pointBackgroundColor: MINT, borderWidth: 2, pointRadius: 4 },
            { label: 'forthatredditguy', data: frTopics, borderColor: PERI, backgroundColor: PERI20, pointBackgroundColor: PERI, borderWidth: 2, pointRadius: 4 }
        ]
    },
    options: {
        responsive: true,
        scales: { r: { grid: { color: GRID }, angleLines: { color: GRID }, ticks: { backdropColor: 'transparent', color: DIM }, pointLabels: { font: { size: 11 } } } },
        plugins: { legend: { position: 'bottom' } }
    }
});

// ─── Sentiment Line ─────────────────────────────
const sentMonths = ['Feb 25', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan 26', 'Feb'];
const ctSent = [0.389, 0.357, 0.312, 0.647, 0.283, 0.385, 0.545, 0.545, 1.0, 0.167, 0.333, 1.0, -0.026];
const frSent = [0.016, 0.019, 0.333, -0.231, -0.222, -0.333, 0.086, 0.455, 0.0, 0.037, 0.0, 0.0, -0.038];
new Chart(document.getElementById('sentimentLine'), {
    type: 'line',
    data: {
        labels: sentMonths,
        datasets: [
            { label: 'codetorso', data: ctSent, borderColor: MINT, backgroundColor: MINT20, fill: true, tension: 0.4, pointRadius: 5, pointHoverRadius: 8 },
            { label: 'forthatredditguy', data: frSent, borderColor: PERI, backgroundColor: PERI20, fill: true, tension: 0.4, pointRadius: 5, pointHoverRadius: 8 }
        ]
    },
    options: {
        responsive: true,
        plugins: { legend: { position: 'top' } },
        scales: {
            x: { grid: { color: GRID } },
            y: { grid: { color: GRID }, min: -0.5, max: 1.1, ticks: { callback: v => v > 0 ? '+' + v : v } }
        }
    }
});

// ─── Top Words ──────────────────────────────────
function wordChart(id, words, color) {
    const labels = words.map(w => w[0]);
    const data = words.map(w => w[1]);
    new Chart(document.getElementById(id), {
        type: 'bar',
        data: { labels, datasets: [{ data, backgroundColor: color + '88', borderColor: color, borderWidth: 1, borderRadius: 3, barPercentage: 0.7 }] },
        options: {
            indexAxis: 'y',
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { x: { grid: { color: GRID }, beginAtZero: true }, y: { grid: { display: false }, ticks: { font: { family: "'JetBrains Mono',monospace", size: 10 } } } }
        }
    });
}
wordChart('wordsA', [['like', 441], ['get', 296], ['one', 263], ['dont', 234], ['even', 233], ['yeah', 206], ['good', 203], ['think', 189], ['know', 168], ['also', 166]], MINT);
wordChart('wordsB', [['dont', 251], ['like', 226], ['lol', 210], ['even', 201], ['one', 152], ['yup', 137], ['get', 134], ['people', 132], ['know', 129], ['yeah', 122]], PERI);

// ─── Vocab Growth ───────────────────────────────
const vgMonths = ['Feb 25', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan 26', 'Feb'];
new Chart(document.getElementById('vocabGrowth'), {
    type: 'line',
    data: {
        labels: vgMonths,
        datasets: [
            { label: 'codetorso', data: [2561, 3529, 3686, 3773, 4086, 4358, 4614, 4664, 4665, 5073, 5084, 5087, 5446], borderColor: MINT, backgroundColor: MINT20, fill: true, tension: 0.35, pointRadius: 4 },
            { label: 'forthatredditguy', data: [2887, 4416, 4619, 4748, 5056, 5309, 5740, 5784, 5788, 6127, 6162, 6166, 6639], borderColor: PERI, backgroundColor: PERI20, fill: true, tension: 0.35, pointRadius: 4 }
        ]
    },
    options: {
        responsive: true,
        plugins: { legend: { position: 'top' } },
        scales: { x: { grid: { color: GRID } }, y: { grid: { color: GRID }, beginAtZero: true } }
    }
});

// ─── Engagement ─────────────────────────────────
new Chart(document.getElementById('engagementBar'), {
    type: 'bar',
    data: {
        labels: ['Response Speed', 'Message Length', 'Question Asking', 'Overall Engagement'],
        datasets: [
            { label: 'codetorso', data: [0.902, 0.432, 0.926, 0.768], backgroundColor: MINT + 'aa', borderRadius: 5, barPercentage: 0.55 },
            { label: 'forthatredditguy', data: [0.905, 0.429, 0.769, 0.722], backgroundColor: PERI + 'aa', borderRadius: 5, barPercentage: 0.55 }
        ]
    },
    options: {
        responsive: true,
        plugins: { legend: { position: 'top' } },
        scales: { x: { grid: { display: false } }, y: { grid: { color: GRID }, max: 1, ticks: { callback: v => (v * 100) + '%' } } }
    }
});

// ─── Pronoun ────────────────────────────────────
new Chart(document.getElementById('pronounBar'), {
    type: 'bar',
    data: {
        labels: ['"I"', '"You"', '"We"'],
        datasets: [
            { label: 'codetorso', data: [1949, 1138, 162], backgroundColor: MINT + 'aa', borderRadius: 5 },
            { label: 'forthatredditguy', data: [1955, 653, 119], backgroundColor: PERI + 'aa', borderRadius: 5 }
        ]
    },
    options: {
        responsive: true,
        plugins: { legend: { position: 'top' } },
        scales: { x: { grid: { display: false } }, y: { grid: { color: GRID }, beginAtZero: true } }
    }
});

// ─── Profanity ──────────────────────────────────
new Chart(document.getElementById('profanityBar'), {
    type: 'bar',
    data: {
        labels: ['shit', 'wtf', 'fucking', 'fuck', 'damn', 'retarded', 'ass', 'hell'],
        datasets: [
            { label: 'codetorso', data: [61, 39, 24, 17, 8, 0, 7, 11], backgroundColor: MINT + '88', borderRadius: 3 },
            { label: 'forthatredditguy', data: [109, 38, 31, 26, 31, 31, 18, 15], backgroundColor: PERI + '88', borderRadius: 3 }
        ]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        plugins: { legend: { position: 'top' } },
        scales: { x: { grid: { color: GRID }, stacked: true }, y: { grid: { display: false }, stacked: true, ticks: { font: { family: "'JetBrains Mono',monospace", size: 10 } } } }
    }
});

// ─── FSI Gauge Ring ─────────────────────────────
const fsiCtx = document.getElementById('fsiGauge').getContext('2d');
new Chart(fsiCtx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [64.95, 35.05],
            backgroundColor: [GOLD, 'rgba(255,255,255,0.03)'],
            borderWidth: 0,
            borderRadius: 8
        }]
    },
    options: {
        cutout: '82%',
        rotation: -90,
        circumference: 360,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        animation: { animateRotate: true, duration: 2200, easing: 'easeOutQuart' }
    }
});

// ═══ SCROLL REVEAL ═══
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.08 });

document.querySelectorAll('.section').forEach(el => observer.observe(el));

// ═══ COUNTER ANIMATION ═══
function animateCounters() {
    document.querySelectorAll('.hs-num[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count);
        const duration = 2000;
        const start = performance.now();
        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target).toLocaleString();
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    });
}

const heroObs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { animateCounters(); heroObs.disconnect(); }
}, { threshold: 0.5 });
heroObs.observe(document.querySelector('.hero'));
