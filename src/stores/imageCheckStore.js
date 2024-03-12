import { defineStore } from 'pinia';

export const useImageCheckStore = defineStore('image', {
    state: () => ({
        imageExists: false
    }),
    actions: {
        checkImageExists(url) {
            return new Promise((resolve) => {
                var img = new Image();
                img.onload = () => {
                    this.imageExists = true;
                    resolve(true);
                };
                img.onerror = () => {
                    this.imageExists = false;
                    resolve(false);
                };
                img.src = url;
            });
        }
    },
});
