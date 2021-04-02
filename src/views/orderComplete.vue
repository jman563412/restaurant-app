<template>
    <body class="backgroundcolor">
    <font size="+12">ORDER COMPLETE <br> THE ORDER HAS BEEN SENT TO THE KITCHEN</font>
    <p>
        <font size="+2">While you wait for your food please feel free <br>to play any of our games or use the music tab!!!</font>
        </p>

    
    <br>
    </body>
</template>

<script>

export default ({
    methods: {
        eraseTempArray(){
            store.commit('eraseOrder');
        }
    }
})
</script>

<style>
    .backgroundcolor {
        background-color: rgb(233, 161, 67);
        text-align: center;
        padding-bottom: 500px;
        padding-top: 10%;
        height: 100%,
    }
</style>