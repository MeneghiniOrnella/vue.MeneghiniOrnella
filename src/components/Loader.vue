<template>
    <div class="loader">
        <div class="dash one" />
        <div class="dash two" />
        <div class="dash three" />
        <div class="dash four" />
    </div>
</template>

<style scoped>
.loader {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.dash {
    margin: 0 15px;
    width: 35px;
    height: 15px;
    border-radius: 8px;
    background: turquoise;
    box-shadow: 0 0 10px 0 #fecdff;
}
.one {
    margin-right: -18px;
    transform-origin: center left;
    -webkit-animation: spinOne 2s linear infinite;
    animation: spinOne 2s linear infinite;
}
.two {
    -webkit-animation: spinTwo 2s linear infinite;
    animation: spinTwo 2s linear infinite;
    -moz-animation-delay: 2s;
    animation-delay: 2s;
}
.three {
    -webkit-animation: spinThree 3s linear infinite;
    animation: spinThree 3s linear infinite;
    -moz-animation-delay: 3s;
    animation-delay: 3s;
}
.four {
    -webkit-animation: spinFour 4s linear infinite;
    animation: spinFour 4s linear infinite;
    -moz-animation-delay: 4s;
    animation-delay: 4s;
}
@-webkit-keyframes spinOne {
    0% {
        transform: rotate(0deg);
    } 25% {
        transform: rotate(360deg);
    } 30% {
        transform: rotate(370deg);
    } 35% {
        transform: rotate(360deg);
    } 100% {
        transform: rotate(360deg);
    }
}
@keyframes spinOne {
    0% {
        transform: rotate(0deg);
    } 25% {
        transform: rotate(360deg);
    } 30% {
        transform: rotate(370deg);
    } 35% {
        transform: rotate(360deg);
    } 100% {
        transform: rotate(360deg);
    }
}
@-webkit-keyframes spinTwo {
    0% {
        transform: rotate(0deg);
    } 20% {
        transform: rotate(0deg);
    } 30% {
        transform: rotate(-180deg);
    } 35% {
        transform: rotate(-190deg);
    } 40% {
        transform: rotate(-180deg);
    } 78% {
        transform: rotate(-180deg);
    } 95% {
        transform: rotate(-380deg);
    } 100% {
        transform: rotate(-360deg);
    }
}
@keyframes spinTwo {
    0% {
        transform: rotate(0deg);
    } 20% {
        transform: rotate(0deg);
    } 30% {
        transform: rotate(-180deg);
    } 35% {
        transform: rotate(-190deg);
    } 40% {
        transform: rotate(-180deg);
    } 78% {
        transform: rotate(-180deg);
    } 95% {
        transform: rotate(-380deg);
    } 100% {
        transform: rotate(-360deg);
    }
}
@-webkit-keyframes spinThree {
    0% {
        transform: rotate(0deg);
    } 25% {
        transform: rotate(360deg);
    } 30% {
        transform: rotate(370deg);
    } 35% {
        transform: rotate(360deg);
    } 100% {
        transform: rotate(360deg);
    }
}
@keyframes spinThree {
    0% {
        transform: rotate(0deg);
    } 25% {
        transform: rotate(360deg);
    } 30% {
        transform: rotate(370deg);
    } 35% {
        transform: rotate(360deg);
    } 100% {
        transform: rotate(360deg);
    }
}
@-webkit-keyframes spinFour {
    0% {
        transform: rotate(0deg);
    } 38% {
        transform: rotate(0deg);
    } 60% {
        transform: rotate(-360deg);
    } 65% {
        transform: rotate(-370deg);
    } 75% {
        transform: rotate(-360deg);
    } 100% {
        transform: rotate(-360deg);
    }
}
@keyframes spinFour {
    0% {
        transform: rotate(0deg);
    } 38% {
        transform: rotate(0deg);
    } 60% {
        transform: rotate(-360deg);
    } 65% {
        transform: rotate(-370deg);
    } 75% {
        transform: rotate(-360deg);
    } 100% {
        transform: rotate(-360deg);
    }
}
</style>