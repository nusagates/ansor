<template>
    <v-pagination
        density="compact"
        color="teal"
        v-if="data!=null"
        v-model="data.current_page"
        :length="data.last_page"
        :total-visible="totalVisible"
        v-show="data.last_page>1"
        @update:modelValue="method(data.current_page)"
        rounded="circle"
    ></v-pagination>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        data: {
            type: Object,
            default: () => null
        },
        method: {type: Function},
        totalVisible: {
            type: String,
            default: () => undefined
        }
    },
    methods: {
        getData(page) {
            this.$emit('pagination-change-page', page);
        }
    }
}
</script>

<style scoped>

</style>
