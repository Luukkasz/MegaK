class Test {
    push() {
        console.log('Testing push...');
        const ar = [];
        const start = + new Date();
        for (let i=0; i<100000;  i++) {
            ar.push(i);
        }
        const end = + new Date();
        console.log(`Zajęło to ${end - start} ms.`)
    }

    destructuring() {
        console.log('Testing destructuring...');
        let ar: number[] = [];
        const start = + new Date();
        for (let i=0; i<100000;  i++) {
            ar = [...ar, i];
        }
        const end = + new Date();
        console.log(`Zajęło to ${end - start} ms.`)
    }

    last() {
        console.log('Testing last...');
        const ar: number[] = [];
        const start = + new Date();
        for (let i=0; i<100000;  i++) {
            ar[ar.length] = i;
        }
        const end = + new Date();
        console.log(`Zajęło to ${end - start} ms.`)
    }
}

const test = new Test();
test.destructuring()
test.last()
test.push()