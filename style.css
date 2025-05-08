body {
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
}

.robot {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: bounce 2s infinite;
}

.head {
    width: 100px;
    height: 100px;
    background-color: #333;
    border-radius: 10px;
    position: relative;
}

.eye {
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 30px;
    animation: blink 3s infinite;
}

.eye.left {
    left: 20px;
}

.eye.right {
    right: 20px;
}

.mouth {
    width: 50px;
    height: 10px;
    background-color: #ff4d4d;
    border-radius: 5px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
}

.body {
    width: 80px;
    height: 100px;
    background-color: #666;
    margin-top: 10px;
    position: relative;
}

.arm {
    width: 20px;
    height: 60px;
    background-color: #333;
    position: absolute;
    top: 20px;
    animation: wave 2s infinite;
}

.arm.left {
    left: -30px;
}

.arm.right {
    right: -30px;
    animation-delay: 1s;
}

.legs {
    display: flex;
    justify-content: space-between;
    width: 60px;
    margin-top: 10px;
}

.leg {
    width: 20px;
    height: 50px;
    background-color: #333;
}

@keyframes blink {
    0%, 90%, 100% {
        transform: scaleY(1);
    }
    95% {
        transform: scaleY(0.1);
    }
}

@keyframes wave {
    0%, 100% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(20deg);
    }
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}