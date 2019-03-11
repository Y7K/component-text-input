<script>
    /**
     *
     */

    import debounce from 'lodash/debounce';

    export default {

        props: {
            value: {
                type: [String, Number],
                default: null,
            },
            placeholder: {
                type: [String],
                default: '',
            },
        },


        methods: {
            change: debounce(function (e) { // eslint-disable-line
                this.$emit('input', e.target.value);
            }, 500),
        },
    };

</script>

<template>
    <input
        class="textInput-inputField"
        type="text"
        :value="value"
        @input="change"
        :placeholder="placeholder"
    >
</template>
