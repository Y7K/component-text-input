import Vue from 'vue';

import _TextInput from './components/TextInput';

export default {
    registerGlobally() {
        Vue.component('text-input', _TextInput);
    },
};

export const TextInput = _TextInput;
