<template>
    <h2>
    <button class="button7" v-on:click="plusNum()"><font size="+20">{{num}}</font></button>
    </h2>
</template>
<script>

export default({
    data(){
        return {
            num: 0,
        }
    },
    methods: {
        plusNum(){
            this.num++;
        }
    }
})
</script>

<style>
.button7 {
    padding: 200px 400px;
    background-color: yellow;
}

</style>
