import setup from "../utils/setupTests";

const main = async () => {
    const port = await setup();  
    const servo1 = port.servo(8);
    const servo2 = port.servo(9);
    const led1 = port.led(12);

    console.log('Start')
    await servo1.lotate(0);
    await servo1.lotate(90);
    await led1.on();
    await servo1.lotate(180);
    // other operations...
}

main();