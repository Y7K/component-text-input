import Vue from 'vue';

import _TextInput from './components/TextInput';

export default {
    registerGlobally: function() {
        Vue.component('text-input', _TextInput);
    },
};

export const TextInput = _TextInput;
