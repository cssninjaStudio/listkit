import { searchStartDatepickerMobile, searchEndDatepickerMobile } from './datepicker';

export function initNavbarMobile() {
    return {

        scrolled: false,
        height: 60,
        scroll() {
            let scrollValue = window.scrollY;
            if (scrollValue >= this.height) {
                this.scrolled = true;
            } else {
                this.scrolled = false;
            }
            this.searchExpanded = false;
        },

        mobileSearchOpened: false,
        toggleMobileSearch() {
            this.mobileSearchOpened = !this.mobileSearchOpened;
        },

        mobileSearchPanelOpened: false,
        toggleMobileSearchPanel() {
            this.mobileSearchPanelOpened = !this.mobileSearchPanelOpened;
            if (this.mobileSearchPanelOpened === false) {
                this.activeWizardStep = 0;
            }
        },

        activeWizardStep: 0,
        wizardForward(e) {
            
            e.target.classList.add('is-loading');
            setTimeout(() => {
                e.target.classList.remove('is-loading');
                this.activeWizardStep = this.activeWizardStep + 1;

                if (this.activeWizardStep === 2) {
                    e.target.innerHTML = 'Search';
                } 

                else if (this.activeWizardStep === 3) {
                    window.location.href = '/';
                } 

                else {
                    e.target.innerHTML = 'Next';
                }

                console.log(this.activeWizardStep);
            }, 800);
        },

        wizardBack(e) {
            console.log(e.target);
            e.target.classList.add('is-loading');
            setTimeout(() => {
                e.target.classList.remove('is-loading');
                if (this.activeWizardStep > 0) {
                    this.activeWizardStep = this.activeWizardStep - 1;
                } else {
                    this.toggleMobileSearchPanel();
                }
            }, 800);
        },

        startDatepicker: searchStartDatepickerMobile,
        endDatepicker: searchEndDatepickerMobile,
    }
}