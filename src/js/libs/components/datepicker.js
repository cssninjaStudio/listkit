import datepicker from 'js-datepicker';

const searchStartDatepicker = datepicker('.search-datepicker-start', {
    id: 1,
    overlayButton: 'Confirm',
    minDate: new Date(),
    startDate: new Date(),
    showAllDates: true,
    formatter: (input, date, instance) => {
        const value = date.toLocaleDateString('en-EN', {
            month: "short", day: "numeric"
        });
        input.value = value;
    }
});

const searchEndDatepicker = datepicker('.search-datepicker-end', {
    id: 1,
    overlayButton: 'Confirm',
    minDate: new Date(),
    startDate: new Date(),
    showAllDates: true,
    formatter: (input, date, instance) => {
        const value = date.toLocaleDateString('en-EN', {
            month: "short", day: "numeric"
        });
        input.value = value;
    }
});

const searchStartDatepickerMobile = datepicker('.search-datepicker-start-mobile', {
    id: 2,
    overlayButton: 'Confirm',
    minDate: new Date(),
    startDate: new Date(),
    showAllDates: true,
    alwaysShow: true,
    formatter: (input, date, instance) => {
        const value = date.toLocaleDateString('en-EN', {
            month: "short", day: "numeric"
        });
        input.value = value;
    }
});

const searchEndDatepickerMobile = datepicker('.search-datepicker-end-mobile', {
    id: 2,
    overlayButton: 'Confirm',
    minDate: new Date(),
    startDate: new Date(),
    showAllDates: true,
    formatter: (input, date, instance) => {
        const value = date.toLocaleDateString('en-EN', {
            month: "short", day: "numeric"
        });
        input.value = value;
    }
});