function toDevanagari(num) {
  const devMap = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
  return num
    .toString()
    .split('')
    .map((d) => devMap[+d])
    .join('');
}

const months2082 = [
  { name: 'वैशाख', days: 31 },
  { name: 'जेठ', days: 31 },
  { name: 'असार', days: 32 },
  { name: 'साउन', days: 31 },
  { name: 'भदौ', days: 31 },
  { name: 'असोज', days: 31 },
  { name: 'कार्तिक', days: 30 },
  { name: 'मंसिर', days: 29 },
  { name: 'पुस', days: 30 },
  { name: 'माघ', days: 29 },
  { name: 'फागुन', days: 30 },
  { name: 'चैत', days: 30 },
];

let currentMonthIndex = 0;
let startDay = 1; // Let's assume Baisakh 1, 2082 is on Monday (1)

function calculateStartDays() {
  const startDays = [startDay];
  for (let i = 1; i < months2082.length; i++) {
    const prevStart = startDays[i - 1];
    const prevDays = months2082[i - 1].days;
    startDays.push((prevStart + prevDays) % 7);
  }
  return startDays;
}

const startDays = calculateStartDays();

const holidays2082 = {
  वैशाख: [
    { day: 1, description: 'नयाँ वर्ष' },
    { day: 18, description: 'अन्तर्राष्ट्रिय श्रमिक दिवस' },
    { day: 29, description: 'बुद्ध जयन्ती, उभौली पर्व' },
  ],
  जेठ: [{ day: 15, description: 'गणतन्त्र दिवस' }],
  असार: [],
  साउन: [
    { day: 24, description: 'जनै पूर्णिमा, रक्षा बन्धन' },
    { day: 31, description: 'श्रीकृष्ण जन्माष्टमी' },
  ],
  भदौ: [
    { day: 10, description: 'हरितालिका तीज' },
    { day: 21, description: 'इन्द्रजात्रा' },
  ],
  असोज: [
    { day: 3, description: 'संविधान दिवस' },
    { day: 13, description: 'फूलपाती' },
    { day: 14, description: '' },
    { day: 15, description: '' },
    { day: 16, description: 'विजया दशमी' },
    { day: 17, description: '' },
  ],
  कार्तिक: [
    { day: 3, description: 'कुकुर तिहार, लक्ष्मी पूजा' },
    { day: 4, description: '' },
    { day: 5, description: 'गोवर्धन पूजा, म्हपूजा' },
    { day: 6, description: 'भाइटीका' },
    { day: 7, description: '' },
    { day: 10, description: 'छठ पर्व' },
  ],
  मंसिर: [],
  पुस: [{ day: 27, description: 'पृथ्वी जयन्ती' }],
  माघ: [
    { day: 1, description: 'माघे संक्रान्ति' },
    { day: 5, description: 'सोनाम ल्होसार' },
    { day: 16, description: 'शहीद दिवस' },
  ],
  फागुन: [
    { day: 3, description: 'महाशिवरात्री' },
    { day: 7, description: 'प्रजातन्त्र दिवस' },
    { day: 18, description: 'फागु पूर्णिमा' },
    { day: 19, description: 'तराई होली' },
    { day: 24, description: 'अन्तर्राष्ट्रिय नारी दिवस' },
  ],
  चैत: [{ day: 13, description: 'श्री राम नवमी' }],
};

const customEvents2082 = {
  वैशाख: [
    { day: 3, description: 'नयाँ शैक्षिक सत्र सुरु' },
    { day: 26, description: 'Handwriting Competititon' },
  ],
  जेठ: [
    {
      day: 22,
      description: 'Drawing Competition (Junior) / Speech Competition (Senior)',
    },
    { day: 27, description: 'Unit Test' },
    { day: 28, description: 'Unit Test' },
    { day: 29, description: 'Unit Test' },
    { day: 30, description: 'Unit Test' },
  ],
  असार: [
    { day: 24, description: 'First Terminal Examination' },
    { day: 25, description: 'First Terminal Examination' },
    { day: 26, description: 'First Terminal Examination' },
    { day: 27, description: 'First Terminal Examination' },
    { day: 29, description: 'First Terminal Examination' },
    { day: 30, description: 'First Terminal Examination' },
    { day: 31, description: 'First Terminal Examination' },
    { day: 32, description: 'First Terminal Examination' },
  ],
  साउन: [
    { day: 9, description: 'Result Distribution' },
    { day: 16, description: 'Quiz Competition' },
    { day: 27, description: 'Unit Test' },
    { day: 28, description: 'Unit Test' },
    { day: 29, description: 'Unit Test' },
    { day: 30, description: 'Unit Test' },
  ],
  भदौ: [
    {
      day: 20,
      description: 'Spelling Competition (Junior) / Chess Competition (Senior)',
    },
  ],
  असोज: [
    { day: 2, description: 'Second Terminal Examination' },
    { day: 5, description: 'Second Terminal Examination' },
    { day: 6, description: 'Second Terminal Examination' },
    { day: 7, description: 'Second Terminal Examination' },
    { day: 8, description: 'Second Terminal Examination' },
    { day: 9, description: 'Second Terminal Examination' },
    { day: 10, description: 'Second Terminal Examination' },
    { day: 12, description: 'Second Terminal Examination' },
    { day: 24, description: 'Story Writing (Junior) / Essay Writing (Senior)' },
    { day: 31, description: 'Result Distribution' },
  ],
  कार्तिक: [{ day: 14, description: 'Hot Potato (Junior) / Kabaddi (Senior)' }],
  मंसिर: [{ day: 5, description: 'Relay Race (Junior) / Kho-kho (Senior)' }],
  पुस: [
    { day: 21, description: 'Third Terminal Examination' },
    { day: 22, description: 'Third Terminal Examination' },
    { day: 23, description: 'Third Terminal Examination' },
    { day: 24, description: 'Third Terminal Examination' },
    { day: 25, description: 'Third Terminal Examination' },
    { day: 28, description: 'Third Terminal Examination' },
    { day: 29, description: 'Third Terminal Examination' },
    { day: 30, description: 'Third Terminal Examination' },
  ],
  माघ: [
    { day: 9, description: 'Cultural Program' },
    { day: 13, description: 'Result Distribution' },
    { day: 14, description: 'Football (Junior/Senior)' },
    { day: 15, description: 'Football (Junior/Senior)' },
    { day: 23, description: 'Running/Spoon/Chocolate Race' },
  ],
  फागुन: [{ day: 1, description: 'Long Jump/High Jump/Volleyball' }],
  चैत: [
    { day: 11, description: 'Annual Exam' },
    { day: 12, description: 'Annual Exam' },
    { day: 15, description: 'Annual Exam' },
    { day: 16, description: 'Annual Exam' },
    { day: 17, description: 'Annual Exam' },
    { day: 18, description: 'Annual Exam' },
    { day: 19, description: 'Annual Exam' },
    { day: 20, description: 'Annual Exam' },
    { day: 30, description: 'Result Distribution' },
  ],
};

function searchEvents() {
  const query = document
    .getElementById('searchInput')
    .value.trim()
    .toLowerCase();
  const resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = '';

  if (!query) return;

  const allEvents = [];

  for (const [month, holidays] of Object.entries(holidays2082)) {
    holidays.forEach((h) => {
      if (h.description && h.description.toLowerCase().includes(query)) {
        allEvents.push({
          month,
          day: h.day,
          type: 'बिदा',
          description: h.description,
          class: 'list-group-item list-group-item-danger',
        });
      }
    });
  }

  for (const [month, events] of Object.entries(customEvents2082)) {
    events.forEach((e) => {
      if (e.description && e.description.toLowerCase().includes(query)) {
        allEvents.push({
          month,
          day: e.day,
          type: 'कार्यक्रम',
          description: e.description,
          class: 'list-group-item list-group-item-success',
        });
      }
    });
  }

  if (allEvents.length === 0) {
    resultsContainer.innerHTML = `<div class="list-group-item">कुनै नतिजा भेटिएन</div>`;
    return;
  }

  allEvents.forEach((event) => {
    const nepaliDay = toDevanagari(event.day);
    const item = document.createElement('div');
    item.className = event.class;
    item.innerHTML = `<strong>${event.month} ${nepaliDay}</strong> – ${event.description} (${event.type})`;
    item.style.cursor = 'pointer';
    item.onclick = () =>
      jumpToEvent(event.month, event.day, event.description, event.type);
    resultsContainer.appendChild(item);
  });
}

function jumpToEvent(monthName, day, description, type) {
  // Find the month index
  const index = months2082.findIndex((m) => m.name === monthName);
  if (index === -1) return;

  currentMonthIndex = index;
  localStorage.setItem('calendarMonthIndex', currentMonthIndex);
  renderCalendar();

  // Wait until calendar is rendered
  setTimeout(() => {
    const cells = document.querySelectorAll('.calendar-date');
    for (let cell of cells) {
      if (cell.innerText === toDevanagari(day)) {
        if (
          cell.parentElement.parentElement.parentElement
            .querySelector('h3')
            ?.innerText.includes(monthName)
        ) {
          cell.scrollIntoView({ behavior: 'smooth', block: 'center' });
          cell.classList.add('selected');

          if (type === 'बिदा') {
            showHolidayModal(monthName, day, description);
          } else {
            showCustomEventModal(monthName, day, description);
          }
          break;
        }
      }
    }
  }, 100);
}

function renderCalendar() {
  const month = months2082[currentMonthIndex];
  document.getElementById('month-title').innerText = `${
    month.name
  } ${toDevanagari(2082)}`;

  const calendarBody = document.getElementById('calendar-body');
  calendarBody.innerHTML = '';

  let day = 1;
  const firstDay = startDays[currentMonthIndex];

  for (let i = 0; i < 6; i++) {
    let row = '<tr>';
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        row += '<td></td>';
      } else if (day > month.days) {
        row += '<td></td>';
      } else {
        const isSaturday = j === 6;
        const dayInMonth = day;
        const monthName = months2082[currentMonthIndex].name;

        const isHoliday = holidays2082[monthName]?.some(
          (holiday) => holiday.day === dayInMonth
        );
        const isCustomEvent = customEvents2082[monthName]?.some(
          (event) => event.day === dayInMonth
        );

        const holiday = holidays2082[monthName]?.find(
          (holiday) => holiday.day === dayInMonth
        );
        const customEvent = customEvents2082[monthName]?.find(
          (event) => event.day === dayInMonth
        );

        const title = isHoliday
          ? holiday?.description || 'बिदा'
          : isCustomEvent
          ? customEvent?.description || 'घटना'
          : '';

        const classes = `py-6 text-center calendar-date${
          isSaturday ? ' saturday' : ''
        }${isHoliday ? ' holiday' : ''}${isCustomEvent ? ' custom-event' : ''}`;

        let onClick = `selectDate(this)`;
        if (isHoliday) {
          onClick = `showHolidayModal('${monthName}', ${dayInMonth}, '${(
            holiday?.description || 'बिदा'
          ).replace(/'/g, "\\'")}')`;
        } else if (isCustomEvent) {
          onClick = `showCustomEventModal('${monthName}', ${dayInMonth}, '${(
            customEvent?.description || 'कार्यक्रम'
          ).replace(/'/g, "\\'")}')`;
        }

        row += `<td class="${classes}" onclick="${onClick}" title="${title}">${toDevanagari(
          day
        )}</td>`;
        day++;
      }
    }
    row += '</tr>';
    calendarBody.innerHTML += row;
    if (day > month.days) break;
  }
}

function prevMonth() {
  if (currentMonthIndex > 0) {
    currentMonthIndex--;
    renderCalendar();
  }
}

function nextMonth() {
  if (currentMonthIndex < months2082.length - 1) {
    currentMonthIndex++;
    renderCalendar();
  }
}

renderCalendar();

// Deselect selected date when clicking outside the calendar
document.addEventListener('click', function (event) {
  const isDateCell = event.target.classList.contains('calendar-date');

  if (!isDateCell) {
    document.querySelectorAll('.calendar-date.selected').forEach((cell) => {
      cell.classList.remove('selected');
    });
  }
});

function selectDate(cell) {
  document.querySelectorAll('.calendar-date.selected').forEach((c) => {
    c.classList.remove('selected');
  });
  cell.classList.add('selected');
  const selectedDay = cell.innerText;
  const selectedMonth = months2082[currentMonthIndex].name;
}

function showHolidayModal(monthName, day, description) {
  const modal = new bootstrap.Modal(document.getElementById('holidayModal'));
  const body = document.getElementById('holidayModalBody');

  // Clear old styles
  body.classList.remove('modal-custom-event');
  body.classList.add('modal-holiday');

  const nepaliDate = `${monthName} ${toDevanagari(day)}, २०८२`;
  document.getElementById('holidayModalLabel').innerText = 'बिदा विवरण';
  body.innerHTML = `<strong>${nepaliDate}</strong><br>${description}`;

  modal.show();
}

function showCustomEventModal(monthName, day, description) {
  const modal = new bootstrap.Modal(document.getElementById('holidayModal'));
  const body = document.getElementById('holidayModalBody');

  // Clear old styles
  body.classList.remove('modal-holiday');
  body.classList.add('modal-custom-event');

  const nepaliDate = `${monthName} ${toDevanagari(day)}, २०८२`;
  document.getElementById('holidayModalLabel').innerText = 'कार्यक्रम विवरण';
  body.innerHTML = `<strong>${nepaliDate}</strong><br>कार्यक्रम: ${description}`;

  modal.show();
}

// Add this at the beginning of your script.js file
function initTheme() {
  // Check for saved theme preference
  const darkMode = localStorage.getItem('darkMode') === 'true';
  document.documentElement.classList.toggle('dark', darkMode);
  updateThemeButton(darkMode);
}

function updateThemeButton(isDark) {
  const button = document.getElementById('themeToggle');
  button.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
}

// Add theme toggle functionality
document.getElementById('themeToggle').addEventListener('click', function () {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('darkMode', isDark);
  updateThemeButton(isDark);
});

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initTheme);

// Load saved month from localStorage (if exists)
const savedMonthIndex = localStorage.getItem('calendarMonthIndex');
if (savedMonthIndex !== null) {
  currentMonthIndex = parseInt(savedMonthIndex);
}
renderCalendar();

// Save to localStorage on month change
function prevMonth() {
  if (currentMonthIndex > 0) {
    currentMonthIndex--;
    localStorage.setItem('calendarMonthIndex', currentMonthIndex);
    renderCalendar();
  }
}

function nextMonth() {
  if (currentMonthIndex < months2082.length - 1) {
    currentMonthIndex++;
    localStorage.setItem('calendarMonthIndex', currentMonthIndex);
    renderCalendar();
  }
}
