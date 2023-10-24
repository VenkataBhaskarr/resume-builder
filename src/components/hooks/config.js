import {atom} from "recoil"


export const configState = atom({
    key: 'configState',
    default: {
        // Define your initial configuration here
        contactInfo: {
            name: '',
            title: '',
            email: '',
            firstLink: '',
            secondLink: '',
        },
        summary: '',
        workExperience: [],
        education: [],
        skills: [],
    },
});

