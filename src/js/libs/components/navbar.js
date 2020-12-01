import { searchStartDatepicker, searchEndDatepicker } from './datepicker';

export function initNavbar() {
    return {
        scrolled: false,
        height: 60,
        mobileOpen: false,
        scroll() {
            let scrollValue = window.scrollY;
            if (scrollValue >= this.height) {
                this.scrolled = true;
            } else {
                this.scrolled = false;
            }
            this.searchExpanded = false;
        },

        searchExpanded: false,
        expandSearch() {
            this.searchExpanded = true;
            console.log('clicked');
        },

        searchActive: false,
        locationDropOpened: false,
        startDatepicker: searchStartDatepicker,
        endDatepicker: searchEndDatepicker,
        startDateDropOpened: false,
        endDateDropOpened: false,

        openDrop(param) {

            switch (param) {
                case 'location-drop':
                    this.locationDropOpened = true;
                    this.searchActive = true;
                    break;
                case 'start-date-drop':
                    this.searchActive = true;
                    this.startDateDropOpened = true;
                    break;
                case 'end-date-drop':
                    this.endDateDropOpened = true;
                    break;

                default:
                    console.log(`Sorry, something went wrong.`);
            };

        },

        closeDrop(param) {

            switch (param) {
                case 'location-drop':
                    this.locationDropOpened = false;
                    this.searchActive = false;
                    break;
                case 'start-date-drop':
                    this.startDateDropOpened = false;
                    break;
                case 'end-date-drop':
                    this.endDateDropOpened = false;
                    break;

                default:
                    console.log(`Sorry, something went wrong.`);
            };

        }
    }
}