export function initNavbarMobile() {
    return {
        mobileSearchOpened: false,
        toggleMobileSearch() {
            this.mobileSearchOpened = !this.mobileSearchOpened;
        }
    }
}