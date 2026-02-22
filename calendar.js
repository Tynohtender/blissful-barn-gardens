document.addEventListener('DOMContentLoaded', function () {

    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        height: 650,

        // Disable past dates
        validRange: {
            start: new Date().toISOString().split('T')[0]
        },

        // Manually booked dates
        events: [
            {
                title: 'wedding day',
                start: '2026-02-20',
                display: 'background',
                className: 'booked-day'
            },
            {
                title: 'birthday party',
                start: '2026-02-25',
                display: 'background',
                className: 'booked-day'
            },
            {
                title: 'roora day',
                start: '2026-03-03',
                display: 'background',
                className: 'booked-day'
            },
            {
                title: 'coporate event',
                start: '2026-03-10',
                display: 'background',
                className: 'booked-day'
            }
        ],

        dateClick: function (info) {

            // Check if clicked date has a booked background event
            const booked = calendar.getEvents().some(event =>
                event.startStr === info.dateStr
            );

            if (booked) {
                return; // do nothing if booked
            }

            const message = encodeURIComponent(
                `Hello I want to book ${info.dateStr}`
            );

            window.open(
                `https://wa.me/263787811184?text=${message}`,
                '_blank'
            );
        }

    });

    calendar.render();
});
